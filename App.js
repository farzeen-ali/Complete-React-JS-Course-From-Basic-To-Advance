import './App.css';
import FuncComponent from './FuncComponent';
// import {FuncComponent} from './FuncComponent';

//importing class based component
import ClassComponent from './ClassComponent';
//importing jsx file
import JSX from './JSX';
//importing ClickEvent file
import ClickEvent from './ClickEvent';
import StateInFunctionalComponent from './StateInFunctionalComponent';
import StateInClassComponent from './StateInClassComponent';
import PropsInFunctionalComponent from './PropsInFunctionalComponent';
import PropsInClassComponent from './PropsInClassComponent';
import GetInputFieldValue from './GetInputFieldValue';
function App() {
  return (
      <div className='App'>
        <h1>This is my App.js File</h1>
        <FuncComponent />
        <ClassComponent />
        <JSX />
        <ClickEvent />
        <StateInFunctionalComponent />
        <StateInClassComponent />
        <PropsInFunctionalComponent />
        <PropsInClassComponent />
        <GetInputFieldValue />
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
