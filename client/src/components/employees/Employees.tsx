import { useState } from "react";
import { employeesData } from "../../data";
import Employee from "../employee/Employee";
import './employees.css'

const Employees = () => {
  const [editId, setEditId] = useState<string>("");
  return (
    <tbody className="employees">
      {employeesData.map((employee) => (
        <Employee
          key={employee.id}
          data={employee}
          editId={editId}
          setEditId={setEditId}
        />
      ))}
    </tbody>
  );
};

export default Employees;
