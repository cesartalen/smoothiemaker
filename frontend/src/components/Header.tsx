import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <ul className='flex flex-row space-x-24'>
        <li className='ml-12'>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to ="/fruits">Fruits</Link>
        </li>
      </ul>
    </header>
  )
}