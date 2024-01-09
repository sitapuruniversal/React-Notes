import { useState ,useCallback } from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllow, setNumberallow] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllow) str += "0123456789"
    if (charAllowed) str += "!@#$%^&^*~"
    for (let i = 1; i < array.length; i++){

      let char = floor(Math.random() * str.lenght + 1)
      
      pass = str.charAt(char)
    }
    setPassword(pass)
    
  },[length,numberAllow,charAllowed,setPassword]) 
  return (
    <>
      <div className='w-full max-auto shadow-md rounded-xl px-4 my-8 bg-gray-300'>
        <h1 className='text-center text-4xl p-5 mb-5'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg  mb-5'>
          <input
            type='text'
            value={Password}
            className='outline-none w-full p-5 border' 
            placeholder='Password'
            readOnly
          />
          <button
            className='outline-none bg-blue-500 text-white p-5 shrink-0'>Copy</button>
          
          <div className='flex text-sm gap-x-4'> 
            <div className='flex items-center gap-x-2'>
              <input
                type='range'
                min={6}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}

              />
              <label> Length: {length}</label> 
            </div>

            <div className='flex item-centr gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={numberAllow}
                id='numberInput'
                onChange={() => {
                  setNumberallow((pre)=>!prev);
                }}
              />
              <label htmlFor='numberInput'> Number</label> 
            </div>

            <div className='flex item-centr gap-x-1'>
              <input
                type='checkbox'
               
                id='charinput'
                onChange={() => {
                  setCharAllowed((pre)=>!prev);
                }}
              />
              <label htmlFor='numberInput'> Number</label> 
            </div>
          </div>         
        </div>
      </div>
    </>
  )
}

export default App;
