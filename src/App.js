import Navbar from './Navbar';
import Home from './Home';

function App() { //a component is function
  const title = "Wellcome to my blog =)"; //dynamic values are called with curly brackets
  const likes = 50; 
  //conts {name: dan, age: 13} you cant output bools and objects with curly brackets!

  const link = "https://www.google.com";

  return ( // we should always return something in that function
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App; //we always export components at end!
