
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ element: Component }) => {
  const isLoggedIn = !!localStorage.getItem('user_token'); 
// const isLoggedIn = false; 
  return isLoggedIn ? <Component /> : <Navigate to='/login' />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired, 
};

export default ProtectedRoute;