function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=1328&limit=5') // (?) is a query parameter
        .then((response) => {    // obtain the response and return the json format
            return response.json();
        })
        .then((data) => {        // work on the json response

            // if fetched data goes beyond 1328 characters
            const returnedCharacters = data.results;
            if(!returnedCharacters.length)
                throw new Error("No characters found")

            console.log(data);
        })
        .catch((error) => {      // handle errros
            console.error(error.message);
        });
}

fetchData();