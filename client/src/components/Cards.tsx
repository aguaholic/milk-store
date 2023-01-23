import { useContext } from 'react';
import { AppContext, ContextData } from '../AppContext';
import { Milk, MilkData } from '../types';
import Card from './Card';

const Cards = () => {
  const { milkData, setMilkData } = useContext(AppContext) as ContextData;
  return (
    <div className='flex flex-wrap gap-7 justify-center bg-rose-100 py-11'>
      {milkData?.results.map((singleMilk: Milk): any =>
        <div key={singleMilk.id}>
          <Card singleMilk={singleMilk} />
        </div>
      )}
    </div>
  )
};

export default Cards;
