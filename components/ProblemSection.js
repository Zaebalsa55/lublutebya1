import React from 'react'

const ProblemSection = ({ 
  id, 
  title, 
  image, 
  imageAlt, 
  imageCaption, 
  content, 
  className = "page-thirdproblem1" 
}) => {
  return (
    <section id={id} className={className}>
      <div className="page-container16 zagolovkiskorobkoy">
        <h3 className="zagolovki2">{title}</h3>
        <svg
          width="330"
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 0 330 20"
          preserveAspectRatio="none"
          className="page-icon28"
        >
          <path
            d="M0 10 H330"
            fill="none"
            stroke="#000000"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="11 11"
          />
        </svg>
      </div>
      <div className="page-container17">
        {image && (
          <figure className="page-container18">
            <img
              alt={imageAlt}
              src={image}
              loading="lazy"
              className="page-image38230522"
            />
            <span className="page-text19">
              <span>{imageCaption}</span>
            </span>
          </figure>
        )}
        <div className="vicetext" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  )
}

export default ProblemSection
