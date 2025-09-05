import React from 'react'
import OrderButton from './OrderButton'
import { PHONE_DISPLAY, PHONE_DISPLAY_2 } from '../utils/contacts'

const CallMasterSection = ({
  onOrderClick,
  title = 'Когда вызывать мастера?',
  companyName = 'Ваше название',
  phones = [
    { icon: '/image%203823106.svg', number: PHONE_DISPLAY },
    { icon: '/image%203823107.svg', number: PHONE_DISPLAY_2 },
  ],
  buttonText = 'Заказать мастера',
}) => {
  const toTelHref = (s) => {
    const digits = s.replace(/\D+/g, '');
    const leadPlus = s.trim().startsWith('+') ? '+' : '';
    return `tel:${leadPlus}${digits}`;
  };
  return (
    <section className="callout-container" aria-label={title}>
      {/* corner dots */}
      <svg width="9" xmlns="http://www.w3.org/2000/svg" height="9" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet" className="dot top-right"><circle r="3.75" cx="5" cy="5" fill="#606060" vectorEffect="non-scaling-stroke"></circle></svg>
      <svg width="9" xmlns="http://www.w3.org/2000/svg" height="9" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet" className="dot bottom-right"><circle r="3.75" cx="5" cy="5" fill="#606060" vectorEffect="non-scaling-stroke"></circle></svg>
      <svg width="9" xmlns="http://www.w3.org/2000/svg" height="9" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet" className="dot bottom-left"><circle r="3.75" cx="5" cy="5" fill="#606060" vectorEffect="non-scaling-stroke"></circle></svg>
      <svg width="9" xmlns="http://www.w3.org/2000/svg" height="9" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet" className="dot top-left"><circle r="3.75" cx="5" cy="5" fill="#606060" vectorEffect="non-scaling-stroke"></circle></svg>

      {/* dashed borders */}
      <svg width="330" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 330 20" preserveAspectRatio="none" className="dash top"><path d="M0 10 H330" fill="none" stroke="#000000" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeDasharray="11 11"></path></svg>
      <svg width="330" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 330 20" preserveAspectRatio="none" className="dash bottom"><path d="M0 10 H330" fill="none" stroke="#000000" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeDasharray="11 11"></path></svg>
      <svg width="20" xmlns="http://www.w3.org/2000/svg" height="110" viewBox="0 0 20 110" preserveAspectRatio="none" className="dash right"><path d="M10 0 V110" fill="none" stroke="#000000" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeDasharray="11 11"></path></svg>
      <svg width="20" xmlns="http://www.w3.org/2000/svg" height="110" viewBox="0 0 20 110" preserveAspectRatio="none" className="dash left"><path d="M10 0 V110" fill="none" stroke="#000000" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeDasharray="11 11"></path></svg>

      <h2 className="callout-title">{title}</h2>
      <p className="callout-text">
        <span>Если вы выполнили все рекомендации, но проблема осталась — обратитесь в сервис&nbsp;</span>
        <span className="company-quote">"</span>
        <span className="company-name">{companyName}</span>
        <span className="company-quote">"</span>
        <span>.</span>
        <span> Наши специалисты быстро приедут к вам в желаемое вами время в любой район Одессы и выполнят качественную диагностику и ремонт.</span>
      </p>
      <svg width="330" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 330 20" preserveAspectRatio="none" className="dash mid"><path d="M0 10 H330" fill="none" stroke="#000000" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeDasharray="11 11"></path></svg>
      <strong className="workdays">Работаем без выходных</strong>

      <div className="contacts-row">
        <div className="phones">
          {phones.map((p, idx) => (
            <div className="phone-item" key={idx}>
              <img alt="phone" src={p.icon} loading="lazy" className="phone-icon" />
              <a href={toTelHref(p.number)} className="phone-number" aria-label={`Позвонить по номеру ${p.number}`}>{p.number}</a>
            </div>
          ))}
        </div>
        <OrderButton onClick={onOrderClick} text={buttonText} />
      </div>

      <style jsx>{`
        .callout-container {
          gap: var(--dl-layout-space-oneandhalfunits);
          width: 100%;
          height: 100%;
          display: flex;
          position: relative;
          max-width: 100%;
          box-shadow: 5px 5px 20px 0px #d4d4d4;
          margin-top: 50px;
          min-height: 330px;
          align-items: center;
          padding: var(--dl-layout-space-twounits);
          border-radius: var(--dl-layout-radius-imageradius);
          flex-direction: column;
          justify-content: center;
          background-color: #fdfdf6;
        }
        .dot { position: absolute; width: 9px; height: 9px; }
        .top-right { top: -15px; right: -14px; }
        .bottom-right { right: -15px; bottom: -14px; }
        .bottom-left { left: -15px; bottom: -14px; }
        .top-left { top: -15px; left: -14px; }
        .dash { position: absolute; }
        .top { top: -12px; left: 6px; width: 100%; height: 5px; }
        .bottom { bottom: -12px; left: 5px; width: 100%; height: 5px; }
        .right { top: 0; right: -12px; width: 5px; height: 100%; }
        .left { bottom: -3px; left: -12px; width: 5px; height: 100%; }
        .mid { position: static; display: block; width: 100%; height: 5px; max-width: 600px; margin: 5px 0; }

        .callout-title {
          color: var(--dl-color-theme-neutral-dark);
          font-size: 18px;
          text-align: center;
          font-family: var(--font-nunito);
          font-weight: 400;
        }
        .callout-text {
          color: rgba(39, 38, 38, 0.99);
          width: 100%;
          max-width: 100%;
          height: auto;
          font-size: 16px;
          text-align: left;
          font-family: var(--font-nunito);
          font-weight: 300;
          margin: 3px 0 5px;
          align-self: center;
        }
        .company-quote { color: #58c3e8; font-weight: 500; }
        .company-name { color: #58c3e8; font-weight: 500; }
        .workdays {
          color: #58c3e8;
          font-size: 16px;
          font-family: var(--font-nunito);
          font-weight: 500;
          text-decoration: underline;
          display: block;
          margin: 4px 0 3px;
        }
        .contacts-row {
          gap: var(--dl-layout-space-unit);
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          margin-top: calc(var(--dl-layout-space-unit) / 2);
        }
        .phones {
          gap: var(--dl-layout-space-halfunit);
          width: 100%;
          display: flex;
          max-width: 250px;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }
        .phone-item {
          gap: var(--dl-layout-space-halfunit);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .phone-icon { width: 29px; height: 29px; object-fit: cover; }
        .phone-number {
          color: rgb(40, 40, 40);
          width: 100%;
          font-size: 18px;
          text-align: left;
          font-family: var(--font-nunito);
          font-weight: 400;
          text-decoration: none;
        }
        @media (max-width: 767px) {
          .callout-container { max-width: 400px; margin-left: auto; margin-right: auto; }
          .contacts-row { gap: calc(var(--dl-layout-space-unit) * 2); }
          .callout-text { text-align: center; }
          .phone-number { text-align: center; }
          .top { left: 1px; }
          .bottom { left: 0px; }
        }
        @media (max-width: 479px) {
          .callout-container { max-width: 290px; padding-left: 15px; padding-right: 15px; }
          .callout-title { color: rgb(49, 49, 49); font-size: 18px; font-family: var(--font-nunito); font-weight: 400; }
          .callout-text { font-size: 14px; font-family: var(--font-nunito); }
          .workdays { font-size: 15px; }
          .phone-number { font-size: 17px; }
          .contacts-row { gap: calc(var(--dl-layout-space-unit) * 2 - 3px); }
          .top { left: 1px; }
          .bottom { left: 0px; }
        }
      `}</style>
    </section>
  )
}

export default CallMasterSection
