import React from "react";
import "./styles.css";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Logo } from "../../utils/helpers";

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

