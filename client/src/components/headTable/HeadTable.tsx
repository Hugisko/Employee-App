import "./headTable.css";

const HeadTable = () => {
  return (
    <thead className="headTable">
      <tr>
        <th className="name">Name</th>
        <th className="email">Email</th>
        <th className="department">Department</th>
        <th className="phone">Phone</th>
        <th className="actions">Actions</th>
      </tr>
    </thead>
  );
};

export default HeadTable;
