import React from "react";
import Repositories from "./Repositories";
import Title from "../../components/Title/Title";
import Person from "./Person";
import "./Profile.css";
import useProfileStore from "../../store/profile";
import { MdOutlineLink } from "react-icons/md";



function Profile() {
  const { profile } = useProfileStore((state) => ({
    profile: state.profile,
  }));
  return (
    <div>
      <div className="profileContainer">
        <div className="profile">
          {/* <Person /> */}
        </div>
        <div className="details">
          <div className="repositoriesContainer">
            <Title titlename="repositories" {...profile.public_repos} />
            <div className="repositoriesCard">
              {/* <Repositories /> */}
            </div>
          </div>
          <div className="followersContainer">
            <div className="ActualContainer">
              <div className="followersCard">
                <div className="followersimage">
                  <img src="" alt="" />
                </div>
                <div className="followersName">
                  <p>name</p>
                </div>
                <div className="followersLink">
                
                </div>
              </div>
            </div>
          </div>
          <div className="followingContainer"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
