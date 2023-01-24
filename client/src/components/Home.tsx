import { useContext, useEffect } from 'react';
import { AppContext, ContextData } from '../AppContext';
import Cards from './Cards';
import Counter from './Counter';
import Header from './Header';

const Home = () => {
  const { milkData, setMilkData } = useContext(AppContext) as ContextData;
  console.log('hoi', milkData)

  useEffect(() => {
    const getMilkData = async () => {
      await fetch('/api/milk')
        .then(res => res.json())
        .then(data => setMilkData(data.db));
    };

    getMilkData();
  }, []);

  return (
    <div className='bg-rose-100'>
      <Header title='the milk shop' />
      <Counter />
      <Cards />
    </div>
  )
}

export default Home;