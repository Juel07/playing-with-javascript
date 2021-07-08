///////////////////////////// Ex 1
console.log(1);
document.addEventListener('click', (clickEvent) => {
    console.log(3);
    console.log("The click event:", clickEvent);
});
console.log(2);


/////////////////////////// Ex 2
console.log(1);
fetch("https://async-workshops-api.herokuapp.com/people")
    .then(response => {
        console.log(3);
        return response.json();
    })
    .then(peopleResponse => {
        console.log("People response:", peopleResponse);
        console.log(4);
    })
console.log(2)

////////////////////////// Ex 3
console.log(1);
let getReturnValue1 = fetch("https://async-workshops-api.herokuapp.com/people")
    .then(response => {
        console.log(3);
        return response.json();
    })
console.log("get return value 1:", getReturnValue1);

let getReturnValue2 = getReturnValue1.then(peopleResponse => {
    console.log(4);
    return peopleResponse;
})
console.log("get return value 2:", getReturnValue2);
console.log(2);

////////////////////////// Ex 4
console.log(1);
fetch("https://async-workshops-api.herokuapp.com/people")
    .then(response => {
        console.log(3);
        return response.json();
    })
    .then(peopleResponse => {
        console.log(4);
        peopleResponse.forEach((person) => console.log(person.name));
        console.log(5);
    })
console.log(2);

////////////////////////// Ex 5
console.log(1);

setTimeout(() => {
    console.log("~10 milliseconds later:", 5);
}, 0)
console.log(2);

setTimeout(() => {
    console.log("1 second later:", 6);
}, 1000)
console.log(3);
