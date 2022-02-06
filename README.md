# Users In London

<img src="https://images.pexels.com/photos/374815/pexels-photo-374815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="270">

### Description

This small NodeJs/Express API calls https://bpdts-test-app.herokuapp.com/ and returns people who are listed as either living in London, or whose current coordinates are within 50 miles of London

#### Getting started

```
> git clone https://github.com/TonyGrimaldi/users-in-london.git
> cd users-in-london
> npm install
> npm start
```

#### Api docs

**/listed**

GET users listed as living in London.

```
e.g. curl -X GET "http://localhost:3000/listed" -H "accept: application/json"
```

**/gps50miles**

GET users whose current coordinates are within 50 miles of London.

```
e.g. curl -X GET "http://localhost:3000/gps50miles" -H "accept: application/json"
```

#### Unit Tests

```
> npm run test
```

#### Coverage

```
> npm run coverage
```
