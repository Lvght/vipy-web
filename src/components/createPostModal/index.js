import React, { useEffect, useState } from "react";
import "./styles.css";
import api from "../../services/api";
export default function CreatePostModal({
  isOpen,
  setIsOpen,
  posts,
  setPosts,
}) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      content,
    };
    api.post("/posts/", data).then((res) => {
      setPosts([res.data, ...posts]);
      setContent("");
      setIsOpen(false);
    });
  }
  if (!isOpen) return null;
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" onClick={() => setIsOpen(false)}>
          &times;
        </span>
        <div class="post createPost">
          <form method="post" id="createPostForm" onSubmit={handleSubmit}>
            <div class="card cardPost" id="cardPost">
              <div class="content">
                <div class="card-header" id="cardHeaderPost">
                  <div class="profileLink">
                    <div class="postAuthorProfileImage" hidden>
                      <div class="userProfilePicture">
                        <img alt="profile" src="/pfp.gif" />
                      </div>
                    </div>
                    <div class="userIdentification">
                      <div>
                        <h2 class="name currentName">{user.display_name}</h2>
                        <br />
                        <h3 class="username currentUsername">
                          @{user.username}
                        </h3>
                      </div>
                      Agora
                    </div>
                  </div>
                </div>

                <div class="card-body" id="cardBodyPost">
                  <div class="postCreationContent">
                    <textarea
                      class="textArea"
                      name="content"
                      placeholder="Comente algo..."
                      onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div id="errorMessage"></div>
              </div>
            </div>
            <div class="bottom">
              <div class="submitPost">
                <input
                  class="createPost"
                  id="createPostBtn"
                  data="disable:true"
                  type="submit"
                  value="Postar"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
