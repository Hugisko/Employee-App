import { ChangeEvent } from "react";
import { EditEmployeeProp } from "../../types/types";
import useFetching from "../../hooks/useFetching";

const EditEmployee = ({
  employee,
  setEmployee,
  setActiveId,
  activeId,
}: EditEmployeeProp) => {
  const { editData } = useFetching();

  const handleClose = () => {
    setActiveId("");
  };

  const handleUpdateUser = async () => {
    await editData(activeId, employee);
    handleClose();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  return (
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
          name="phone"
        />
      </td>
      <td className="buttons" data-label="Actions:">
        <button type="button" className="redBtn btn-rect" onClick={handleClose}>
          close
        </button>
        <button
          type="submit"
          className="yellowBtn btn-rect"
          onClick={handleUpdateUser}
        >
          save
        </button>
      </td>
    </>
  );
};

export default EditEmployee;
