import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../services/api";
import "./styles.css";

export default function Profile() {
  const { userId } = useParams();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const current_user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setLoading(true);
    console.log("ronaldinho soccer")
    api.get(`/profiles/${userId}/`).then((response) => {
      setUser(response.data);
      console.log(user)
      setLoading(false);
    });
  }, [userId]);

  if (loading) return null;
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
        {user.display_name}

        </h1>
        <h2 id="username" className="username">
          {user.username}
        </h2>
      </div>
      <div className="profileInformation">
        <h3 className="biography">Biografia</h3>

        <p id="biography">{user.biography}</p>
      </div>

      <div className="profileInformation">
        <h3 className="biography">Personalidade</h3>

        <p id="personality">{user.personality}</p>
      </div>

      <div className="profileInformation">
        <h3 className="biography">Cidade</h3>

        <p id="city">{user.city}</p>
      </div>

      <div className="profileInformation">
        <h3 className="biography">Instituição de ensino</h3>

        <p id="almaMater">{user.alma_mater}</p>
      </div>

      <div className="profileInformation">
        <h3 className="biography">Número de contato</h3>

        <p id="contactNumber">{user.contact_number}</p>
      </div>
      {current_user.id == user.id?
      (<div className="profileActions">
        <input type="button" value="Editar" id="editProfileButton" />
        <input type="button" value="Excluir" id="excludeProfileButton" />
      </div>):null
    }
    </div>
  );
}
