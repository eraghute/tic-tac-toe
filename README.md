# Tic-Tac-Toe

A simple two-player Tic-Tac-Toe game built with React and TypeScript. The project focuses on the fundamentals of building an interactive React application, managing component state, and passing data and event handlers between components.

## Features

- Play a two-player game on a 3 × 3 board.
- Alternate turns between X and O.
- Detect and display the winner when a player completes a row, column, or diagonal.
- Prevent players from selecting an occupied square or continuing after a winner is declared.
- Review previous moves and jump back to an earlier point in the game.

## Built with

- React 19
- TypeScript
- Vite
- CSS

## Getting started

### Prerequisites

- Node.js
- npm

### Install and run locally

```bash
git clone https://github.com/eraghute/tic-tac-toe.git
cd tic-tac-toe
npm install
npm run dev
```

Open the local development URL printed in your terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Run TypeScript checks and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## React concepts explored

- Functional components and reusable UI components
- Props for passing values and event handlers
- State management with the `useState` Hook
- Handling user interactions with click events
- Rendering lists of moves
- Updating arrays immutably
- Conditional rendering and winner calculation

## Project structure

```text
src/
├── App.tsx       # Game, board, square components and game logic
├── App.css       # Component styles
├── index.css     # Global and game styles
└── main.tsx      # Application entry point
```

## Project status

This is a learning project based on the core Tic-Tac-Toe exercise from the React documentation, with a focus on understanding React component composition, state updates, and time-travel through move history.
