# Internship Hub

Internship Hub is a job board where students can find internships from LinkedIn. It also provides links to articles that provide career advice.

Users can search for internships in their selected fields and find resources that will aid their internship search. Users can also log in with their Google or Github accounts.

The API we used in developing this app is a [LinkedIn Web Scraper](https://github.com/TildaDares/internships-web-scraper) we built as a part of MLH Orientation Hackathon.

<img width="1280" alt="Internship Hub" src="https://user-images.githubusercontent.com/63427719/172181492-c43daa8e-434d-4c7f-91bf-0f0d2f6d27ee.png%22%3E

## Development

To run this project on your local machine, do the following:

- Run git clone https://github.com/greatsage-raphael/internship-hub.git to clone this repo.
- Run cd internship-hub/ to navigate into the project folder.

This repo has two parts - the backend for authentication and the client side for the frontend. To login with Google or Github, you have to run both the backend and the frontend.

To run the client side on your local machine, do the following:

- Run cd client to navigate into the client folder.
- Run npm i to install all the packages.
- Start the server by running yarn start. This command will automatically run your app on http://localhost:3000/

To run the backend for authentication, do the following:

- Open up a new terminal window and navigate into the project folder
- Run cd backend to navigate into the backend folder
- Start the server by running npm run start.
- You should be able to log in with your Google and Github accounts now! (edited)
