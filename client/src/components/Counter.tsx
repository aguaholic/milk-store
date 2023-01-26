import { useContext } from 'react'
import { AppContext, ContextData } from '../AppContext';

const Counter = () => {
  const { milkData } = useContext(AppContext) as ContextData;

  return (
    <div className='text-gray-900 font-medium text-lg'>
      {milkData?.count} products
    </div>
  )
}

export default Counter