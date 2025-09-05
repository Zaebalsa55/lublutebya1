import { useState } from 'react'

export default function NotifyForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState(null)
  const [agree, setAgree] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!agree) return setStatus('Пожалуйста, подтвердите согласие на обработку данных.')

    if (sending) return
    setSending(true)
    setStatus('Отправка...')
    try {
      const res = await fetch('/api/send-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, msg, honeypot }),
      })
      const raw = await res.text()
      let data = null
      try { data = raw ? JSON.parse(raw) : null } catch {}
      if (!res.ok) throw new Error((data && data.error) || raw || 'Ошибка')
      setStatus('Заявка отправлена — я получил уведомление.')
      setName(''); setPhone(''); setMsg('')
    } catch (err) {
      setStatus('Ошибка: ' + err.message)
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="notify-form">
      <input className="notify-input" placeholder="Имя" value={name} onChange={(e)=>setName(e.target.value)} />
      <input className="notify-input" placeholder="+380..." value={phone} onChange={(e)=>setPhone(e.target.value)} />
      <textarea className="notify-textarea" placeholder="Описание проблемы" value={msg} onChange={(e)=>setMsg(e.target.value)} />
      <input className="notify-honeypot" tabIndex="-1" autoComplete="off" value={honeypot} onChange={e=>setHoneypot(e.target.value)} />
      <label className="notify-consent">
        <input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)} /> Согласен(на) на обработку данных
      </label>
      <button type="submit" className="notify-submit" disabled={sending}>Отправить</button>
      <div className="notify-status">{status}</div>
      <style jsx>{`
        .notify-form { display: flex; flex-direction: column; gap: 12px; max-width: 520px; margin: 0 auto; }
        .notify-input, .notify-textarea { padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; background: #f9f9f9; outline: none; transition: all .2s ease; }
        .notify-textarea { min-height: 120px; resize: vertical; }
        .notify-input:focus, .notify-textarea:focus { border-color: #4EC8ED; background: #fff; box-shadow: 0 0 0 3px rgba(78, 200, 237, 0.1); }
        .notify-consent { display: block; margin-top: 8px; font-family: var(--font-nunito), sans-serif; }
        .notify-submit { color: #fff; font-size: 16px; font-family: var(--font-nunito); font-weight: 500; border: none; border-radius: 8px; letter-spacing: 1px; background-color: rgb(40, 40, 40); cursor: pointer; transition: all .3s ease; height: 55px; box-shadow: 5px 5px 10px rgba(43,43,43,.68); }
        .notify-submit:hover { box-shadow: 5px 5px 15px rgba(43,43,43,.8); transform: translateY(-2px); background-color: #87ceeb; }
        .notify-submit:active { transform: translateY(0); box-shadow: 0 0 8px #87ceeb, 3px 3px 8px rgba(43,43,43,.9); }
        .notify-status { margin-top: 8px; min-height: 20px; }
        .notify-honeypot { display: none; }
        @media (max-width: 767px) { .notify-submit { height: 50px; } }
      `}</style>
    </form>
  )
}
