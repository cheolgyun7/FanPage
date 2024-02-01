import Router from "shared/Router";
import "reset.css";
import { LetterProvider } from "context/Context";

function App() {
  return (
    <>
      <LetterProvider>
        <Router />
      </LetterProvider>
    </>
  );
}

export default App;
