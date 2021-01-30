import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import NavBar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Login from './components/Landing/Login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Login />
    </div>
  );
}

export default App;
