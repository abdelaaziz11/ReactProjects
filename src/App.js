import 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headre from './Component/Header';
import ParentPage from './Component/LanguageSwitcher/ParentPage';
import Form from './Component/Form/Form';

const App = () => {
  return (
    <>
      <Headre/>
      <ParentPage/>
    </>
  );
}

export default App;
