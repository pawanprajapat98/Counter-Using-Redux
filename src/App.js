import App from './App'
import Counters from "./CounterUsingRedux/Counters";
import { incriment,decriment } from './CounterUsingRedux/CounterSlice';



function AppComponent() {
  return (
    <>
    <Counters/>
    </>
  );
}
export default AppComponent;
