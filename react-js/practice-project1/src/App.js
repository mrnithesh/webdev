import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';
import Clock from './Clock';

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
      <p>Here is a counter example for state management</p>
      <Counter />

      <p>Here is a live clock usign useEffect() hook</p>
      <Clock/>
    </div>
  );
}

export default App;
