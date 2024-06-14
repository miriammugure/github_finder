import React from "react";
import { PiMapPinFill } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RiGitRepositoryFill } from "react-icons/ri";
import useProfileStore from "../../store/profile";
import { useEffect } from "react";
function Person() {
  const { profile, isLoading, fetchData, error } = useProfileStore((state) => ({
    profile: state.profile,
    isLoading: state.isLoading,
    error: state.error,
    fetchData: state.fetchData,
  }));

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      {/* {isLoading && <div>loading please wait<div/>}
      {error &&<div>there is an error<div/>} */}
      <div className="person">
        <div className="profileImage">
          <img src={profile.avatar_url} alt="" />
        </div>
        <div className="github">
          <div className="name">
            {" "}
            <p>{profile.name}</p>
          </div>
          <p>{profile.login}</p>
          <div className="bio">
            {" "}
            <p>{profile.bio}</p>
          </div>
        </div>

        <div className="redirect">
          <BsBoxArrowUpRight />

          <a href={profile.html_url} target="blank">
            view on github
          </a>
        </div>
        <div className="location">
          <PiMapPinFill />
          {profile.location ? (
            <p>{profile.location}</p>
          ) : (
            <p>Location not provided</p>
          )}
        </div>
        <div className="repo">
          <RiGitRepositoryFill />
          {profile.public_repos ? (
            <p>{profile.public_repos} repositories</p>
          ) : (
            <p>no public repositories</p>
          )}
          {/* <p>{profile.public_repos} repositories</p> */}
        </div>
        <div className="followers">
          <IoIosPeople />
          <p>{profile.followers} followers</p>
        </div>
        <div className="following">
          <IoIosPeople />
          <p>{profile.following} following</p>
        </div>
      </div>
    </div>
  );
}

export default Person;
