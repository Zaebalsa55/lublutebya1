import Image from 'next/image'

export default function FillImage({ src, alt = '', className = '', priority = false, quality, objectFit = 'cover', unoptimized = false }) {
  return (
    <div className={className} style={{ position: 'relative' }}>
      <Image src={src} alt={alt} fill priority={priority} quality={quality} unoptimized={unoptimized} />
    </div>
  )
}
