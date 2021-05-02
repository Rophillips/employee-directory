import React from "react";

function EmployeeTable(props) {
    return(

        <table className="table">
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col"onClick= {props.sort}>First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Cell</th>
    </tr>
  </thead>
  <tbody>
      {props.employees.map((employee, i)=> (
          <tr key={`employee -${i + 1}`}>
              
              <td>
                  <img src={employee.picture.thumbnail} alt="profile"/>
              </td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.cell}</td>
              {/* <td>{employee.id}</td> */}
          </tr>
      ))}
 
  
  </tbody>
</table>
    )
}

export default EmployeeTable