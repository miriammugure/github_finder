const UserApi = async () => {
  const response = await fetch("https://api.github.com/users/miriammugure");
  if (!response.ok) {
    return "Network response was not ok";
  }
  return response.json();
};

export default UserApi;
