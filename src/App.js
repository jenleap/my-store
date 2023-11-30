import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/ui/header.component';
import { AppRoutes } from './routes/app-routes';

function App() {
  return (
   <BrowserRouter>
      <Header />
      <AppRoutes />
   </BrowserRouter>
  );
}

export default App;
