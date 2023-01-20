# Warning Watch Advisory eBOARD

A interactive web application that gives you access to the current weather on any device

## WHY?

The current electronic weather warning status board currently runs on a laptop that is broadcasted on a rotary. The goal is to develop a responsive web application to replace the current outdated tool and can provide desired status data directly to launch providers. Looking for supra coders to contribute by designing and building new applications.

At a base level, operators (admin) should be able to enter weather statuses indicating the conditions at launch sites (currently, wind and lightning), while the user needs to be able to view the conditions at launch sites. (Think: List of values displayed via table on the screen, but with dynamism.)

## Technologies

- React
- MUI Library

## What Our Web Application Does

- It is accessible from any device
- It allows admins to make real time updates to weather status that end users have instant access to.
- Users have the ability to customize what is displayed on the screen
- There are dark and light mode features and also the common accessiblity modes for people don't see certain colors too well.

## Demo

https://youtu.be/jNspD6EoXCo

# Installation

To run this project install locally using npm

```bash
  npm install
  npm start
```

## To Build Docker Container for Server

- Run in Terminal: docker build -t nameOfChoice
- Spin up Container: docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \
  -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

## Connect to Container You Just Created

- Type docker ps -a : to view the images running
- docker exec -it <PSQL-Container-ID(first 3)> bash

### Access Container/Create Database

- psql -U _postgres_
- CREATE DATABASE weather;
- \c weather
- in VSCODE terminal: npx knex migrate:latest
- npx knex seed:run