import Logo from "../../Assets/IMG/Logo.svg";
import { Link } from "react-router-dom";
import "./styles.scss";
export default function Home() {
  return (
    <div className="home-container flex-row align-center justify-center width-100">
      <div className="home flex-col align-center justify-between">
        <img className="logo" src={Logo} alt="" />
        <Link to="/login">
          <button className="btn-default login">Sign In</button>
        </Link>
        <Link to="/register">
          <button className="btn-default register">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
