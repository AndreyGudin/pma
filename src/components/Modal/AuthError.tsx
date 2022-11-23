import { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modalSlice';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';

export const AuthError: FC = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.setting);
  const { t } = useTranslation();
  const colorText = theme === 'dark' ? 'white' : 'black';

  return (
    <Modal className={`text-${colorText}`} size="lg" centered show={true}>
      <Modal.Header className={`bg-${theme}`}>
        <Modal.Title>{t('authError.error')}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`bg-${theme}`}>{t('authError.wrong')}</Modal.Body>
      <Modal.Footer className={`bg-${theme}`}>
        <Button variant="warning" onClick={() => dispatch(closeModal('authError'))}>
          {t('authError.tryAgain')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};