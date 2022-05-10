import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './components/home';
import OurTours from './components/ourTours';
import Enquiry from './components/enquiry';
import SignIn from './components/signin';
import Footer from './components/footer';
import NotFound from './components/notfound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/OurTours"> <OurTours /> </Route>
          <Route exact path="/Enquiry"> <Enquiry /> </Route>
          <Route exact path="/SignIn"> <SignIn /> </Route>
          <Route path="*"> <NotFound /> </Route>
        </Switch>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
