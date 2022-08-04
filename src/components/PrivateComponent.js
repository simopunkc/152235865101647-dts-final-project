import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from '../apis/firebase';

const PrivateComponent = ({ children, loginOnly = true }) => {
  const [user, isLoading] = useAuthState(auth);
  if (!user && loginOnly) {
    return <Navigate to="/login" />;
  }

  if (user && !loginOnly) {
    return <Navigate to="/" />;
  }

  return isLoading ? <div className='loader'>loading...</div> : children;
};

export default PrivateComponent;
