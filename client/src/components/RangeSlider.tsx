import React, { useState } from 'react';

interface RangeSliderProps {
  max: number | undefined,
}

const RangeSlider = ({ max }: RangeSliderProps) => {
  const [orderAmount, setOrderAmount] = useState<number>(1)

  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderAmount(Number(event.target.value));
  }

  return (
    <div>
      <div className='range-wrap'>
        <input
          name='range'
          type='range'
          min='1'
          max={max}
          className='w-full h-1 mb-6 bg-white rounded-lg appearance cursor-pointer range-sm accent-rose-300'
          onChange={handleAmount}
        />
        <div>{orderAmount}</div>
      </div>
    </div>
  )
}

export default RangeSlider;
