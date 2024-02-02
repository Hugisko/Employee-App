import { useCallback, useState } from 'react'
import { EmployeeInput, EmployeeType } from '../types/types';
import { useNavigate } from 'react-router-dom';

const baseURL: string = "http://localhost:8080";

const useFetching = () => {
  const [data,setData] = useState<EmployeeType[]>([]);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      const resp = await fetch(`${baseURL}/api/employees`);
      const data = await resp.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }   
  }, []);

  const deleteData = async (id: string) => {
    try {
      const resp = await fetch(`${baseURL}/api/employee/${id}`, {
        method: "DELETE",
      });
      if(resp.ok){
        const newData = data.filter(employee => employee.id !== id);
        setData(newData);
      }
      console.log("Deleted employee: ", id);
    } catch (error) {
      console.log(error);
    }
  };

  const editData = async (id: string, formData: EmployeeType) => {
    try {
      const resp = await fetch(`${baseURL}/api/employee/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await resp.json();
      console.log("User updated: ", data);
    } catch (error) {
      console.log(error);
    }
  }

  const postData = async (formValues: EmployeeInput) => {
    try {
      const resp = await fetch(`${baseURL}/api/employee`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      const data = await resp.json();
      console.log("Created employee: ", data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return {data,deleteData,editData,fetchData, postData};
}

export default useFetching;