import React, { useEffect } from "react";
import { MdOutlineLink } from "react-icons/md";
import useFollowingStore from "../../store/Following";

function Following() {
  const { people_following, isLoading, error, fetchFollowing } =
    useFollowingStore((state) => ({
      isLoading: state.isLoading,
      people_following: state.people_following,
      error: state.error,
      fetchFollowing: state.fetchFollowing,
    }));

  useEffect(() => {
    fetchFollowing();
  }, [fetchFollowing]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>There is an error: {error}</div>;

  return (
    <div>
      <ul className="ListContainerFollowers">
        {Array.isArray(people_following) && people_following.length > 0 ? (
          people_following.map(({ id, login, avatar_url, html_url }) => (
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
                    <a
                      href={html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
          <div>No following found</div>
        )}
      </ul>
    </div>
  );
}

export default Following;
