import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <article className="post card">
      <div className="content">
        <div className="header">
          <Link to="/timeline/profile" className="profileLink">
            <div className="postAuthorProfileImage" hidden>
              <div className="userProfilePicture">
                <img alt="profile" src="/pfp.gif" />
              </div>
            </div>
            <div className="userIdentification">
              <div>
                <h2 className="name">Picachu</h2>
                <h3 className="username">@picachu</h3>
              </div>
              <h4 className="dateSince">Postado há 2 min</h4>
            </div>
          </Link>
        </div>

        <div className="body">
          <p className="postContent">Testando o post! Tudo funcionando!</p>
        </div>
        <div className="commentsQuantity" id="" hidden>
          <div className="commentInputProfileImage">
            <div className="userProfilePicture">
              <img alt="profile" src="/pfp.gif" />
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
        <Link className="seePost" to="detail">
          Ver postagem
        </Link>
      </div>
    </article>
  );
}
