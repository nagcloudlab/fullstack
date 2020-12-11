import './App.css';
import Slack from './components/Slack';


// import Comp1 from './components/Comp1';
// import Box from './components/Box'
// import Veg from './components/Veg';
// import NonVeg from './components/NonVeg';


function App() {

  return (
    <div className="container">
      <hr />
      <h1> react.js core concepts - 201</h1>
      <hr />
      <ol>
        <li>context</li>
        <li>container components</li>
        <li>higher order components</li>
      </ol>
      <hr />



      <Slack />




      {/* 
      
     <Box title="veg">
        <Veg />
        <Veg />
        <Veg />
      </Box>

      <Box title="non-veg">
        <NonVeg />
        <NonVeg />
      </Box>

      <Box title="both">
        <Veg />
        <NonVeg />
      </Box>

      <Box title="unknown">
        <p>p1</p>
        <p>p2</p>
      </Box> */}



      {/* <Comp1 color="red"/>
      <Comp1 color="green"/>
      <Comp1 color="blue"/> */}



    </div>
  );

}

export default App;
