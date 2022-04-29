import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { getDateSince } from "../../utils/helpers";


export default function Post({ post }) {
  

  return (
    <article className="post card">
      <div className="content">
        <div className="header">
          <Link to={`/timeline/profile/${post.author.id}`} className="profileLink">
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
