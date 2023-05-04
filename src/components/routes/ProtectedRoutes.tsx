import { useUserStore } from '@/state/user.store';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { isAuth } = useUserStore();
  return isAuth ? <Outlet /> : <Navigate to='/signin' />;
};

export default ProtectedRoutes;
