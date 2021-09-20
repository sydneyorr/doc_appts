import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Doctors from "./components/Doctors";
import Doctor from "./components/Doctor";
import Users from "./components/Users";
import AppointmentsListLoader from "./components/AppointmentsListLoader";
// import Appointments from "./components/Appointments";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/doctors" component={Doctors} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/appointments" component={AppointmentsListLoader} />
          <Route exact path="/doctors/:id" component={Doctor} />
          <Route component={() => <p>react router 404 path not found</p>} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
