import { useEffect, useState } from "react";
import Employee from "../employee/Employee";
import useFetching from "../../hooks/useFetching";

const Employees = () => {
  const [activeId, setActiveId] = useState<string>("");
  const {data, fetchData, deleteData} = useFetching();

  useEffect(() => {
    fetchData();
  },[fetchData])

  const handleDelete = async (id: string) => {
    await deleteData(id);
    fetchData();
  };

  return (
    <tbody className="employees">
      {data && data.map((employee) => (
        <Employee
          key={employee.id}
          employeeData={employee}
          activeId={activeId}
          setActiveId={setActiveId}
          handleDelete={handleDelete}
        />
      ))}
    </tbody>
  );
};

export default Employees;
