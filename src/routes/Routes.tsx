import { ModalColumn } from '../components/Modal/ModalColumn';
import { ModalTask } from '../components/Modal/ModalTask';
import { About } from '../pages/About/About';
import { Auth } from '../pages/Auth/Auth';
import { BoardComonent } from '../pages/Board/Board';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { UFO } from '../pages/UFO/UFO';
import { User } from '../pages/User/User';
import { Welcome } from '../pages/Welcome/Welcome';

export const commonRoutes = [
  { title: 'Welcome', path: '/', element: <Welcome /> },
  { title: 'About', path: '/about', element: <About /> },
];

export const userRoutes = [
  { title: 'Dashboard', path: '/user/dashboard', element: <Dashboard /> },
  { title: 'User', path: '/user/cabinet', element: <User /> },
];

const taskRoutes = [
  {
    title: 'Board',
    path: '/user/board/:boardId',
    element: (
      <>
        <BoardComonent />
        <ModalColumn />
        <ModalTask />
      </>
    ),
  },
];

export const appRoutes = [
  ...commonRoutes,
  { title: 'Auth', path: '/auth', element: <Auth /> },
  { title: 'UFO', path: '/*', element: <UFO /> },
];

export const protectedRoutes = [...userRoutes, ...taskRoutes];
