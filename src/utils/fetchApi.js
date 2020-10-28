function fetchService(endpoint) {
  return (nameService) => {
    const url = `${endpoint}/${nameService}`;

    return {
      sendData: async (
        values,
        config = {
          token: "any_token",
        }
      ) => {
        try {
          const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
            ...config,
          });

          return await response.json();
        } catch (error) {
          return {
            status: 500,
            message: "Algo anda mal",
            detail: error,
          };
        }
      },
    };
  };
}

export default fetchService;
