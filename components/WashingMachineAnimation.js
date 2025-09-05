import React from 'react'

const WashingMachineAnimation = ({ className = '', width = 77, height = 74, hidden = false, paused = false }) => {
  // Соотношение для масштабирования (оригинал 256x256)
  const scale = Math.min(width, height) / 256;
  
  return (
    <div
      className={`washing-machine-wrapper ${className} ${hidden ? 'washing-machine-hidden' : ''} ${paused ? 'washing-machine-paused' : ''}`}
      style={{
        width: width,
        height: height,
        display: hidden ? 'none' : 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        className="washing-machine"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center'
        }}
      >
        <div className="outer-white-circle" aria-hidden="true"></div>
        
        {/* Средний круг - 219x219, #FBFAF6, черная обводка 1px */}
        <div className="middle-circle"></div>
        
        {/* Внутренний круг с водой - 190x190, черная обводка 1px */}
        <div className="inner-circle">
          {/* Анимация воды */}
          <div className="water">
            <svg viewBox="0 0 560 20" className="water-wave water-wave-back">
              <use href="#wave"></use>
            </svg>
            <svg viewBox="0 0 560 20" className="water-wave water-wave-front">
              <use href="#wave"></use>
            </svg>
            <div className="water-inner">
              <div className="bubble bubble1"></div>
              <div className="bubble bubble2"></div>
              <div className="bubble bubble3"></div>
            </div>
          </div>
        </div>
        
        {/* Вертикальная ручка - 17x50, #87CEEB, черная обводка 1px */}
        <div className="handle"></div>
        
        {/* SVG определения для волн воды */}
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <symbol id="wave">
            <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
            <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
            <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
            <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
          </symbol>
        </svg>
      </div>

      <style jsx>{`
        .washing-machine-wrapper {
          position: relative;
        }
        .washing-machine {
          position: relative;
          width: 256px;
          height: 256px;
          z-index: 1;
        }

        /* Mobile-only concentric white circle behind the washer */
        .outer-white-circle {
          position: absolute;
          width: 256px;
          height: 256px;
          background: #ffffff;
          border-radius: 50%;
          z-index: 0;
          top: 0;
          left: 0;
          display: none;
        }
        @media (max-width: 479px) {
          .outer-white-circle { display: block; }
        }

        /* Средний круг - 219x219, #FBFAF6, черная обводка 1px */
        .middle-circle {
          position: absolute;
          width: 219px;
          height: 219px;
          background-color: #FBFAF6;
          border: 1px solid black;
          border-radius: 50%;
          top: 18.5px;
          left: 18.5px;
        }

        /* Внутренний круг с водой - 190x190, черная обводка 1px */
        .inner-circle {
          position: absolute;
          width: 190px;
          height: 190px;
          border: 1px solid black;
          border-radius: 50%;
          top: 33px;
          left: 33px;
          overflow: hidden;
        }

        /* Вертикальная ручка - 17x50, #87CEEB, черная обводка 1px */
        .handle {
          position: absolute;
          width: 17px;
          height: 50px;
          background-color: #87CEEB;
          border: 1px solid black;
          border-radius: 5px;
          top: 103px;
          left: 227px;
        }

        /* Анимация воды */
        .water {
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: 5;
          bottom: 0;
          left: 0;
          background: #87CEEB;
          transform: translate3d(0, 50%, 0);
        }

        .water-inner {
          position: absolute;
          width: 100%;
          height: 50%;
          top: 0;
          left: 0;
          overflow: hidden;
        }

        .water-wave {
          width: 200%;
          position: absolute;
          bottom: 100%;
        }

        .water-wave-back {
          right: 0;
          fill: #ADD8E6;
          animation: wave-back 2s infinite linear;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .water-wave-front {
          left: 0;
          fill: #87CEEB;
          margin-bottom: -1px;
          animation: wave-front 1.5s infinite linear;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        @keyframes wave-front {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes wave-back {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(50%, 0, 0);
          }
        }

        /* Bubble animations */
        .bubble {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: bubble-float 3s infinite ease-in-out;
        }

        .bubble1 {
          width: 8px;
          height: 8px;
          left: 20%;
          animation-delay: 0s;
        }

        .bubble2 {
          width: 12px;
          height: 12px;
          left: 60%;
          animation-delay: 1s;
        }

        .bubble3 {
          width: 6px;
          height: 6px;
          left: 80%;
          animation-delay: 2s;
        }

        @keyframes bubble-float {
          0% {
            bottom: 0;
            opacity: 0;
            transform: translateX(0);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            bottom: 100%;
            opacity: 0;
            transform: translateX(20px);
          }
        }

        /* Animation control classes */
        .washing-machine-hidden {
          display: none !important;
        }

        .washing-machine-paused .water-wave-front,
        .washing-machine-paused .water-wave-back,
        .washing-machine-paused .bubble {
          animation-play-state: paused !important;
        }

        /* Mobile optimizations - simplify animations on smaller screens */
        @media (max-width: 768px) {
          .water-wave-front, .water-wave-back {
            animation-duration: 3s; /* slower animation on mobile */
          }
          .bubble {
            animation-duration: 4s; /* slower bubbles on mobile */
          }
        }


        /* Respect user's motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .water-wave-front, .water-wave-back, .bubble {
            animation: none !important;
          }
          .water {
            transform: translate3d(0, 50%, 0) !important;
          }
        }
      `}</style>
    </div>
  )
}

export default WashingMachineAnimation
