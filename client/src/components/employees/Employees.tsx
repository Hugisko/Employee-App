import { employeesData } from "../../data";
import Employee from "../employee/Employee";
import './employees.css'

const Employees = () => {
  return (
    <div className="employees">
      {employeesData.map((employee) => (
        <Employee
          key={employee.id}
          data={employee}
        />
      ))}
    </div>
  );
};

export default Employees;
