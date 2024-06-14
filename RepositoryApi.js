const RepositoryApi = async () => {
  const reposResponse = await fetch(
    "https://api.github.com/users/github/repos",
  );
  if (!reposResponse.ok) {
    return "Network repsonse was not okay";
  }
  return reposResponse.json();
};
export default RepositoryApi;
