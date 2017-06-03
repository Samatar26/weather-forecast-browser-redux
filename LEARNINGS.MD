### Middleware

![action creator cycle](https://cloud.githubusercontent.com/assets/22747985/26755621/b7ec551a-4888-11e7-8c3a-a393c7d19688.png)

There's an additional step in the action creator cycle, called middleware. Middlewares are functions that take an action and depending on the action type, action's payload or any number of factors, it can decide to let the action pass through, manipulate it, etc. (They can block, modify or let through actions) Before it reaches the reducer. They stop any action and inspect it, you could refer them as a doorkeeper/bouncer. The question is why would you want to modify an action? They alllow you to do very interesting things by intercepting these actions. You can have many different steps of middlewares in our application.

With our action creators, we always have to return a type and payload. This time round, which is the convention, we'll assign the string 'FETCH_WEATHER' to the variable FETCH_WEATHER and we'll export this variable. Then instead of using the string in the type, we'll use the variable. The reason for doing this, is so that we can keep our action types consistent between our action creators and our reducers. In our reducer we will check the action.type with a switch statement and we'll check for the string 'FETCH_WEATHER'. Imagine someone comes along and misspells the action type, it would be a massive bug. Therefore it's good to have a single source of truth where both the action creator and reducer are refferring to the same place and it's also easier to make changes this way.

```js
const API_KEY = 'afe224f25cdf028a03b1b75949c0d9cc';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(){
  return{
    type: FETCH_WEATHER
  }
}
```
