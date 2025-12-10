async function fetchData() {
  // TODO: fetch via async/await
  try {

    // take note of the prepended keyword await
    const response = await fetch('https://reqres.in/api/unknown', {
      headers: { 'x-api-key': API_KEY }
    });

    // handle errors gracefully
    if (response.status === 403)
      throw new Error(`Permission denied.`);
    else if (!response.ok)
      throw new Error(`Network response is not ok.`);

    // take note of the prepended keyword await
    const result = await response.json();
    console.log(result);

  } catch (error) {
    // manage the error message incl. those custom ones
    console.log(error.message);
  }
}
fetchData();