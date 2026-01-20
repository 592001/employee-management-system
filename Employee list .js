import React from "react";

function EmployeeList({ employees, deleteEmployee }) {
  return (
    <table>
      <thead>
        <tr><th>Name</th><th>Role</th><th>Action</th></tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.role}</td>
            <td>
              <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
