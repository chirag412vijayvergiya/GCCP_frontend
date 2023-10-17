export const getUserData = async () => {
  return await fetch("https://gccp-mpstme-shirpur-api.up.railway.app/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
