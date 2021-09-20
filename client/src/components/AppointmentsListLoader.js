
import React from "react";
import { Card } from "semantic-ui-react";
import ListLoader from "../components/ListLoader";

export default function AppointmentsListLoader() {
  return (
    <div>
      <ListLoader
      header={"Appointments"}
        url="/api/appointments"
        renderData={(a) => {
          return (
            <Card>
              <p>{a.user.name} has an appointment on {a.date} with {a.doctor.name}</p>
            </Card>
          );
        }}
      />
    </div>
  );
}