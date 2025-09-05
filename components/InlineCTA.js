import PropTypes from 'prop-types'

const InlineCTA = ({ onClick, className = '' }) => {
  return (
    <>
      <div className={`inline-cta ${className}`} onClick={onClick}>
        <img alt="Позвонить" src="/ICONS/29.svg" loading="lazy" className="inline-cta__icon" />
        <strong className="inline-cta__text">Вызвать мастера</strong>
      </div>
      <style jsx>{`
        .inline-cta { gap: 4px; width: 100%; display: flex; align-items: center; transition: transform 0.2s ease, background-color 0.2s ease; border-radius: 4px; padding: 0 4px; cursor: pointer; }
        .inline-cta__text { fill: #4ec8ed; color: #4ec8ed; width: 100%; font-size: 14px; max-width: 150px; align-self: center; font-style: normal; text-align: center; font-family: var(--font-nunito); font-weight: 400; line-height: 1; text-decoration: none; transition: color 0.3s ease; }
        .inline-cta:hover { transform: translateY(-2px); }
        .inline-cta__icon { width: 20px; height: 19px; align-self: center; object-fit: cover; transition: transform 0.2s ease, filter 0.2s ease; }
        .inline-cta:hover .inline-cta__icon { transform: rotate(15deg); filter: brightness(1.2); }
        .inline-cta:hover .inline-cta__text { color: #3A9BC1; fill: #3A9BC1; }
        .inline-cta:active { transform: translateY(0); }
        @media (max-width: 479px) { .inline-cta__text { font-size: 14px; line-height: 1; } }
      `}</style>
    </>
  )
}

InlineCTA.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default InlineCTA
