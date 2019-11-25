# Project
This project was done to practise front-end and back-end. It shows the next departures with bus or train towards three different neighbourhoods around a city in northern Sweden. The departures will update each minute.


## Prerequisite
To run this program you need to have [node js](https://nodejs.org/) installed globally or in the folder where you put this project. 


## Setting Up
From the terminal: go to the folder where you put this project. Run 
`npm install`


## Run
From the terminal in the folder where you put this project do the following: 
- Start the app with the following command
`npm run start`
- Open [localhost](http://localhost:3000/) with port 3000.


### Please note
As of now the API that I'm using has a limit of 10 000 requests per month. This app will use three requests (one for each departure) each minute which means that it will be possible that the app doesn't work after a few days usage because of this limit.


#### Version History
1.0.0
First runnable version. 
