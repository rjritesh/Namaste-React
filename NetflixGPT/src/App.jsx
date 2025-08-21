
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <div>
      <Provider store={appStore}>

        <Body></Body>

      </Provider>

      <Toaster position="top-center" reverseOrder={false} />


    </div>
  );
}

export default App;
