import './table.css';
import HeadTable from '../headTable/HeadTable';
import Employees from '../employees/Employees';

const Table = () => {
  return (
    <table className='table'>
        <HeadTable />
        <Employees />
    </table>
  )
}

export default Table;