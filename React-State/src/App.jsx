import { Component } from "react";
import MyComponentDidUpdate from "./Components/LifeCycleMethods/MyComponentDidUpdate";
import MyComponentWillUnmount from "./Components/LifeCycleMethods/MyComponentWillUnmount";
import MyWillMountAndDidMount from "./Components/LifeCycleMethods/MyWillMountAndDidMount";
import InitializingState from "./Components/StatesExample/InitializingState";
import HandlingEvents from "./Components/StatesExample/HandlingEvents";
import NormalVariables from './Components/StatesExample/NormalVariables';
import UpdatingState from "./Components/StatesExample/UpdatingState";
import PassingPropsToState from "./Components/StatesExample/PassingPropsToState";

class App extends Component {
  render() {
    return (
      <div>
        {/* 1.1 */}
        <NormalVariables />

        {/* 1.2 */}
        {/* <InitializingState /> */}
        {/* <PassingPropsToState batchtTitle='DEC 2025' /> */}

        {/* 1.3 */}
        {/* <HandlingEvents /> */}

        {/* 1.4 */}
        {/* <UpdatingState /> */}

        {/* 1.5 */}
        {/* <MyWillMountAndDidMount /> */}
        {/* <MyComponentDidUpdate /> */}
        {/* <MyComponentWillUnmount />  */}
      </div>
    );
  }
}

export default App;
