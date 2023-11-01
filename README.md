## Project Structure

```
/
├── .github/workflows
|   └── deploy.yml
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
|   |   ├── Board.jsx
|   |   ├── Popup.jsx
|   |   ├── ScoreBoard.jsx
│   │   └── Square.jsx
│   ├── App.jsx
│   ├── calculateWinner.js
│   ├── main.jsx
│   └── index.css
└── node_moduels
```

## Installation

All the commands below are run from the root of the project, from a terminal:
|Command|Action|
|:-|:-|
|yarn |Installs dependencies|
|yarn dev| Starts local server at localhost:5173|
|yarn build | Build your production site to ./dist/
|yarn preview | Preview your build locally, before deploying|
