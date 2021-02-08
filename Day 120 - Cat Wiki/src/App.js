import "./tailwind.output.css";
import styles from "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CatwikiLogo from "./assets/CatwikiLogo.svg";
import Main from "./components/Main";
import TopTen from "./components/TopTen";
import Details from "./components/Details";
import Footer from "./components/layout/Footer";
import CatsState from "./context/cats/CatsState";

function App() {
  return (
    <CatsState>
      <div style={{ styles }} className="mt-4 mx-8">
        <img src={CatwikiLogo} alt="" />
        <Router>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/top-ten" component={TopTen}></Route>
            <Route exact path="/details" component={Details}></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </CatsState>
  );
}

export default App;
