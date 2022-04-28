import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./styles.css";
export default function CreatePostModal({ isOpen, setIsOpen }) {
  if (!isOpen) return null;
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <div class="post createPost">
          <form method="post" id="createPostForm">
            <div class="card cardPost" id="cardPost">
              <div class="content">
                <div class="card-header" id="cardHeaderPost">
                  <div class="profileLink">
                    <div class="postAuthorProfileImage" hidden>
                      <div class="userProfilePicture">
                        <img alt="profile" src="../assets/pfp.gif" />
                      </div>
                    </div>
                    <div class="userIdentification">
                      <div>
                        <h2 class="name currentName">Carregando...</h2>
                        <br />
                        <h3 class="username currentUsername">Carregando...</h3>
                      </div>
                      <h4>Agora</h4>
                    </div>
                  </div>
                </div>

                <div class="card-body" id="cardBodyPost">
                  <div class="postCreationContent">
                    <textarea
                      class="textArea"
                      name="content"
                      placeholder="Comente algo..."
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
