import React, { useEffect, useState } from "react";
import axios from "axios";
import Doctor from "./Doctor";

export default function Doctors() {
const [doctors, setDoctors] = useState([])

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = async () => {
    try {
      let res = await axios.get("/api/doctors");
      setDoctors(res.data)
      console.log(res.data)
    } catch (error) {}
  };

  
  return (
    <div>
      <h1>Doctors</h1>
      {doctors.map((d)=>{
        return(
          <Doctor doctor={d} />
        )
      }
      )}
    </div>
  );
}