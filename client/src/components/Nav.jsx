import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <nav>
      <Link to="/">Volleyball Playbook</Link>
      <Link to="/new">Add Play</Link>
    </nav>
  )
}

export default Nav;