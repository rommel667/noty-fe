import { useUserStore } from '@/state/user.store';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
  const { isAuth } = useUserStore();
  return !isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoutes;
