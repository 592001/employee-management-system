import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (emp) => {
    setEmployees([...employees, emp]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(e => e.id !== id));
  };

  return (
    <div className="container">
      <h2>Employee Management System</h2>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
    </div>
  );
}

export default App;
