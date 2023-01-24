import { useContext } from 'react';
import { AppContext, ContextData } from '../AppContext';
import { Milk } from '../types';
import Card from './Card';

const Cards = () => {
  const { milkData } = useContext(AppContext) as ContextData;

  return (
    <div className='flex flex-wrap gap-7 justify-center py-11'>
      {milkData?.results.map((singleMilk: Milk): any =>
        <div key={singleMilk.id}>
          <Card singleMilk={singleMilk} />
        </div>
      )}
    </div>
  )
};

export default Cards;
