import { Link } from 'react-router-dom';
import { Milk } from '../types';

interface CardProps {
  singleMilk: Milk;
}

const Card = ({ singleMilk }: CardProps) => {
  const highStorage = singleMilk.storage > 15;

  return (
    <Link to={`/milk/${singleMilk.id}`}
      className='block max-w-sm border border-gray-100 rounded-lg shadow-md hover:bg-gray-100'
    >
      <div className='max-w-sm bg-gray-100 rounded overflow-hidden shadow-lg'>
        <img className='w-5/12 m-auto py-5' src='https://i.imgur.com/w6699FQ.png' alt={singleMilk.name} />
        <div className='px-2 py-4 bg-white text-left'>
          <h2 className='text-gray-700 font-semibold text-lg mb-2'>
            {singleMilk.name}
          </h2>
          <div className='flex justify-between'>
            <p className='text-gray-700 font-extralight text-lg mb-2'>
              {singleMilk.type}
            </p>
            {highStorage ?
              <p className='text-green-500 text-lg mb-2'>
                {singleMilk.storage} liters
              </p>
              :
              <p className='text-red-500 text-lg mb-2'>
                {singleMilk.storage} liters
              </p>
            }
          </div>
        </div>
      </div>
    </Link>
  )
};

export default Card;