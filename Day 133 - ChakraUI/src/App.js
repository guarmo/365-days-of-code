import './App.css';
import {
  BrowserRouter as Router, Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Form from './components/Form'
import Home from './components/Home'
import Loader from './components/Loader'
import { Container, Flex } from "@chakra-ui/react"


function App() {
  return (
    <Container h="100vh" maxW="container.lg">
      <Router>
        <Navbar minH="10%" />
        <Flex centerContent minH="90%" flexDirection="column" alignItems="center" justifyContent="center">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/form" component={Form}></Route>
          <Route exact path="/loader" component={Loader}></Route>
        </Flex>
      </Router>
    </Container >
  );
}

export default App;
