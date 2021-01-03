// Variables
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Config for fetch request
const config = {
    headers: {
        Accept: 'application/json',
    },
};

// Function: Get joke
const generateJoke = async () => {
    // fetch from api
    const response = await fetch('https://icanhazdadjoke.com', config);
    // data
    const data = await response.json();
    // update UI
    jokeEl.innerHTML = data.joke;
};

// Event Listener: Get a new joke on button click
jokeBtn.addEventListener('click', generateJoke);

// Get 1st joke on page load
generateJoke();
