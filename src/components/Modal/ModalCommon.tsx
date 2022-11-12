import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SpinnerComponent } from '../Spinner/Spinner';
import { AddBoard } from './AddBoard';
import AddColumn from './AddColumn';
import { AddTask } from './AddTask';
import { EditBoard } from './EditBoard';
import { EditColumn } from './EditColumn';
import { EditTask } from './EditTask';
import { ModalSession } from './ModalSession';
import { RemoveBoard } from './RemoveBoard';
import { RemoveColumn } from './RemoveColumn';
import { RemoveTask } from './RemoveTask';

export const ModalCommon: FC = () => {
  const { modal, setting } = useSelector((state: RootState) => state);
  return (
    <>
      {setting.loading && <SpinnerComponent />}
      <ModalSession />
      {modal.visible.addBoard && <AddBoard />}
      {modal.visible.editBoard && <EditBoard />}
      {modal.visible.removeBoard && <RemoveBoard />}
      {modal.visible.addColumn && <AddColumn />}
      {modal.visible.editColumn && <EditColumn />}
      {modal.visible.addTask && <AddTask />}
      {modal.visible.editTask && <EditTask />}
      {modal.visible.removeColumn && <RemoveColumn />}
      {modal.visible.removeTask && <RemoveTask />}
    </>
  );
};