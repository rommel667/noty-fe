import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';

import CatchAllRoutes from './CatchAllRoutes';
import Login from '../authentication/Login';
import ItemGroupList from '../main/ItemGroupList';
import Signup from '../authentication/Signup';
import Authentication from '../authentication/Authentication';


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
        <Route path="/" element={<ItemGroupList />} />
        <Route path="/:id" element={<ItemGroupList />} />
      </Route>

      <Route path="*" element={<CatchAllRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
