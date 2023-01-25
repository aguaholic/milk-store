import { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

interface ModalProps {
  title: string,
  children: JSX.Element,
  handleCloseModal: MouseEventHandler<HTMLButtonElement>
}

const Modal = ({ title, children, handleCloseModal }: ModalProps) => {
  return (
    <div className='bg-white z-10 w-1/5 fixed right-3 top-15 p-3 rounded-md shadow-lg'>
      <div className='flex justify-between'>
        <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
          {title}
        </h3>
        <button
          onClick={handleCloseModal}
          type='button'
        >
          <FontAwesomeIcon icon={faCircleXmark} size="lg" />
        </button>
      </div>
      <div className='p1'>
        {children}
      </div>
    </div>
  )
}

export default Modal;
