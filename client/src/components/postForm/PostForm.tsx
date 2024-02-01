import { ChangeEvent, FormEvent, useState } from "react";
import "./postForm.css";
import { EmployeeInput } from "../../types/types";

const defaultValues = {
    name: "",
    email: "",
    phone: "",
    department: "",
}

const PostForm = () => {
  const [formValues, setFormValues] = useState<EmployeeInput>(defaultValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormValues(defaultValues);
  };

  return (
    <form className="postForm" onSubmit={handleSubmit}>
      <div className="formField">
        <label htmlFor="postName">Name</label>
        <input
          type="text"
          id="postName"
          name="name"
          onChange={handleChange}
          value={formValues.name}
        />
      </div>
      <div className="formField">
        <label htmlFor="postEmail">Email</label>
        <input
          type="text"
          id="postEmail"
          name="email"
          onChange={handleChange}
          value={formValues.email}
        />
      </div>
      <div className="formField">
        <label htmlFor="postDepartment">Department</label>
        <input
          type="text"
          id="postDepartment"
          name="department"
          onChange={handleChange}
          value={formValues.department}
        />
      </div>
      <div className="formField">
        <label htmlFor="postPhone">Phone</label>
        <input
          type="text"
          id="postPhone"
          name="phone"
          onChange={handleChange}
          value={formValues.phone}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default PostForm;
