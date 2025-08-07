import logo from './logo.svg';
import './App.css';
import Hello from './Hello.jsx';
import Goodbye from './Goodbye.jsx';
import JSXExample from './components/JSXExample.jsx';



function App() {
  return (
    <div className="App">
       <Hello />
       <JSXExample />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Goodbye/>
    </div>
  );
}

export default App;
