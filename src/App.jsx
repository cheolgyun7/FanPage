import Router from "shared/Router";
import "reset.css";
import { LetterProvider } from "context/Context";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <LetterProvider>
          <Router />
        </LetterProvider>
      </Provider>
    </>
  );
}

export default App;
