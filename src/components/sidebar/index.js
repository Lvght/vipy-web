import React from "react";
import "./styles.css";
import {MdChat, MdHome, MdNotifications, MdSearch} from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="sidebarContent">
      <div className="sidebarScoll">
        <ul>
          <div className="profile">
            <div className="imageContainer">
              <div className="cover">
                <img alt="profileCover" src="/coverImage.gif"/>
              </div>
            </div>
            <a id="currentUserProfileLink" href="profile.html">
              <div className="userProfilePictureSidebar">
                <div className="userProfilePicture">
                  <img alt="profile" src="/pfp.gif"/>
                </div>
              </div>
            </a>
            <a href="profile.html">
              <div className="profileInformations">
                <h2 className="name currentName">Pikachu</h2>
                <h3 className="username currentUsername">@Pikachu</h3>
              </div>
            </a>
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
          <a href="home.html">
            <li className="item-menu">
              <MdHome />
              <span className="menu">Inicio</span>
            </li>
          </a>
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
