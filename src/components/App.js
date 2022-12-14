import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import PrivateRoute from '../pages/auth/PrivateRoute'
import StorePage from "../pages/StorePage";
import PurchaseCoinPage from "../pages/PurchaseCoinPage";
import { AuthContextComponent } from "../contexts/authContext";
import BackpackPage from "../pages/BackpackPage";


function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Routes>
          <Route exact path="/" element={ <HomePage />} />
          <Route path="/auth">
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
          </Route>
          <Route path='/StorePage' element={
            <PrivateRoute>
              <StorePage />
            </PrivateRoute>
          } />
          <Route path='/BackpackPage' element={
            <PrivateRoute>
              <BackpackPage />
            </PrivateRoute>
          } />
          <Route path='/PurchaseCoinPage' element={
            <PrivateRoute>
              <PurchaseCoinPage />
            </PrivateRoute>
          } />
        </Routes>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
