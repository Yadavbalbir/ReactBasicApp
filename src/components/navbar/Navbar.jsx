import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

const Navbar=() => {
  return (
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" className="d-flex title align-items-center col-md-3 mb-2 mb-md-0">
        <FontAwesomeIcon className="px-2" icon={faBuilding} />
        Startup Portal
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-warning active">Home</a></li>
        <li><a href="#" className="nav-link px-2 link-light">Features</a></li>
        <li><a href="#" className="nav-link px-2 link-light">Pricing</a></li>
        <li><a href="#" className="nav-link px-2 link-light">FAQs</a></li>
        <li><a href="#" className="nav-link px-2 link-light">About</a></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn text-white btn-outline-primary me-2">Login</button>
        <button type="button" className="btn text-white btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
  )
}

export default Navbar;