// alert('Welcome to my website')

function fetchingMovieData() {
    const API_Key = "274c50ba75fcdc7e7b6b3b17440ddbd9";
    const API_access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzRjNTBiYTc1ZmNkYzdlN2I2YjNiMTc0NDBkZGJkOSIsInN1YiI6IjY1NWUzMjM4ZmFiM2ZhMDEzODdhOTA4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N_xfw84jfIFWrYnXPqBlqSd1lk7QFQhplMDeE1fXU3U";
    let endpointURL = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_access_token}`
        }
    };

    fetch(endpointURL, options)
        .then(response => response.json()) // Responce from the API
        .then(data => DisplayData(data)) // The result data
        .catch(err => console.error(err));
}

function DisplayData(data) {
    //fisrt see all data...
    // console.log(data);

    //2step. easier to read...
           const movies = data.results;
    //       console.log(movies[0].title);

    //Dsiplay movies in html...
    // Get a reference to the "myText" div element
    const myTextDiv = document.getElementById("myText");

    // Iterate over the movies array and update the content of the div
    movies.forEach((movie) => {
        // Use a template literal to create the paragraph element with movie title
        const paragraph = document.createElement("p");
        paragraph.textContent = `Movie Title: ${movie.title}`;

        // Append the paragraph element to the "myText" div
        myTextDiv.appendChild(paragraph);

    });

    // console.log(data.results[0].title); // shortcut. harder to read...

    //display all titles. using for each. is preffered way! it is descriptive.. go to readMe. for more info...
    //  movies.forEach(movie => {
    //     console.log(movie.title);            
    //  });

    //alrernatitive map.
    //  console.log(movies.map(movie => movie.title));

}


fetchingMovieData();

