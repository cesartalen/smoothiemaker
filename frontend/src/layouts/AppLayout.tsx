import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const AppLayout = () => {
  return(
    <div className=' max-w-7xl text-center p-8'>
      <Header/>
      <Outlet/>
    </div>
  )
}