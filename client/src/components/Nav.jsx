import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <nav>
      <Link to="/"><h1>Volleyball Playbook</h1></Link>
      <div className="right-nav">
        <Link to="/Offense">Offensive Plays</Link>
        <Link to="/Defense">Defensive Plays</Link>
        <Link to="/new">Add Play</Link>
      </div>
    </nav>
  )
}

export default Nav;