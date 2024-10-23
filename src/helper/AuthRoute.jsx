import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthRoute = ({ element: Component }) => {
  const isLoggedIn = !!localStorage.getItem('user_token');
  return isLoggedIn ? <Navigate to='/dashboard' /> : <Component />;
};

AuthRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default AuthRoute;