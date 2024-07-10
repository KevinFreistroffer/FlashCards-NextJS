export const isAuthorized = async () => {
  try {
    if (typeof window !== "undefined") {
      const storedJWT = localStorage.getItem("jwtToken");
      console.log("storedJWT", storedJWT);

      if (storedJWT !== null) {
        const response = await fetch(
          "http://localhost:3000/auth/authenticate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: storedJWT }),
          }
        );
        const json = await response.json();

        if (response.status === 200 && json.success) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error("isAuthorized", error);
    return false;
  }

  return false;
};
