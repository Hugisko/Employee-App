import "./employee.css";
import { EmployeeProp, EmployeeType } from "../../types/types";
import {  useState } from "react";
import EditEmployee from "../editEmployee/EditEmployee";

const Employee = ({handleDelete,employeeData, activeId, setActiveId }: EmployeeProp) => {
  const [employee, setEmployee] = useState<EmployeeType>(employeeData);

  return (
    <tr className="employee">
      {activeId === employee.id ? (
        <EditEmployee employee={employee} setEmployee={setEmployee} setActiveId={setActiveId} activeId={activeId}/>
      ) : (
        <>
          <td className="name" data-label="Name:">
            {employee.name}
          </td>
          <td className="email" data-label="Email:">
            {employee.email}
          </td>
          <td className="department" data-label="Department:">
            {employee.department}
          </td>
          <td className="phone" data-label="Phone:">
            {employee.phone}
          </td>
          <td className="buttons" data-label="Actions:">
            <button
              type="button"
              className="redBtn btn"
              onClick={() => handleDelete(employee.id)}
            >
              DeleteBtn
            </button>
            <button
              type="button"
              className="yellowBtn btn"
              onClick={() => setActiveId(employee.id)}
            >
              EditBtn
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default Employee;
