# Oddert Socket Examples

Originaly intended for personal referential use, these are a seriese of micro projects demonstrating diffirent things you can do with Socket.io

## Live Demo
[https://oddert-chess-game-1.glitch.me/](https://oddert-chess-game-1.glitch.me/)

## Micro Porjects

# Basic
- Connects a client and allows the client to ping the server with a random number

# Chat Redux
- Tracks a list of online users and allows all users to broadcast messages to each other. Built with react / redux

# One Channel Sign In
- Demonstrates signing in users to a room and using contiditional logic with Socket.io

# Multiple Channels
- Same functionality as Chat Redux but users chat in individual rooms

# Reeact
- A basic component-based react chat room to demonstrate react integration

# Redux
- A basic component-based react chat room to demonstrate react integration with redux

# Two Rooms Bad
- Subscribes the user to multiple rooms simultaniously. Demonstrates the io.of().on() pattern

# Two Rooms Good
- Subscribes the user to multiple rooms simultaniously but spperates the route for each room. Demonstrates the io.of().on() pattern

# Using Imported Routes
- Defines the handlers for specific events in a seperate file imported with common.js

# (TODO) Using Imported Express Routes


## Scripts
| script | command                                        | action
|--------|------------------------------------------------|------------------------------------------------|
| start  | node app.js                                    | runs the server                                |
| server | nodemon app.js                                 | runs the server with auto restart              |
| client | cd client && npm start                         | starts the development server for the client   |
| dev    | concurrently "npm run server" "npm run client" | run both the client and server for development |