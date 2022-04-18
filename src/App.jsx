

import { useState } from 'react';
import './App.css'

import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";


function App() {
const [toggle,settoggle]=useState(
  {
    state:true,
    name:"Add Student"
  }
)

  return (
  
      <div className="App">
          <button className="togglebtn" onClick={()=>{
            // if(toggle==null){
            //   settoggle("Add Students")
            // }
            if(toggle.name=="Add Student"){
              settoggle({
                state:false,
                name:"Go to Student List"
              })
            }
            else if(toggle.name=="Go to Student List"){
              settoggle({
                state:true,
                name:"Add Student"
              })
            }
          }}>{toggle.name}</button>
         {toggle.state ? <ShowStudents/>:<AddStudent/> } 
           {/* make sure the table is shown initially, do not show form initially */}
           {/* make sure to show either of them do not both together */}
       </div>
  )
}

export default App
