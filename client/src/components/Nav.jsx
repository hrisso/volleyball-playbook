import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <nav>
      <div className="left-nav">
        <img src="https://res.cloudinary.com/doas1ztbf/image/upload/v1611691787/icon_qaygqs.png" alt="vball"></img>
        <Link to="/"><h1>Volleyball Playbook</h1></Link>
      </div>
      <div className="right-nav">
        <Link to="/Offense">Offensive Plays</Link>
        <Link to="/Defense">Defensive Plays</Link>
        <Link to="/new">Add Play</Link>
      </div>
    </nav>
  )
}

export default Nav;