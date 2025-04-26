import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [status, setStatus] = useState("")
  const [warning, setWarning] = useState(false)
  const [hidden, setHidden] = useState(true);

  const calculateBmi = () => {
    let h = parseFloat(height);
    let w = parseFloat(weight);
    if (isNaN(h) || isNaN(w)) {
      clear();
      setWarning(true);
    }
    else {
      setWarning(false);
      let bm = (weight / ((height / 100) * (height / 100))).toFixed(2);
      setBmi(bm);
      calculateStatus(bm);
      setHidden(false);
    }
  }
  const clear = () => {
    setHeight("");
    setWeight("");
    setStatus("");
    setBmi(0)
    setWarning(false);
    setHidden(true);
  }

  function calculateStatus(bm) {
    if (bm < 18.5) {
      setStatus("Under Weight");
    }
    else if ((bm >= 18.5) && (bm <= 24.9)) {
      setStatus("Healthy")
    }
    else if ((bm > 25) && (bm <= 29.9)) {
      setStatus("Over Weight");
    }
    else {
      setStatus("Obese")
    }
  }
  return (
    <>
      <div className='h-screen bg-gray-700 flex justify-center items-center box-content'>
        <div className='bg-white rounded-md w-140 p-8 flex'>
          <div className='mr-8'>
            <img src="/images.jpeg" alt="cover image" />
          </div>
          <div>

            <h2 className='text-blue-500 font-semibold text-2xl mb-8'>BMI CALCULATOR</h2>
            {warning && <div>
              <h3 className='text-red-600 text-sm mb-4'>Enter Correct Values For Height and Weight</h3>
            </div>}
            <label htmlFor="height" className='text-gray-600 text-md'>Height (cm)</label><br />
            <input type="text" id='height' value={height} onChange={(e) => setHeight(e.target.value)} className='border px-2 py-5 border-solid border-gray-400 rounded-sm h-8 w-full mt-2 mb-4' /><br />
            <label htmlFor="weight" className='text-gray-600 text-md '>Weight (Kg)</label> <br />
            <input type="text" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} className='border px-2 py-5 border-solid border-gray-400 rounded-sm h-8 w-full mt-2' />
            <div className='m-4'>
              <button onClick={calculateBmi} className='px-3 py-2 rounded-md bg-red-400 text-lg font-semibold hover:bg-red-500 mr-6 '>
                Calculate BMI
              </button>
              <button onClick={clear} className='px-3 py-2 rounded-md bg-blue-400 text-lg font-semibold hover:bg-blue-500 '>
                Clear
              </button>
            </div>
            {!hidden && <div className='border-2 border-solid border-sky-500 p-3'>
              <span>Your BMI :</span>
              <span>{bmi}</span><br />
              <span>Status :</span>
              <span>{status}</span>
            </div>}
          </div>
        </div>

      </div>
    </>
  )
}

export default App
