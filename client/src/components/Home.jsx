import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div className="links">
      <div className="offense">
        <Link to="/Offense">Offense</Link>
        <img src="https://res.cloudinary.com/doas1ztbf/image/upload/v1611333315/chevron_zheozj.jpg" alt="chevron"></img>
      </div>
      <div className="defense">
        <Link to="/Defense">Defense</Link>
        <img src="https://res.cloudinary.com/doas1ztbf/image/upload/v1611333315/chevron_zheozj.jpg" alt="chevron"></img>
      </div>
    </div>
  )
}

export default Home;