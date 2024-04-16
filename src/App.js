import logo from './logo.svg';
import Box from './Box.js';
import Daybox from './Daybox.js';
import Calander from './Calander';
import C2 from './C2';
import header from './header.css';
import Header from './Header.js';
// import FormComponent from './FormComponent.js';

function App() {
  return (
    <div className="App">
      {/* <center> */}
       {/* <C2/> */}
       {/* </center> */}
      {/* <FormComponent/> */}
       <center>
        <Header/>
       <Calander/>
       </center>
    </div>
  );
}

export default App;
