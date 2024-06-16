import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PiMapPinFill } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaCodeFork } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdOutlineLink } from "react-icons/md";
import Title from "../../components/Title/Title";
import useStore from "../../store/store";
import "./Profile.css";

function Profile() {
  const { username } = useParams();

  const {
    profile,
    repository,
    people_followers,
    people_following,
    isLoading,
    error,
    fetchData,
  } = useStore((state) => ({
    profile: state.profile,
    repository: state.repository,
    people_followers: state.people_followers,
    people_following: state.people_following,
    isLoading: state.isLoading,
    error: state.error,
    fetchData: state.fetchData,
  }));

  const handleSearch = (e, username) => {
    e.preventDefault();
    if (username) {
      fetchData(username);
    }
  };

  useEffect(() => {
    fetchData(username);
  }, [fetchData]);

  const defaultUsername = "miriammugure";
  useEffect(() => {
    fetchData(defaultUsername);
  }, [fetchData]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="profileContainer">
        <div className="profile">
          <div className="person">
            <div className="profileImage">
              <img src={profile.avatar_url} alt={`image of ${profile.login}`} />
            </div>
            <div className="github">
              <div className="name">
                <p>{profile.name}</p>
              </div>
              <p>{profile.login}</p>
              <div className="bio">
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

        <div className="details">
          <div className="repositoriesContainer">
            <Title titlename="repositories" />
            <div className="repositoriesCard">
              <ul>
                {repository.map(
                  ({
                    id,
                    name,
                    forks_count,
                    stargazers_count,
                    description,
                  }) => (
                    <li className="listrepos" key={id}>
                      <div className="repocard">
                        <div className="top">
                          <div className="reponame">
                            <p>{name}</p>
                          </div>
                          <div className="repodetails">
                            {description ? (
                              <p>{description}</p>
                            ) : (
                              <p>no repository description</p>
                            )}
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="repominor">
                            <div className="forks">
                              <FaCodeFork />
                              <p>{forks_count} forks</p>
                            </div>
                            <div className="star">
                              <FaRegStar />
                              <p>{stargazers_count} stars</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="followersContainer">
            <Title titlename="followers" />
            <div className="ActualContainer">
              <ul className="ListContainerFollowers">
                {people_followers.length > 0 ? (
                  people_followers.map(({ id, login, avatar_url }) => (
                    <li className="followersList" key={id}>
                      <div className="followersCard">
                        <div className="followersImage">
                          <img src={avatar_url} alt={`image of ${login}`} />
                        </div>
                        <div className="followersName">
                          <p>{login}</p>
                        </div>
                        <div className="followersLink">
                          <div className="linkDetails">
                            <button
                              className="followers-btn"
                              onClick={(e) => handleSearch(e, login)}
                            >
                              <MdOutlineLink />
                              <p>view {login}</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div>No followers found</div>
                )}
              </ul>
            </div>
          </div>

          <div className="followersContainer">
            <Title titlename="following" />
            <div className="ActualContainer">
              <ul className="ListContainerFollowers">
                {people_following.length > 0 ? (
                  people_following.map(({ id, login, avatar_url }) => (
                    <li className="followersList" key={id}>
                      <div className="followersCard">
                        <div className="followersImage">
                          <img src={avatar_url} alt={`image of ${login}`} />
                        </div>
                        <div className="followersName">
                          <p>{login}</p>
                        </div>
                        <div className="followersLink">
                          <div className="linkDetails">
                            <button
                              className="followers-btn"
                              onClick={(e) => handleSearch(e, login)}
                            >
                              <MdOutlineLink />
                              <p>view {login}</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div>No following found</div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
