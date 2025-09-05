// pages/api/send-notify.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST' })

  const BOT_TOKEN = process.env.TG_BOT_TOKEN
  const CHAT_ID = process.env.TG_CHAT_ID
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('Missing TG env vars')
    return res.status(500).json({ error: 'Server misconfigured' })
  }

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown'
  const { name = '', phone = '', msg = '', honeypot = '' } = req.body || {}

  if (honeypot && honeypot.trim() !== '') {
    return res.status(400).json({ error: 'Bot detected' })
  }

  if (!phone || !msg) return res.status(400).json({ error: 'Phone and message required' })
  if (typeof phone !== 'string' || typeof msg !== 'string') return res.status(400).json({ error: 'Invalid input' })
  if (msg.length > 1000) return res.status(400).json({ error: 'Message too long' })

  const phoneClean = phone.replace(/\s+/g, '')
  if (!/^\+?\d{7,15}$/.test(phoneClean)) return res.status(400).json({ error: 'Invalid phone format' })

  try {
    if (!globalThis._tgRate) globalThis._tgRate = new Map()
    const key = phoneClean + '|' + ip
    const now = Date.now()
    const prev = globalThis._tgRate.get(key) || 0
    const WINDOW_MS = 60 * 1000
    if (now - prev < WINDOW_MS) {
      return res.status(429).json({ error: 'Too many requests. Try later.' })
    }
    globalThis._tgRate.set(key, now)
  } catch (e) {
    console.warn('Rate map failed', e)
  }

  const page = req.headers.referer || 'site'
  const ua = req.headers['user-agent'] || ''
  const when = new Date().toLocaleString()

  const text = `Новая заявка (${when})\nИмя: ${name || '-'}\nТел: ${phoneClean}\nСообщение: ${msg}\nСтрани��а: ${page}\nIP: ${ip}\nUA: ${ua}`

  try {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    })
    const j = await resp.json()
    if (!j.ok) {
      console.error('TG send error', j)
      return res.status(500).json({ error: j && (j.description || j.error) ? (j.description || j.error) : 'Telegram send failed' })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Send notify error', err)
    return res.status(500).json({ error: 'Send failed' })
  }
}
