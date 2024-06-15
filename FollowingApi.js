const FollowingApi = async () => {
  const followingResponse = await fetch(
    "https://api.github.com/users/miriammugure/following",
  );
  if (!followingResponse.ok) {
    return "Network response was not okay";
  }
  return followingResponse.json();
};
export default FollowingApi;
