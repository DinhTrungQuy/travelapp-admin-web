import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/configureStore';
import { useEffect } from 'react';
import axios from 'axios';
import { signOut, signOutSuccess } from './redux/slice/authSlice';
import PlacePage from './pages/PlacePage';
import UserPage from './pages/UserPage';
import BookingPage from './pages/BookingPage';
import AddPlacePage from './pages/AddPlacePage';
import EditPlacePage from './pages/EditPlacePage';
import EditUserPage from './pages/EditUserPage';
import EditBookingPage from './pages/EditBookingPage';


interface Prop {
  children: React.ReactNode;

}


function App() {
  const PrivateRoute: React.FC<Prop> = ({ children }) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.user);
    if (isAuthenticated) {
      return children;
    }
    return <Navigate to="/login" />
  }
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://quydt.speak.vn/api/User', {
      withCredentials: true,
    }).catch(() => {
      dispatch(signOut());
      dispatch(signOutSuccess());
      console.log("expired")
    })

  }, [dispatch]);

  // const auth = useSelector((state) => state.auth);

  return (
    <Routes>


      <Route path="/" element={
        <PrivateRoute>
          <HomePage />
        </PrivateRoute>
      }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/places" element={
        <PrivateRoute>
          <PlacePage />
        </PrivateRoute>
      }
      />
      <Route path="/users" element={
        <PrivateRoute>
          <UserPage />
        </PrivateRoute>
      }
      />
      <Route path="/bookings" element={
        <PrivateRoute>
          <BookingPage />
        </PrivateRoute>
      }
      />
      <Route path="/places/add" element={
        <PrivateRoute>
          <AddPlacePage />
        </PrivateRoute>
      }
      />
      <Route path="/places/edit/:id" element={
        <PrivateRoute>
          <EditPlacePage />
        </PrivateRoute>
      }
      />
      <Route path="/users/edit/:id" element={
        <PrivateRoute>
          <EditUserPage />
        </PrivateRoute>
      }
      />
      <Route path="/bookings/edit/:id" element={
        <PrivateRoute>
          <EditBookingPage />
        </PrivateRoute>
      }
      />


      {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
  )
}

export default App
