const FollowersApi = async () => {
  const followersResponse = await fetch(
    "https://api.github.com/users/miriammugure/followers",
  );
  if (!followersResponse.ok) {
    return "Network response was not okay";
  }
  return followersResponse.json();
};
export default FollowersApi;
