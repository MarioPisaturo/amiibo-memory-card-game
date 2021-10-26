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
- React 
- Sass 
- Redux && Redux-toolkit (modern redux approach - dismiss redux-thunk and reselect)
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


File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |   84.55 |       88 |   78.26 |    86.2 |                   
 components/card      |     100 |      100 |     100 |     100 |                   
  card.tsx            |     100 |      100 |     100 |     100 |                   
 components/gameboard |   97.91 |    86.66 |   81.81 |   96.96 |                   
  gameboard.tsx       |   97.91 |    86.66 |   81.81 |   96.96 | 49                
 redux/slices         |   78.57 |      100 |      50 |   78.57 |                   
  amiibo-slice.ts     |   78.57 |      100 |      50 |   78.57 | 47,50-51          
 utils                |     100 |      100 |     100 |     100 |                   
  deck-utils.ts       |     100 |      100 |     100 |     100 |      
  
  
## Game Preview 

![game2](https://user-images.githubusercontent.com/42066439/138911598-e26f487a-eff3-4787-ae61-179dc6aab2ca.gif)


