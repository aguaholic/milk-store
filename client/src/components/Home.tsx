import { useContext, useEffect, useState } from 'react';
import { AppContext, ContextData } from '../AppContext';
import Cards from './Cards';
import Counter from './Counter';
import Filter from './Filter';
import Header from './Header';
import Modal from './Modal';
import Search from './Search';

const Home = () => {
  const { setMilkData } = useContext(AppContext) as ContextData;
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    const getMilkData = async () => {
      await fetch('/api/milk')
        .then(res => res.json())
        .then(data => setMilkData(data.db));
    };

    getMilkData();
  }, [isFilterOpen]);

  const handleOpenFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  }

  const handleCloseModal = () => {
    setIsFilterOpen(false);
  }

  return (
    <div>
      <Header title='the milk shop' />
      <div className='bg-rose-100 px-2 md:px-3 lg:px-24 mt-5'>
        <Counter />
        <div className='flex justify-between mt-3'>
          <Search />
          <div className='flex flex-col'>
            <button
              className='text-gray-900 hover:text-lg font-medium text-lg'
              onClick={handleOpenFilter}
            >
              Filter
            </button>
            {isFilterOpen && <Modal title='Milk types' handleCloseModal={handleCloseModal}><Filter /></Modal>}
          </div>
        </div>
        <Cards />
      </div>
    </div>
  )
}

export default Home;
