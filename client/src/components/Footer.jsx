import { Link } from 'react-router-dom'

function Footer(props) {
  return (
    <div className="foot">
      <Link to="https://github.com/hrisso/volleyball-playbook">
        <img className="footer-img" src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png" alt="GitHub">
        </img>
      </Link>
    </div>
  )
}

export default Footer;