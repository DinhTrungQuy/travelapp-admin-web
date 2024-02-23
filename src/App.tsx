import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { useSelector } from 'react-redux';
import { RootState } from './redux/configureStore';
import ResourcePage from './pages/ResourcePage';


interface Prop {
  children: React.ReactNode;

}

const PrivateRoute: React.FC<Prop> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.user);
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/login" />
}
function App() {
  // const auth = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={
        <PrivateRoute>
          <HomePage />
        </PrivateRoute>
      } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/resources" element={
        <PrivateRoute>
          <ResourcePage />
        </PrivateRoute>

      } />
      {/* <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />  */}
    </Routes>
  )
}

export default App
