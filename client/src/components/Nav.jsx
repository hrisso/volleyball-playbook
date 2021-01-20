import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <nav>
      <h1>Volleyball Playbook</h1>
      <Link to="/">Home</Link>
    </nav>
  )
}

export default Nav;