import {useState} from 'react'
    
export const CounterApp = () => {
    const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button className='btn btn-primary' onClick={() => setCount(count + 1)} >
          {count}
        </button>
      </div>

    </>
  )

}