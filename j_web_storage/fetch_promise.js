function fetchData() {
  // TODO: fetch via promise
  fetch('https://reqres.in/api/unknown', {
    headers: { 'x-api-key': 'reqres_12c9cc65011442af921bd9a4cb2f875f' }
  }).then((response) => {
    // if the response has an issue, throw a custom response (gracefully)
    if (!response.status === 403)
      throw new Error(`Permission denied.`);
    else if (!response.ok)
      throw new Error(`Network response is not ok.`);

    // otherwise return the presonse in JSON format
    return response.json();
  })
    .then((result) => {
      // logs out the data from the fetch request
      console.log(result.data);
    })
    .catch((error) => {
      // catch any error that occurs
      console.log(error);
    })
}

fetchData();