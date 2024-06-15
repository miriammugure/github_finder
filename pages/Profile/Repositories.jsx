import React from "react";
import { FaCodeFork } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import useRepoStore from "../../store/ReposApi";
import { useEffect } from "react";
function Repositories() {
  const { repository, error, isLoading, fetchRepos } = useRepoStore(
    (state) => ({
      repository: state.repository,
      isLoading: state.isLoading,
      error: state.error,
      fetchRepos: state.fetchRepos,
    }),
  );

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);
  if (error) return <div>Error:{error}</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <ul>
        {repository.map(
          ({ id, name, forks_count, stargazers_count, description }) => (
            <li className="listrepos" key={id}>
              {/* {name}
              {forks_count},{stargazers_count},{description} */}
              <div className="repocard">
                <div className="top">
                  <div className="reponame">
                    {/* <RiGitRepositoryFill /> */}
                    <p>{name}</p>
                  </div>
                  <div className="repodetails">
                    {description && description ? (
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
                      <p>{stargazers_count}stars</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default Repositories;
