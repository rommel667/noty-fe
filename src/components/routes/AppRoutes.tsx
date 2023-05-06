import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';

import CatchAllRoutes from './CatchAllRoutes';
import Login from '../authentication/Login';
import Signup from '../authentication/Signup';
import Authentication from '../authentication/Authentication';
import CategoryList from '../main/CategoryList';


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="auth" element={<Authentication />} >
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<CategoryList />} />
        <Route path="/:id" element={<CategoryList />} />
      </Route>

      <Route path="*" element={<CatchAllRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
