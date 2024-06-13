import React from "react";

import { RiGitRepositoryFill } from "react-icons/ri";

import Title from "../../components/Title/Title";
import { FaCodeFork } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import Person from "./Person";
import "./Profile.css";
function Profile() {
  return (
    <div>
      <div className="profileContainer">
        <div className="profile">
          <Person/>
        </div>
        <div className="details">
          <div className="repositoriesContainer">
            <Title titlename="repositories" />
            <div className="repositoriesCard">
              <div className="repocard">
                <div className="reponame">
                  <RiGitRepositoryFill />
                  <p>repository</p>
                </div>
                <div className="repodetails">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  unde sequi commodi nobis cumque architecto quo enim aspernatur
                  cupiditate sapiente!
                </div>
                <div className="repominor">
                  <div className="forks">
                    <FaCodeFork />

                    <p>this forks</p>
                  </div>
                  <div className="star">
                    <FaRegStar />
                    <p>this star</p>
                  </div>
                </div>
              </div>
              <div className="repocard">
                <div className="reponame">
                  <RiGitRepositoryFill />
                  <p>repository</p>
                </div>
                <div className="repodetails">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  unde sequi commodi nobis cumque architecto quo enim aspernatur
                  cupiditate sapiente!
                </div>
                <div className="repominor">
                  <div className="forks">
                    <FaCodeFork />

                    <p>this forks</p>
                  </div>
                  <div className="star">
                    <FaRegStar />
                    <p>this star</p>
                  </div>
                </div>
              </div>
              <div className="repocard">
                <div className="reponame">
                  <RiGitRepositoryFill />
                  <p>repository</p>
                </div>
                <div className="repodetails">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  unde sequi commodi nobis cumque architecto quo enim aspernatur
                  cupiditate sapiente!
                </div>
                <div className="repominor">
                  <div className="forks">
                    <FaCodeFork />

                    <p>this forks</p>
                  </div>
                  <div className="star">
                    <FaRegStar />
                    <p>this star</p>
                  </div>
                </div>
              </div>
              <div className="repocard">
                <div className="reponame">
                  <RiGitRepositoryFill />
                  <p>this repository</p>
                </div>
                <div className="repodetails">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  unde sequi commodi nobis cumque architecto quo enim aspernatur
                  cupiditate sapiente!
                </div>
                <div className="repominor">
                  <div className="forks">
                    <FaCodeFork />

                    <p>this forks</p>
                  </div>
                  <div className="star">
                    <FaRegStar />
                    <p>this star</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="followersContainer"></div>
          <div className="followingContainer"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
