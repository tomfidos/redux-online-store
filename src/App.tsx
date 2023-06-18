import axios from 'axios';

import { useAppSelector } from './app/hooks';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {

  const token = useAppSelector((state) => state.customer.jwt_token);
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + (token ? token : '');

  return (
    <div className="app">
      <AppNav />
      <AppRoutes />
    </div>
  );
}

export default App;
