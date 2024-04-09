import { useEffect, useState } from 'react'
import { postSmoothieMix } from '../services/apiSmoothies'

export const HomePage = () => {

  useEffect(() => {
    postSmoothieMix().then(data => console.log(data))
  }, [])
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}