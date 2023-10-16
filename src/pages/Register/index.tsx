import Logo from "../../Assets/IMG/Logo.svg";
import { Link } from "react-router-dom";
import "./styles.scss";
export default function Register() {
  return (
    <div className="register-container flex-row align-center justify-center width-100">
      <div className="register flex-col align-center justify-between">
        <img className="logo" src={Logo} alt="" />
      </div>
    </div>
  );
}
