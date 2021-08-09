import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";

import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import Home from "./pages/HomePage/Home";

function App() {
  return (
   <Router>
     <GlobalStyle />
   <Navbar></Navbar>
   <Switch>
      <Route path="/" exact component ={Home} />
      
   </Switch>
   </Router>
  );
}

export default App;
