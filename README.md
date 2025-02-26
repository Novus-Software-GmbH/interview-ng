# Myproject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10 and uses the Material UI component library

Run on localhost:4200: `npm run start` 
Lint: `npm run lint`
Test: `npm run test`

# Mock backend

A simple mock server with two endpoints is built in:

Run it using `npm run mock:server`. 

You can now open `http://localhost:3000/api/building` and `http://localhost:3000/api/flat`

which will return a simple JSON array with 2 buildings / 3 flats

# Where we start

We have a main page with a menu on the left (Home, Buildings, Flats) and a content area on the right. 

"Home" displays a static component (HomeComponent)
"Buildings" displays a list (material UI table) with the buildings fetched from the mock backend (see above)
"Flats" does not do anything (yet)

# Your tasks

1. Have a look at the AppComponent (ts, html) -> would you change anything? 
2. Have a look at the BuildingList component. Would you change anything?
3. Show the list of flats from `http://localhost:3000/api/flat` when clicking on "Flats" in the main menu. Optional: add sorting and pagination.
4. Add a possibility for editing an existing flat and POST'ing it to `http://localhost:3000/api/flat` (the endpoint is not implemented in the mock-server and you need not implement it. Just send the request.)
5. The form should have basic validation (flat area should be a positive number; the flat must belong to a building)
6. Add authentication to all requests you send to the mock server (Authorization: 'Bearer xyz') (auth is not implemented in the mock server and you need not implement it. Just add the header to your requests)
7. Handle all error responses from the mock backend (4xx, 5xx), e.g. by logging them to the console

Using Google / AI / copy-pasting stuff from this or other projects is allowed and encouraged. Just get the job done :)
