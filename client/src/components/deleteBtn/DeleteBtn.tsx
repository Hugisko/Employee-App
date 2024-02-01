import { IDType } from '../../types/types';
import './deleteBtn.css';

type DeleteProps = {
  id: string,
  handleDelete: (id: string) => void
}

const DeleteBtn = ({id, handleDelete} : DeleteProps) => {
  return (
    <button type='button' className='deleteBtn' onClick={()=>handleDelete(id)}>DeleteBtn</button>
  )
}

export default DeleteBtn;