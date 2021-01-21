import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div className="links">
      <div className="offense">
        <Link to="/Offense">Offense</Link>
      </div>
      <div className="defense">
        <Link to="/Defense">Defense</Link>
      </div>
    </div>
  )
}

export default Home;