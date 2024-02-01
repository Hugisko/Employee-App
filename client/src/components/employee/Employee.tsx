import "./employee.css";
import { EmployeeType } from "../../types/types";
import DeleteBtn from "../deleteBtn/DeleteBtn";
import EditBtn from "../editBtn/EditBtn";
import React, { ChangeEvent, useState } from "react";

type EmployeeProp = {
  data: EmployeeType;
  editId: string;
  setEditId: React.Dispatch<React.SetStateAction<string>>;
};

const Employee = ({ data, editId, setEditId }: EmployeeProp) => {
  const [employee, setEmployee] = useState<EmployeeType>(data);

  const handleEdit = (id: string) => {
    setEditId(id);
    console.log(id);
  };

  const handleDelete = (id: string) => {
    console.log(id);
  };

  const handleClose = () => {
    setEditId("");
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <tr className="employee">
      {editId === employee.id ? (
        <>
          <td className="name" data-label="Name:">
            <input
              type="text"
              value={employee.name}
              onChange={handleChange}
              name="name"
            />
          </td>
          <td className="email" data-label="Email:">
            <input
              type="text"
              value={employee.email}
              onChange={handleChange}
              name="email"
            />
          </td>
          <td className="department" data-label="Department:">
            <input
              type="text"
              value={employee.department}
              onChange={handleChange}
              name="department"
            />
          </td>
          <td className="phone" data-label="Phone:">
            <input
              type="text"
              value={employee.phone}
              onChange={handleChange}
              name="value"
            />
          </td>
          <td className="buttons" data-label="Actions:">
            <button type="button" onClick={handleClose}>close</button>
            <button>save</button>
          </td>
        </>
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
            <DeleteBtn id={employee.id} handleDelete={handleDelete} />
            <EditBtn handleEdit={handleEdit} id={employee.id} />
          </td>
        </>
      )}
    </tr>
  );
};

export default Employee;
