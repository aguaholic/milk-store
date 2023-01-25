import { useContext, useEffect, useState } from 'react';
import { AppContext, ContextData } from '../AppContext';

const products = [
  'All',
  'Whole milk',
  'Rice milk',
  'Coconut milk',
  'Macadamia milk',
  'Hemp milk',
  'Cashew milk',
  'Almond milk',
  'Soy milk',
  'Oat milk',
  'Walnut milk',
  'Pea milk',
];

const Filter = () => {
  const { setMilkData } = useContext(AppContext) as ContextData;
  const [isChecked, setIsChecked] = useState('');

  const adjustedFilter = isChecked.replace(' ', '-').toLowerCase();

  useEffect(() => {
    if (adjustedFilter === 'all') {
      const getMilkData = async () => {
        await fetch('/api/milk')
          .then(res => res.json())
          .then(data => setMilkData(data.db));
      };

      getMilkData();
    }

    const getFilteredData = async () => {
      await fetch(`/api/milk?filter=${adjustedFilter}`)
        .then(res => res.json())
        .then(data => setMilkData(data.db));
    };

    getFilteredData();
  }, [isChecked]);

  const handleCheck = (value: string) => {
    setIsChecked(value)
  };

  return (
    <div>
      <fieldset>
        {products.map((item, i) => (
          <div key={i} className='flex items-center'>
            <input
              type='checkbox'
              id={String(i)}
              name={item}
              checked={isChecked === item}
              onChange={() => handleCheck(item)}
              className='w-4 h-4'
            />
            <label className='mx-1 font-light' htmlFor={item}>
              {item}
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  )
};

export default Filter;
