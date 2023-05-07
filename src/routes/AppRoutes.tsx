import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import CatchAllRoutes from './CatchAllRoutes';
import CategoryListPage from '@/pages/CategoryListPage';
import AddCategoryPage from '@/pages/AddCategoryPage';
import AuthenticationPage from '@/pages/AuthenticationPage';
import Login from '@/components/authentication/Login';
import Signup from '@/components/authentication/Signup';
import TermsAndConditionsPage from '@/pages/TermsAndConditionsPage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="auth" element={<AuthenticationPage />} >
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<CategoryListPage />} />
        <Route path="/new-category" element={<AddCategoryPage />} />
        {/* <Route path="/:id" element={<CategoryList />} /> */}
      </Route>

      <Route path="*" element={<CatchAllRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
