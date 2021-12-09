import { BrowserRouter as Router} from 'react-router-dom'
import { Header } from './components/Header';
import { MainContent } from './pages/MainContent'
import Routes from './Routes';

function App() {
  return (
      <Router>
        <Header />
        <Routes />
      </Router>
  );
}

export default App;
