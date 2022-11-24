import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import dashboard from './../../assets/images/welcomeDashboard.png';
import darkDashboard from './../../assets/images/welcomeDashboardDark.png';
import simpleInterface from './../../assets/animations/interface.gif';
import infinityBoards from './../../assets/animations/infinity.gif';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const Welcome: FC = () => {
  const {
    setting: { theme },
  } = useSelector((state: RootState) => state);
  const { t } = useTranslation();
  return (
    <Container className="flex-fill">
      <div className="d-flex justify-content-center align-items-center flex-wrap min-vh-75">
        <div className="col-lg-5 col-sm-12">
          <h2>{t('welcome.title')}</h2>
          <p>{t('welcome.description')}</p>
        </div>
        <div className="d-flex col-lg-7 col-sm-12 justify-content-center">
          <img
            className="w-100 ms-2"
            src={theme === 'light' ? dashboard : darkDashboard}
            alt="Dashboard"
          />
        </div>
      </div>
      <h3 className="text-center mb-4 mt-5 mb-md-5">{t('welcome.advantages')}</h3>
      <div
        className="d-flex align-items-center justify-content-center flex-md-row flex-column-reverse mb-5"
        style={{ height: 'auto' }}
      >
        <div className="col-md-8 col-12">
          <img className="w-100 ms-md-2" src={simpleInterface} alt="Simple Interface" />
        </div>
        <div className="col-md-4 col-12 ms-md-5 mb-3 mb-md-0 text-center">
          <h5>{t('welcome.interface')}</h5>
        </div>
      </div>
      <div
        className="d-flex align-items-center justify-content-center flex-md-row flex-column"
        style={{ height: 'auto' }}
      >
        <div className="col-md-4 col-12 me-md-5 mb-3 mb-md-0 text-center">
          <h5>{t('welcome.infinityBoards')}</h5>
        </div>
        <div className="col-md-8 col-12">
          <img className="w-100 ms-md-2" src={infinityBoards} alt="Infinity Boards" />
        </div>
      </div>
    </Container>
  );
};
