import logo from './logo.svg';
import './App.css';
import purify from "dompurify";

function App() {
  const data = "Hello World"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div dangerouslySetInnerHTML={{ __html:purify.sanitize(data) }} />
      </header>
    </div>
  );
}

export default App;
