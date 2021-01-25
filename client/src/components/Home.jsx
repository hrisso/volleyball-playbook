import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div className="links">
      <Link to="/Offense">
        <div className="offense">
          <img src="https://res.cloudinary.com/doas1ztbf/image/upload/v1611335263/offense_zrq0yl.jpg" alt="offense"></img>
          <h2>Offense</h2>
          <img src="https://res.cloudinary.com/doas1ztbf/image/upload/v1611333315/chevron_zheozj.jpg" alt="chevron"></img>
        </div>
      </Link>
      <Link to="/Defense">
        <div className="defense">
          <img src="https://res.cloudinary.com/doas1ztbf/image/upload/v1611335259/defense_tlsfka.jpg" alt="defense"></img>
          <h2>Defense</h2>
          <img src="https://res.cloudinary.com/doas1ztbf/image/upload/v1611333315/chevron_zheozj.jpg" alt="chevron"></img>
        </div>
      </Link>
    </div>
  )
}

export default Home;