import { Toaster } from "react-hot-toast";
import Layout from "./layout/Layout";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Layout>
      <AppRoutes />
      <Toaster />
    </Layout>
  )
}

export default App
