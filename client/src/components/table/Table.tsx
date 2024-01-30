import './table.css';
import HeadTable from '../headTable/HeadTable';
import Employees from '../employees/Employees';

const Table = () => {
  return (
    <div className='table'>
        <HeadTable />
        <Employees />
    </div>
  )
}

export default Table;