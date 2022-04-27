import React from "react";
import "./styles.css";
import { MdChat, MdHome, MdNotifications, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebarContent">
      <div className="sidebarScoll">
        <ul>
          <div className="profile">
            <div className="imageContainer">
              <div className="cover">
                <img alt="profileCover" src="/coverImage.gif" />
              </div>
            </div>
            <Link id="currentUserProfileLink" to="/timeline/profile">
              <div className="userProfilePictureSidebar">
                <div className="userProfilePicture">
                  <img alt="profile" src="/pfp.gif" />
                </div>
              </div>
            </Link>
            <Link to="profile.html">
              <div className="profileInformations">
                <h2 className="name currentName">Pikachu</h2>
                <h3 className="username currentUsername">@Pikachu</h3>
              </div>
            </Link>
            {/* <div className="stars">
              <span className="material-icons"> star </span>
              <span className="material-icons"> star </span>
              <span className="material-icons"> star </span>
              <span className="material-icons"> star </span>
              <span className="material-icons"> star </span>
            </div> */}
          </div>
          <li className="newPostButton">
            <button className="newPost" id="myBtn">
              Novo Post
            </button>
            <button className="newPostPlus" id="myBtnMobile">
              +
            </button>
          </li>
          <Link to="/timeline">
            <li className="item-menu">
              <MdHome />
              <span className="menu">Inicio</span>
            </li>
          </Link>
          <a href="#">
            <li className="item-menu">
              <MdChat />
              <span className="menu">Mensagens</span>
            </li>
          </a>
          <a href="#">
            <li className="item-menu">
              <MdSearch />
              <span className="menu">Descubra</span>
            </li>
          </a>
          <a href="#">
            <li className="item-menu">
              <MdNotifications />
              <span className="menu">Notificações</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
