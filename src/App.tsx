import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './pages/Login';
import Register from './pages/Register';
import Kamban from './pages/Kamban';
import { motionWrapper } from './utils/motionWrapper';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            localStorage.getItem('token') ? (
              <Navigate to="/kamban" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/login" element={motionWrapper(<Login />, '/register', '/login')} />
        <Route path="/register" element={motionWrapper(<Register />, '/login', '/register')} />
        <Route path="/kamban" element={<Kamban />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
