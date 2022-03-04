import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './Pages/Routes';
import Login from './Pages/Login';
import { useSelector } from 'react-redux';
import Navbar from './Pages/Navbar/Navbar';


function App() {
  const isAuth =useSelector(state => state.auth.isAuthenticated);

  return (
    <>
    {!isAuth && <Login />}
      {isAuth && 
      <>
      {/* <Navbar/> */}
      <AppRoutes/>
      </> }
     </>
  );
}

export default App;


