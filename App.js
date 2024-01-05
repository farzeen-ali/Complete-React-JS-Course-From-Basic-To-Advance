import './App.css';
import FuncComponent from './FuncComponent';
// import {FuncComponent} from './FuncComponent';

//importing class based component
import ClassComponent from './ClassComponent';
//importing jsx file
import JSX from './JSX';
function App() {
  return (
      <div className='App'>
        <h1>This is my App.js File</h1>
        <FuncComponent />
        <ClassComponent />
        <JSX />
        {/* <FuncComponent />
        <FuncComponent />
        <FuncComponent />
        <FuncComponent />
        <FuncComponent /> */}
      </div>
  );
  // function FuncComponent(){
  //   // export function FuncComponent(){
  //       return(
  //       <div>
  //           <h1>This is my First Function Based Component</h1>
  //           <h2>Second Heading</h2>
  //           <h3>Third Heading</h3>
  //       </div>
  //       )
  //   }  
}

export default App;
