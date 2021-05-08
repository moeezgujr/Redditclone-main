export const fetchFeeds = (url) => {debugger
  return new Promise((resolve, reject) => {
    return fetch(url).then(
      (response) => {
        if (response.ok) {debugger
          response.json().then((data) => {
            resolve(data);
          });
        } else {
          reject(new Error("error"));
        }
      },
      (error) => {
        reject(new Error(error.message));
      }
    );
  });
};
