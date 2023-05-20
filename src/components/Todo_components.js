import React, {useState} from 'react'

function Todolist() {
    const [diceValue, setdiceValue] = useState(1);
    const [tryValue, settryValue] = useState(5);


    function randomNumberInRange(min, max) {
      // 👇️ get number between min (inclusive) and max (inclusive)
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleDice = () => {
      let get = randomNumberInRange(1, 6)
      while (diceValue === get) {
        get = randomNumberInRange(1,6)
      }
      // console.log(get)
      setdiceValue(get);
      if (get !== 6)
        settryValue(tryValue - 1)
    };

    const setNewDice = () => {
      setdiceValue(1)
      settryValue(5)
    }
  
  return (
        
    <div className='min-h-screen flex flex-col justify-center font-Poppins'>
        <div className={diceValue === 1 ? "max-w-[180PX] w-full mx-auto h-[180px] mt-4 p-8 mb-12 bg-white rounded-3xl shadow-lm grid justify-center items-center animate-bounce" : "max-w-[180PX] w-full mx-auto h-[180px] mt-4 p-8 mb-12 bg-white rounded-3xl shadow-lm grid justify-center items-center animate-bounce grid-cols-2" } >
          {Array.from({ length: diceValue }, () => (
            <div className=''>
              <div className='w-[20px] h-[20px] bg-black rounded-full mx-auto' />
            </div>
          ))}
        </div>
        <div className='text-center font-extrabold'>You got <span className='text-blue-500'>{diceValue}</span> !!!</div>
        <div className='text-center font-extrabold'>You have <span className='text-blue-500'>{tryValue}</span> yet</div>
        {diceValue === 6 && <p className='text-green-500 text-center font-extrabold'>You win</p>}
        {tryValue === 0 && <p className='text-red-500 text-center font-extrabold'>You loose</p>}
        <button onClick={diceValue === 6 || tryValue === 0 ? setNewDice : handleDice} className='max-w-[180PX] w-full mx-auto mt-4 py-3 bg-white rounded-2xl shadow-lm grid justify-center items-center hover:scale-110 transition duration-500 hover:duration-500'>
            {
              diceValue === 6 || tryValue === 0 ?
              <span>Reset</span> : <span>Click here !!!</span>
            }
          {/* Click here !!! */}
        </button>

    </div>
  )
}

export default Todolist