import "./employee.css";
import { EmployeeType } from "../../types/types";
import DeleteBtn from "../deleteBtn/DeleteBtn";
import EditBtn from "../editBtn/EditBtn";

type EmployeeProp = {
  data: EmployeeType;
};

const Employee = ({
  data: { id, name, email, phone, department },
}: EmployeeProp) => {
  return (
    <div className="employee">
      <div className="name">{name}</div>
      <div className="email">{email}</div>
      <div className="department">{department}</div>
      <div className="phone">{phone}</div>
      <div className="buttons">
        <DeleteBtn />
        <EditBtn />
      </div>
    </div>
  );
};

export default Employee;
