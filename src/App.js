import logo from './logo.svg';
import './App.css';
import purify from "dompurify";

function App() {
  const data = "Hello World"
  const xss = <script>alert("xss")</script>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div dangerouslySetInnerHTML={{ __html:purify.sanitize(data) }} />
        <div dangerouslySetInnerHTML={{ __html:purify.sanitize(xss) }} />

      </header>
    </div>
  );
}

export default App;
