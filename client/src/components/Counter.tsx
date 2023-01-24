import { useContext } from 'react'
import { AppContext, ContextData } from '../AppContext';

const Counter = () => {
  const { milkData } = useContext(AppContext) as ContextData;

  return (
    <div className='bg-rose-100 text-left font-medium'>
      {milkData?.count} products
    </div>
  )
}

export default Counter