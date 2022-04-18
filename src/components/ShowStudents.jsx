
import { useEffect } from "react";
import { useState } from "react";
import "./ShowStudents.css"
export const ShowStudents = () => {
const [table,settable]=useState([])
    useEffect(()=>{
        getdata()
    },[])

const getdata = async()=>{
var data= await fetch("http://localhost:8080/students").then((d)=>d.json())
  settable(data)
}
    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr className="trtable">
              <th className="fname">First Name</th>
              <th className="lname">Last Name</th>
              <th className="tremail">Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {/* populate all rows like below: */}
            <tr className="row">
             {table.map(e=>
                <td className="first_name">{e.first_name}</td>
               
                 
             )} ,
             {table.map(e=>
                <td className="last_name">{e.last_name}</td>
               
                 
             )} 
             {table.map(e=>
                <td className="email">{e.email}</td>
               
                 
             )} 
             {table.map(e=>
                  <td className="gender">{e.gender}</td>
               
                 
             )} 
             {table.map(e=>
               <td className="tenth_score">{e.tenth_score}</td>
               
                 
             )} 
             {table.map(e=>
             <td className="twelth_score">{e.twelth_score}</td>
               
                 
             )} 
             {table.map(e=>
            <td className="preferred_branch">{e.preferred_branch}</td> 
               
                 
             )} 
             
            </tr>
          </tbody>
        </table>
      </div>
    );
  };