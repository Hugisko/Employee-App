import { ButtonHTMLAttributes } from 'react';
import './editBtn.css'
import { IDType } from '../../types/types';

type EditProps = {
  id: string,
  handleEdit: (id: string) => void
}

const EditBtn = ({handleEdit, id} : EditProps) => {

  return (
    <button type='button' className='editBtn' onClick={()=>handleEdit(id)}>EditBtn</button>
  )
}

export default EditBtn;