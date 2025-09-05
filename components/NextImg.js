import Image from 'next/image'

export default function NextImg({ src, alt = '', className = '', priority = false, quality, objectFit = 'contain', unoptimized = false }) {
  return (
    <span className={`ni-wrap ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} quality={quality} unoptimized={unoptimized} />
      <style jsx>{`
        .ni-wrap { position: relative; display: inline-block; }
        :global(.ni-wrap > span) { position: static !important; }
        :global(.ni-wrap img) { object-fit: ${objectFit}; }
      `}</style>
    </span>
  )
}
