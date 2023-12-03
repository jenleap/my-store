import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header.component';
import { AppRoutes } from './routes/app-routes';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    /* Sets up routing for the application */
   <BrowserRouter>
      {/* Sets the Redux store and provides the Redux context to application */}
      <Provider store={ store }>
        <Header />
        {/* The actual routes available within the application*/}
        <AppRoutes />
      </Provider>
   </BrowserRouter>
  );
}

export default App;
