import "./App.css";
import {
  BrowserSection,
  BrowserTop,
} from "./components/GeneralStyled/GeneralStyled";
import { LibertyTreeFrontpage } from "./pages/LibertyTreeOnline/LibertyTreeFrontpage";

function App() {
  return (
    <div className="App">
      <LibertyTreeFrontpage />
    </div>
  );
}

export default App;
