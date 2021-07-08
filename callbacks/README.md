### Callbacks in JS

Follow the process for understanding the flow of control.

### Question 1

1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, read and experiment with the code to figure out why.  Correct the `console.log`s.

```js
document.addEventListener('click', (clickEvent) => {
  console.log("The click event:", clickEvent);
});
```

### Question 2

1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.
2. Explain what is happening in the code to your pair partner(s). What is the input parameter into the callback and where does it come from?

```js
fetch("https://async-workshops-api.herokuapp.com/people")
  .then(response => response.json())
  .then(peopleResponse => {
    console.log("People response:", peopleResponse)
  })
```

### Question 3

1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.

2. What value does `getReturnValue` have? What value does `peopleResponse` have? Why are they different?

```js
let getReturnValue = fetch("https://async-workshops-api.herokuapp.com/people")
  .then(response => response.json())
  .then(peopleResponse => {
    return peopleResponse
  })
```

### Question 4

1. `console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.
2. Where do the values for `person` come from?

```js
fetch("https://async-workshops-api.herokuapp.com/people")
  .then(response => response.json())
  .then(peopleResponse => {
    peopleResponse.forEach((person) => console.log(person.name))
  })
```

### Question 5
`console.log` a number in each part of the code which represents your guess as to what order the code will be executed in.  Run the code.  The numbers should be logged in order: 1, 2, 3, 4... If they aren't, follow the flow of control to figure out why.  Correct the `console.log`s.

```js
setTimeout(() => {
  console.log("Hi there!");
}, 0)
```