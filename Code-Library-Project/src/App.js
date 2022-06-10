import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";
import EngTrack from "./EngineeringTrack/EngTrack";
import FirstYear from "./EngineeringTrack/TrackCard/Components/FirstYear/FirstYear";
import SecondYear from "./EngineeringTrack/TrackCard/Components/SecondYear/SecondYear";
import ThirdYear from "./EngineeringTrack/TrackCard/Components/ThirdYear/ThirdYear";
import FourthYear from "./EngineeringTrack/TrackCard/Components/FourthYear/FourthYear";
import FirstYearComponent from "./EngineeringTrack/TrackCard/Components/FirstYear/Programming_Languages/FirstYearComponent";
import Cpp from "./EngineeringTrack/TrackCard/Components/FirstYear/Programming_Languages/Cpp";
import Java from "./EngineeringTrack/TrackCard/Components/FirstYear/Programming_Languages/Java";
import Python from "./EngineeringTrack/TrackCard/Components/FirstYear/Programming_Languages/Python";
import Competitive_programming from "./EngineeringTrack/TrackCard/Components/FirstYear/CP/Competitive_programming";
import DSA from "./EngineeringTrack/TrackCard/Components/FirstYear/DSA/DSA";
import Web_tutorial from "./EngineeringTrack/TrackCard/Components/SecondYear/Web_Dev/Web_tutotiral";
import Android_Dev from "./EngineeringTrack/TrackCard/Components/SecondYear/Android_Dev/Android_Dev";
import machine_learning from "./EngineeringTrack/TrackCard/Components/SecondYear/Machine_learning/Machine_learning";
import CS_Fundamentals from "./EngineeringTrack/TrackCard/Components/ThirdYear/CS_Fundamentals/CS_Fundamentals";
import Internship from "./EngineeringTrack/TrackCard/Components/ThirdYear/Internship/Internship";
import Leetcode from "./EngineeringTrack/TrackCard/Components/ThirdYear/Leetcode/Leetcode";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/engtrack" component={EngTrack} />
        <Route exact path="/engtrack/firstyear" component={FirstYear} />
        <Route
          exact
          path="/engtrack/firstyear/component"
          component={FirstYearComponent}
        />
        <Route
          exact
          path="/engtrack/firstyear/cp"
          component={Competitive_programming}
        />
        <Route exact path="/engtrack/firstyear/dsa" component={DSA} />
        <Route exact path="/engtrack/firstyear/component/cpp" component={Cpp} />
        <Route
          exact
          path="/engtrack/firstyear/component/java"
          component={Java}
        />
        <Route
          exact
          path="/engtrack/firstyear/component/python"
          component={Python}
        />

        <Route exact path="/engtrack/secondyear" component={SecondYear} />
        <Route
          exact
          path="/engtrack/secondyear/web_dev"
          component={Web_tutorial}
        />
        <Route
          exact
          path="/engtrack/secondyear/android_dev"
          component={Android_Dev}
        />
        <Route
          exact
          path="/engtrack/secondyear/machine_learning"
          component={machine_learning}
        />
        <Route exact path="/engtrack/thirdyear" component={ThirdYear} />
        <Route
          exact
          path="/engtrack/thirdyear/cs_fundamentals"
          component={CS_Fundamentals}
        />
        <Route
          exact
          path="/engtrack/thirdyear/internship"
          component={Internship}
        />
        <Route exact path="/engtrack/thirdyear/leetcode" component={Leetcode} />
        <Route exact path="/engtrack/fourthyear" component={FourthYear} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/services" component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
