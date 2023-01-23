import { Link } from 'react-router-dom';
import { Milk } from '../types';

interface CardProps {
  singleMilk: Milk;
}

const Card = ({ singleMilk }: CardProps) => {

  return (
    <Link to={`/puppies/${singleMilk.id}`}
      className='block max-w-sm bg-white border border-[#cc8ea3] rounded-lg shadow-md hover:bg-gray-100'
    >
      <div className='max-w-sm m-auto rounded overflow-hidden shadow-lg mt-3'>
        <img className='w-5/12 m-auto py-5' src='https://i.imgur.com/w6699FQ.png' alt={singleMilk.name} />
        <div className='px-1 py-4'>
          <h2 className='text-gray-700 font-semibold text-lg mb-2'>
            {singleMilk.name}
          </h2>
          <p className='text-gray-700 font-extralight text-lg mb-2'>
            {singleMilk.type}
          </p>
        </div>
      </div>
    </Link>
  )
};

export default Card;