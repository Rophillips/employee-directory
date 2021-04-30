import React from "react";

function EmployeeTable(props) {
    return(

        <table className="table">
  <thead>
    <tr>
      {/* <th img="col">picture</th> */}
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">email</th>
      <th scope="col">cell</th>
    </tr>
  </thead>
  <tbody>
      {props.employees.map((employee, i)=> (
          <tr key={`employee -${i + 1}`}>
              
              {/* <td>{employee.picture.thumbnail}</td> */}
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