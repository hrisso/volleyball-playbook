import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div className="links">
      <div className="offense">
        <Link to="/offense">Offense</Link>
      </div>
      <div className="defense">
        <Link to="/defense">Defense</Link>
      </div>
    </div>
  )
}

export default Home;