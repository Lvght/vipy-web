import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  function getDateSince(dateString) {
    let currentDate = new Date();
    let date = new Date(dateString);
    let timeSince = currentDate.getTime() / 1000 - date.getTime() / 1000;
    if (timeSince >= 60) {
      if (timeSince / 60 >= 60) {
        if (timeSince / 60 / 60 >= 24) {
          if (timeSince / 60 / 60 / 24 >= 7) {
            const a = date;
            return "Postado em " + a.toLocaleDateString();
          } else return parseInt(timeSince / 60 / 60 / 24) + "d atrás";
        } else return parseInt(timeSince / 60 / 60) + "h atrás";
      } else return parseInt(timeSince / 60) + "m atrás";
    } else return parseInt(timeSince) + "s atrás";
  }

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
                <h2 className="name">{post.author.display_name}</h2>
                <h3 className="username">@{post.author.username}</h3>
              </div>
              <h4 className="dateSince">{getDateSince(post.created_at)}</h4>
            </div>
          </Link>
        </div>

        <div className="body">
          <p className="postContent">{post.content}</p>
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
        <Link className="seePost" to={`detail/${post.id}`}>
          Ver postagem
        </Link>
      </div>
    </article>
  );
}
