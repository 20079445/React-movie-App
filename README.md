# react-movie-App
# Assignment 1 - ReactJS app.

Name: [John Murphy]

## Overview.

For this assignment we had to make a movie web app using TMDB api, our base deliverables was three new views and three new end points with a parameterized URL and it scaled up from there. I belive i have met nearly all the deliverables asked for. I could not get Firebase fully working and i also could not get into sessions and tokens but i did attempt to do so. However what you will find is a working app that displays movies and actors, allows them to be filtered and also click a more info button to as it states get more info on the movie or person you want.
I also got Responsive Ui on the homepage, The homepage will only work in a browser view and not on mobile.I also could not get the registration page and login page to link up, i believe i was close using the states from the registration page but i couldnt quite get there. However the pages work independantly of each other, you can register on the registration page and you can login on the login page with the accounts:
Username: user1
Password: pass1
Username: user2
Password: pass2

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

+ Feature 1:  Trending movies
+ Feature 2:  Popular people list
+ Feature 3:  Person details page
+ Feature 4:  A watchlist view for upcoming movies
+ Feature 5:  A login page
+ Feature 6:  Registration page
+ Feature 7:  Set up and connected to Firebase
+ Feature 8:  Responsive Ui on homepage 

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]
npm install firebase
npm install react-device-detect --save
npm install --save react-responsive

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list
+ Popular People =  movies\src\pages\peopleDetails
+ Person Details = movies\src\pages\actorDetailsPage
+ Trending Movies = movies\src\pages\trendingMovies
+ Upcoming Movies = movies\src\pages\upcoming
+ People Images = movies\src\pages\actorDetailsPage

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /movies/watchList - for the watchlist for upcoming movies
+ /person/:id - For the person details page
+ /movies/trendingMovies - for the trending movies page
+ /movies/peoplesDetails - for the popular people page
+ /movies/login - for the login page from the menu
+ /movies/signUp - for the registration page from the menu
+ /register - to get to the registration page from the login page
+ /login - to get to the login page from the registration page

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Learning about Firebase and the tokens, i couldnt get either to working but there were attempts made as will be clear in the code.
I also made alot of attempts to link the registration and login pages to store login details of people registering, again like with firebase and the tokens attempts were made but i couldnt get it to work.

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).
