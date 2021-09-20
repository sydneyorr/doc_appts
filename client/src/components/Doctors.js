import React, { useEffect, useState } from "react";
import axios from "axios";
import Doctor from "./Doctor";
import useAxiosOnMount from "./Hooks/useAxiosOnMount";
import ListLoader from "./ListLoader";
import { Card } from "semantic-ui-react";

export default function Doctors() {
  // const {data: doctors, loading, error} = useAxiosOnMount("/api/doctors")
// const [doctors, setDoctors] = useState([])

//   useEffect(() => {
//     getDoctors();
//   }, []);

//   const getDoctors = async () => {
//     try {
//       let res = await axios.get("/api/doctors");
//       setDoctors(res.data)
//       console.log(res.data)
//     } catch (error) {}
//   };

//   const deleteDoctor = async (id) => {
//     try {
//       let res = await axios.delete(`/api/doctors/${id}`)
//       let newDoctors = doctors.filter((d)=> d.id !== id)
//       setDoctors(newDoctors)
//     } catch (err) {

//     }
//   }

  
  // return (
  //   <div>
  //     <h1>Doctors</h1>
  //     {doctors.map((d)=>{
  //       return(
  //         <Doctor doctor={d}/>
  //       )
  //     }
  //     )}
  //   {console.log(doctors)}
  //   </div>
  // );

  return (
    <div>
      <ListLoader
      header={"Doctors"}
      url="api/doctors"
      renderData={(doctor)=>{
        return (
          <Card>
            {doctor.name}
          </Card>
        )
      }}
      />
    </div>
  )
}