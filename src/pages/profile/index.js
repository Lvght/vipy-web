import React from "react";
import "./styles.css";

export default function Profile() {
  return (
    <div className="profilePage">
      <div className="imageContainer">
        <div className="cover">
          <img alt="profileCover" src="/coverImage.gif" />
        </div>
      </div>
      <div className="userProfilePictureSidebar">
        <div className="userProfilePicture">
          <img alt="profile" src="/pfp.gif" />
        </div>
      </div>
      <div className="profileInformations">
        <h1 id="displayName" className="name">
          Pikachu
        </h1>
        <h2 id="username" className="username">
          @Pikachu
        </h2>
      </div>
      <div className="profileInformation">
        <h3 className="biography">Biografia</h3>

        <p id="biography">Uma biografia</p>
      </div>

      <div className="profileInformation">
        <h3 className="biography">Personalidade</h3>

        <p id="personality">ISTJ</p>
      </div>

      <div className="profileInformation">
        <h3 className="biography">Cidade</h3>

        <p id="city">São Carlos</p>
      </div>

      <div className="profileInformation">
        <h3 className="biography">Instituição de ensino</h3>

        <p id="almaMater">Ufscar</p>
      </div>

      <div className="profileInformation">
        <h3 className="biography">Número de contato</h3>

        <p id="contactNumber">333333333</p>
      </div>

      <div className="profileActions">
        <input type="button" value="Editar" id="editProfileButton" />
        <input type="button" value="Excluir" id="excludeProfileButton" />
      </div>
    </div>
  );
}
