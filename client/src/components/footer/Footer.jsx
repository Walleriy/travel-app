import React from 'react';
import './Footer.scss';
import rsPhoto from './rs_logo.png';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation('translations');

  return (
    <footer className="footer">
      <div className="footer__developers">
        {t('footer.developers')}
        <ul>
          <li>
            <a
              className="footer__link"
              href={'https://github.com/Walleriy'}
              rel="noreferrer"
              target="_blank"
            >
              Walleriy Stapenenko
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href={'https://github.com/tonysmaryn'}
              rel="noreferrer"
              target="_blank"
            >
              Tony Maryn
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__year">2021</div>
      <div className="footer__rss">
        <a
          className="footer__link"
          href={'https://rs.school/react/'}
          rel="noreferrer"
          target="_blank"
        >
          <img className="footer__img" src={rsPhoto} alt="RS School"></img>
        </a>
      </div>
    </footer>
  );
};
