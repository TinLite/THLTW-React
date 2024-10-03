import logo from './logo.svg';
import './App.css';
import { Hello, HelloPerson } from './Hello';
import { Header } from './Header';
import { Hellooooooooo } from './Hellooooooooo';
import { Car } from './Car';
import { Login } from './Login';

function App() {
  return (
    <div className="App">
      <Hello />
      <HelloPerson name="Vinh" />
      <Header />
      <Hellooooooooo /> <br/>
      <Car />
      <Login />
    </div>
  );
}

export default App;
