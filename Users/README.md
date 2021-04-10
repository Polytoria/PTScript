### User API!

The user API is a really good way to get and handle data from the polytoria API.

#### getFromUsername()
**Static**
This function returns user information through the Username.
```js
const User = require('@polytoria/users');

User.getFromUsername('NodeJS').then((result)=>{
    console.log(result.Username); // NodeJS
    console.log(result.Rank); // ADMINISTRATOR
    console.log(result.Description) // NodeJS long ass description lol
})
```
#### getFriends();
Function to gather an array of friends of the user.
```js
const Polytoria = new User(1);
const PolyFriends = Polytoria.getFriends().then((friends)=>{
    console.log(friends); // [{username: blah blah}, {username: willemstinky}] etc....
})
```

#### getUserData();
A function to get all user data.
```js
const Polytoria = new User(1);
const PolyData = Polytoria.getUserData().then((Data)=>{
    console.log(Data.Username); // Polytoria
})
```
