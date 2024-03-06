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
import HideShowToggle from './HideShowToggle';
import FormHandling from './FormHandling';
import ConditionalRendering from './ConditionalRendering';
import New from './New';
import PassFunctionAsProps from './PassFunctionAsProps';
import FormValidation from './FormValidation';
import Constructor from './Constructor';
import Render from './Render';
import ComponentDidMount from './ComponentDidMount';
import ComponentDidUpdate from './ComponentDidUpdate';
import ShouldComponentUpdateMethod from './ShouldComponentUpdateMethod';
import GetSnapshotBeforeUpdate from './GetSnapshotBeforeUpdate';
import ComponentWillUnmount from './ComponentWillUnmount';
import Hooks from './Hooks';
import UseEffectHook from './UseEffectHook';
import UseEffectWithProps from './UseEffectWithProps';
import UseEffectWithConditions from './UseEffectWithConditions';
import Pure from './Pure';
import UseMemoHook from './UseMemoHook';
import UseCallBackHook from './UseCallBackHook';
import Ref from './Ref';
import ForwardRef from './ForwardRef';
import ArrayListing from './ArrayListing';
import BootstrapArrayListing from './BootstrapArrayListing';
import NestedListWithNestedArray from './NestedListWithNestedArray';
import Reuse from './Reuse';
import LiftingStateUp from './LiftingStateUp';
import ControlledComponent from './ControlledComponent';
import UncontrolledComponent from './UncontrolledComponent';
import UseReducerHook from './UseReducerHook';
import OnClick from './OnClick';
import OnMouseOver from './OnMouseOver';
import PreviousState from './PreviousState';
import StateWithObject from './StateWithObject';

function App() {
  function getData(){
    alert("Hello From App.JS")
  }
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
        <HideShowToggle />
        <FormHandling />
        <ConditionalRendering />
        <PassFunctionAsProps data={getData}/>
        <New data={getData}/>
        <FormValidation />
        <Constructor />
        <Render />
        <ComponentDidMount />
        <ComponentDidUpdate />
        <ShouldComponentUpdateMethod />
        <GetSnapshotBeforeUpdate />
        <ComponentWillUnmount />
        <Hooks />
        <UseEffectHook />
        <UseEffectWithProps />
        <UseEffectWithConditions />
        <Pure />
        <UseMemoHook />
        <UseCallBackHook />
        <Ref />
        <ForwardRef />
        <ArrayListing />
        <BootstrapArrayListing />
        <NestedListWithNestedArray />
        <Reuse />
        <LiftingStateUp />
        <ControlledComponent />
        <UncontrolledComponent />
        <UseReducerHook />
        <OnClick />
        <OnMouseOver />
        <PreviousState />
        <StateWithObject />
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
