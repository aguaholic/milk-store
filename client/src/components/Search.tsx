import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { AppContext, ContextData } from '../AppContext';

const Search = () => {
  const { setMilkData } = useContext(AppContext) as ContextData;
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getSearchData = async () => {
      await fetch(`/api/milk?search=${searchQuery}`)
        .then(res => res.json())
        .then(data => setMilkData(data.db));
    };

    getSearchData();
  }, [searchQuery]);

  return (
    <form
      onSubmit={e => e.preventDefault()}
      className='flex items-center w-1/2'
    >
      <label htmlFor='simple-search' className='sr-only'>Search</label>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          type='text'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5'
          placeholder='Search'
          required
        />
      </div>
    </form>
  )
}

export default Search;
