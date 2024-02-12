const getAllUsers = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    console.log(response.data.users);
  } catch (error) {
    console.log(error);
  }
};
getAllUsers();
