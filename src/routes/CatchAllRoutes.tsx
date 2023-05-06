import { useUserStore } from '@/state/user.store';
import { Navigate } from 'react-router-dom';

const CatchAllRoutes = () => {
  const { isAuth } = useUserStore();
  return isAuth ? <Navigate to="/" /> : <Navigate to="auth/signin" />;
};

export default CatchAllRoutes;
