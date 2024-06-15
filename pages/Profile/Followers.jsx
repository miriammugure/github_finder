import React, { useEffect } from "react";
import { MdOutlineLink } from "react-icons/md";
import useFollowersStore from "../../store/followers";

function Followers() {
  const { people_followers, isLoading, error, fetchFollowers } =
    useFollowersStore((state) => ({
      isLoading: state.isLoading,
      people_followers: state.people_followers,
      error: state.error,
      fetchFollowers: state.fetchFollowers,
    }));

  useEffect(() => {
    fetchFollowers();
  }, [fetchFollowers]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>There is an error: {error}</div>;

  return (
    <div>
      <ul className="ListContainerFollowers">
        {Array.isArray(people_followers) && people_followers.length > 0 ? (
          people_followers.map(({ id, login, avatar_url, url }) => (
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
                    <a href={url} target="blank">
                      <button className="followers-btn">
                        <MdOutlineLink />
                        <p>view {login}</p>
                      </button>
                    </a>
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
  );
}

export default Followers;
