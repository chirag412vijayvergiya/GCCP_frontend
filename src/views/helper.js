export const getUserData = async () => {
  return await fetch("http://localhost:4000/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
