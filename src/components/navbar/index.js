import React from "react";
import "./styles.css";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="align">
        <Logo/>
        <MdLogout
          className="logoutIcon"
          size={30}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </nav>
  );
}

class Logo extends React.Component{

  render(){
    return  (<div className="logo">
          <Link to="/timeline">
            <img alt="vipyLogo" src="/Logotipo.svg" />
          </Link>
        </div>)}
}