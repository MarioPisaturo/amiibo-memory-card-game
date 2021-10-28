# Amiibo memory card game - Code Challange 
[Cosa sono gli amiibo?](https://it.wikipedia.org/wiki/Amiibo)

[Cosa é un memory card game?](https://www.youtube.com/watch?v=2x6AGMnePQE&ab_channel=Rani%27sToysandGames)

### Code challange:
Realizza un gioco memory card con i personaggi amiboo con foto e nome presi in modo casuale. L'utente potrà scegliere di giocare con personaggi casuali di uno dei seguenti tre gameseries:

- Mario Sports Superstars
- Animal Crossing
- Pokemon

[Qui la documentazione dell'API](https://amiiboapi.com/docs/)


## Tech Stack utilizzato
- Typescript 
- React 17
- Sass 
- Redux && Redux-toolkit (modern redux approach - dismiss **redux-thunk** and **reselect**)
- React Router 
- Jest/Enzyme (for unit and integration testing)

## Development
-   Run the project in development mode
    `npm start`


### Compile

- Build web app 
`npm run build`



### Unit Testing
To add a unit test, simply create  `.spec.tsx` file anywhere in  `~/src`.  

    npm run test:jest          # Run all unit tests
    npm run test:jest:watch     # Run tests with file watch
    



## TESTS (partial - on some components for demo porpouse)

File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------------|---------|----------|---------|---------|-------------------
All files                |   95.02 |    80.39 |   78.94 |   95.03 |                   
 components/card         |     100 |      100 |     100 |     100 |                   
  card.tsx               |     100 |      100 |     100 |     100 |                   
 components/gameboard    |   97.91 |    86.66 |   81.81 |   96.96 |                   
  gameboard.tsx          |   97.91 |    86.66 |   81.81 |   96.96 | 49                
 redux/selectors         |     100 |      100 |     100 |     100 |                   
  amiibo-selectors.ts    |     100 |      100 |     100 |     100 |                   
 redux/slices            |   78.57 |      100 |      50 |   78.57 |                   
  amiibo-slice.ts        |   78.57 |      100 |      50 |   78.57 | 47,50-51          
 screens/game-completion |     100 |      100 |     100 |     100 |                   
  completion-screen.tsx  |     100 |      100 |     100 |     100 |                   
 screens/gameboard       |   92.59 |    78.57 |   66.66 |   95.65 |                   
  gameboard-screen.tsx   |   92.59 |    78.57 |   66.66 |   95.65 | 29                
 screens/homepage        |   76.92 |        0 |      50 |   83.33 |                   
  homepage.tsx           |   76.92 |        0 |      50 |   83.33 | 15-16             
 utils                   |     100 |       75 |     100 |     100 |                   
  amiibo.ts              |     100 |       50 |     100 |     100 | 6                 
  constants.ts           |     100 |      100 |     100 |     100 |                   
  deck-utils.ts          |     100 |      100 |     100 |     100 |                   
  game-selection.ts      |     100 |      100 |     100 |     100 |                   
  use-query.ts           |     100 |      100 |     100 |     100 |                   

```js
Test Suites: 8 passed, 8 total
Tests:       29 passed, 29 total
Snapshots:   2 passed, 2 total
Time:        8.028 s
```

## Game Preview 

![game2](https://user-images.githubusercontent.com/42066439/138911598-e26f487a-eff3-4787-ae61-179dc6aab2ca.gif)


