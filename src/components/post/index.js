import React from "react";
import "./styles.css";

export default function Post() {
  return (
    <article className="post card">
      <div className="content">
        <div className="header">
          <a href="profile.html" className="profileLink">
            <div className="postAuthorProfileImage" hidden>
              <div className="userProfilePicture">
                <img alt="profile" src="../assets/pfp.gif" />
              </div>
            </div>
            <div className="userIdentification">
              <div>
                <h2 className="name">Carregando</h2>
                <h3 className="username">Carregando</h3>
              </div>
              <h4 className="dateSince">Postado há 2 min</h4>
            </div>
          </a>
        </div>

        <div className="body">
          <p className="postContent">Testando o post! Tudo funcionando!</p>
        </div>
        <div className="commentsQuantity" id="" hidden>
          <div className="commentInputProfileImage">
            <div className="userProfilePicture">
              <img alt="profile" src="../assets/pfp.gif" />
            </div>
          </div>
          <input
            className="commentInput"
            id="comment"
            placeholder="Comente algo..."
            name="comment"
          />
          <h4 className="commentCount" id="commentCount">
            42
          </h4>
        </div>
        <a href="post.html" className="seePost">
          Ver postagem
        </a>
      </div>
    </article>
  );
}
