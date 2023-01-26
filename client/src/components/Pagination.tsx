import { useContext, useEffect, useState } from 'react';
import { AppContext, ContextData } from '../AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = () => {
  const { setMilkData } = useContext(AppContext) as ContextData;
  const [currentPage, setCurrentPage] = useState(1);

  const getPagination = async (pageNumber: number) => {
    await fetch(`/api/milk?page=${pageNumber}`)
      .then(res => res.json())
      .then(data => setMilkData(data.db));
  };

  useEffect(() => {
    getPagination(1)
  }, []);

  console.log(currentPage);

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
    getPagination(currentPage);
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    getPagination(currentPage);
  }

  const lastPage = 99 / 9;

  return (
    <div className='flex justify-center mb-11'>
      <nav aria-label='Pagination'>
        <ul className='inline-flex items-center -space-x-px'>
          <li>
            {currentPage <= 1 ?
              <button
                type='button'
                className='disabled opacity-80 cursor-not-allowed block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg'
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              :
              <button
                onClick={handlePrevious}
                className='block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700'
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>}
          </li>
          <li>
            <div className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300'>
              {currentPage}
            </div>
          </li>
          <li>
            {currentPage === lastPage ?
              <button
                type='button'
                className='disabled opacity-80 cursor-not-allowed block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg'
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              :
              <button
                type='button'
                onClick={handleNext}
                className='block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700'
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination