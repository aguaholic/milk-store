import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { AppContext, ContextData } from '../AppContext';

const Detail = () => {
  const { milkData } = useContext(AppContext) as ContextData;
  const { id } = useParams();

  const singleMilkInfo = milkData?.results.find(milk => milk.id === id);
  console.log(singleMilkInfo)
  const highStorage = singleMilkInfo && singleMilkInfo.storage > 15;

  return (
    <div className='w-3/4 bg-rose-100 m-auto p-5'>
      <Link to='/'
        className=' text-gray-900 hover:text-lg font-medium text-sm'
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        Back
      </Link>
      <div className='flex justify-between w-2/4 m-auto my-28'>
        <div className='w-full bg-white'>
          <img className='w-2/3 m-auto py-5 ' src='https://i.imgur.com/w6699FQ.png' alt={singleMilkInfo?.name} />
        </div>
        <div className='flex flex-col justify-between px-4 w-full'>
          <div>
            <h2 className='text-gray-700 font-semibold text-lg mb-2'>
              {singleMilkInfo?.name}
            </h2>
            <p className='text-gray-700 font-extralight text-lg mb-2'>
              {singleMilkInfo?.type}
            </p>
            {highStorage ?
              <p className='text-green-500 text-lg mb-2'>
                {singleMilkInfo?.storage} liters
              </p>
              :
              <p className='text-red-500 text-lg mb-2'>
                {singleMilkInfo?.storage} liters
              </p>
            }
          </div>
          {/* <Slider /> */}
          <div>
            <button
              type='button'
              className=' text-gray-900 bg-gray-300 hover:text-gray-300  hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm px-5 py-1 text-center'
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;
