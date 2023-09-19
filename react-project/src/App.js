import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h1>Heading</h1>
        <p>
         React is So Cool
        </p>
        <p>
        Here is another paragraph
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>
            ONE
          </li>
          <li>
           TWO
          </li>
          <li>
          THREE
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
