import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

function App() {
  const name = "Nithesh";
  const date = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>This project is to practice, learn and revise react.js</p>
      <p>Today's date: {date}</p>
      <Welcome name="Sydney" age={25} />
      <Welcome name="Sweeeny" age={28} />
    </div>
  );
}

export default App;
