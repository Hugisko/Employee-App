import './headTable.css';

const HeadTable = () => {
  return (
    <div className='headTable'>
        <div className='name'>Name</div>
        <div className='email'>Email</div>
        <div className='department'>Department</div>
        <div className='phone'>Phone</div>
        <div className='actions'>Actions</div>
    </div>
  )
}

export default HeadTable