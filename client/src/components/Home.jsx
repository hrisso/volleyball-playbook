import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div className="links">
      <div className="offense">
      <img src="https://res.cloudinary.com/doas1ztbf/image/upload/v1611335263/offense_zrq0yl.jpg" alt="offense"></img>
        <Link to="/Offense">Offense</Link>
        <img src="https://res.cloudinary.com/doas1ztbf/image/upload/v1611333315/chevron_zheozj.jpg" alt="chevron"></img>
      </div>
      <div className="defense">
      <img src="https://res.cloudinary.com/doas1ztbf/image/upload/v1611335259/defense_tlsfka.jpg" alt="defense"></img>
        <Link to="/Defense">Defense</Link>
        <img src="https://res.cloudinary.com/doas1ztbf/image/upload/v1611333315/chevron_zheozj.jpg" alt="chevron"></img>
      </div>
    </div>
  )
}

export default Home;