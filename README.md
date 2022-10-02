# media-lists-server

## Requirements

### .env file

This project requires a .env file to be created. the .env.example can be copied and contains all of the environment variables that are required to run out of the box. The PORT, MOVIE_KEY, SHOW_KEY, GAME_KEY, BOARD_GAME_CLIENT, MONGODB CONNECTION STRING, and BOOK_LIST_KEY should all be updated with your own keys and client values.

### mongodb

A noSql database will be needed. (Not currently used)

### [media-lists-client*] (https://github.com/aquisenberry/media-lists-client)

This project serves a the backend to the media-lists-client project. Not required, but recommended for best use.
server code for medialists website.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view routes in the browser.

### `npm test`

Have begun adding tests to the utils/mediaHelpers file as I move forward. Need to add tests to older features.
