import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to ="/fruits">Fruits</Link>
        </li>
      </ul>
    </header>
  )
}