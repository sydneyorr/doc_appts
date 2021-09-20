import Home from "../pages/Home";
import Doctors from "./Doctors";
import Users from "./Users";
import AppointmentsListLoader from "./AppointmentsListLoader";
import NewAppointment from "./NewAppointment";

 export const routes = [
  { pathname: "/", title: "Home", component: Home},
  { pathname: "/doctors", title: "Doctors", component: Doctors},
  { pathname: "/users", title: "Users", component: Users},
  { pathname: "/appointments", title: "Appointments", component: AppointmentsListLoader},
  { pathname: "/appointments/new", title: "New Appointment", component: NewAppointment},
];
