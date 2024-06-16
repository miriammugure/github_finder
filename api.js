const fetchAllData = async (username) => {
  const followersResponse = await fetch(
    `https://api.github.com/users/${username}/followers`,
  );

  const followingResponse = await fetch(
    `https://api.github.com/users/${username}/following`,
  );
  const reposResponse = await fetch(
    `https://api.github.com/users/${username}/repos`,
  );
  const profileResponse = await fetch(
    `https://api.github.com/users/${username}`,
  );

  if (
    !followersResponse.ok ||
    !followingResponse.ok ||
    !reposResponse.ok ||
    !profileResponse.ok
  ) {
    throw new Error("Network response was not ok");
  }

  const [followers, following, repos, profile] = await Promise.all([
    followersResponse.json(),
    followingResponse.json(),
    reposResponse.json(),
    profileResponse.json(),
  ]);

  return { followers, following, repos, profile };
};
export default fetchAllData;
