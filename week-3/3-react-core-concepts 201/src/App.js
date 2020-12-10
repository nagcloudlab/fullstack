import './App.css';
import Comp1 from './components/Comp1';

function App() {
  return (
    <div className="container">
      <hr />
      <h1> react.js core concepts - 201</h1>
      <hr />
      <ul>
        <li>context</li>
      </ul>
      <hr />

      <Comp1 color="red"/>
      <Comp1 color="green"/>
      <Comp1 color="blue"/>

    </div>
  );
}

export default App;
