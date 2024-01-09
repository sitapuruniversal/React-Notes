import { useState } from "react";

function Backgroundchanger() {

  let [color, setColor] = useState('olive')
    function changeColor(color) {
      setColor(color)
  }

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center top-[50%] inset-x-0 px-3'>
          <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white px-5 py-4 rounded-3xl'>
            <button
              onClick={() => setColor('red') }
              className='outline-none bg-red-400 px-4 py-4 rounded-3xl shadow-lg text-black '>Red Background
            </button>

            <button
              onClick={() => setColor('green') }
              className='outline-none px-4 py-4 rounded-3xl bg-green-400 shadow-lg text-black'>Green Background
            </button>

            <button
              onClick={() => setColor('yellow') }
              className='outline-none px-4 py-4 bg-yellow-300 rounded-3xl shadow-lg text-black'>Yellow Background
            </button>

            <button
              onClick={() => setColor('purple') }
              className='outline-none px-4 py-4 bg-purple-600 rounded-3xl shadow-lg text-black'>Purple Background
            </button>
            
          </div>
        </div>
      </div>
    </>
  )
}
export default Backgroundchanger;