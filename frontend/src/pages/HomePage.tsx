import { ChangeEvent, useEffect, useState } from 'react'
import { postSmoothieMix } from '../services/apiSmoothies'

export const HomePage = () => {
  const [inputData, setInputData] = useState<string>()

  const handleSubmit = async () => {
    if(inputData != undefined) {
      // TODO default amount should be 1, but if there is a number at the end before comma it should be used as the amount.

      // Removes spaces in the beginning/end of each word, split them into arrays separated by comma.
      let data = inputData.split(',').map(item => item.trim())
    }

    //TODO Notify user that nothing happens cause input is empty
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputData(e.target.value)
  }

  useEffect(() => {
    postSmoothieMix().then(data => console.log(data))
  }, [])
  return (
    <>
      <div>
        <h1>Home Page</h1>
      </div>
      <div>
        <textarea rows={4} cols={50} onChange={handleChange} placeholder='Separate fruits by comma'/>
        <button onClick={() => handleSubmit()}></button>
      </div>
    </>
  )
}