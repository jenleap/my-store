import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header.component';
import { AppRoutes } from './routes/app-routes';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
   <BrowserRouter>
      <Provider store={ store }>
        <Header />
        <AppRoutes />
      </Provider>
   </BrowserRouter>
  );
}

export default App;
