import React from 'react'

const OrderButton = ({ onClick, className = '', variant = 'primary', text = 'Заказать мастера' }) => {
  return (
    <button
      type="button"
      className={`order-button ${variant} ${className}`}
      onClick={onClick}
    >
      <span
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></span>

      <style jsx>
        {`
          .order-button {
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-style: normal;
            font-family: var(--font-nunito);
            font-weight: 400;
            line-height: 1.15;
            letter-spacing: 1.5px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            border: none;
            border-radius: 8px;
            background-color: rgb(40, 40, 40);
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .order-button.primary {
            width: 100%;
            height: 60px;
            max-width: 350px;
            min-width: 180px;
            box-shadow: 5px 5px 10px 0px rgba(43, 43, 43, 0.68);
            max-height: 60px;
            min-height: 60px;
          }

          .order-button.footer {
            width: 100%;
            height: 100%;
            max-width: 330px;
            min-width: 170px;
            box-shadow: 5px 5px 10px 0px rgba(43, 43, 43, 0.68);
            max-height: 50px;
            min-height: 55px;
          }

          .order-button:hover {
            box-shadow: 5px 5px 15px 0px rgba(43, 43, 43, 0.8);
            transform: translateY(-2px);
            background-color: #87ceeb;
          }

          .order-button:active {
            transform: translateY(0px);
            box-shadow: 0px 0px 8px 0px #87ceeb, 3px 3px 8px 0px rgba(43, 43, 43, 0.9);
          }

          @media (max-width: 767px) {
            .order-button.footer {
              min-height: 50px;
            }
          }
        `}
      </style>
    </button>
  )
}

export default OrderButton
