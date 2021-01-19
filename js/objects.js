// console.log("hello");

// création des objects
var name ="hatem";

var user0 = {
    firstName: name,
    lastName:"dagbouj",
    age: 19,
    typeOfAccount: "admin",
    adresse : {
        city: "Tunis",
        zip: 1002,
        country: "Tunisia"
    },
    posts : [
        {
            id: 0,
            title:"pub 0",
            content:"content 0"
        },
        {
            id: 1,
            title:"pub 1",
            content:"content 1"
        },
        {
            id: 2,
            title:"pub 2",
            content:"content 2"
        },
        {
            id: 3,
            title:"pub 3",
            content:"content 3"
        },
    ]
};

// 2éme manière pour créer les objets
var user1 = new Object();
user1.firstName = "ahmed";
user1.lastName = "ben ali";
user1.age = 20;
user1.adresse = {
    city: "Tunis",
    zip: 1002,
    country: "Tunisia"
};
user1.posts = [
    {
        id: 0,
        title:"pub 0",
        content:"content 0"
    },
    {
        id: 1,
        title:"pub 1",
        content:"content 1"
    },
    {
        id: 2,
        title:"pub 2",
        content:"content 2"
    },
    {
        id: 3,
        title:"pub 3",
        content:"content 3"
    },
];

// var users = [ user0, user1];
// console.log(users);

// modifier l'age de chaque user
var newName = "ali"
user0.firstName = newName;
user0.age = 20;
user0.lastName = "new last name";
user0.adresse.zip = 2030;
user0.adresse.country= "new county";

// delete firstname 
delete user0.firstName;

// ajouter firstname
user0.firstName = "Ahmed";

var user2 = user0;

console.log(user2);