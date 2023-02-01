


/*var topic = "HTML, CSS, Git, JavaScript";

console.log(topic);

/*if (0) {

    console.log("I'm 0!")
} else if (null) {
    console.log("I'm null!")
} else if (true) {
    console.log("I'm true!")
}

var topic = "HTML";

if (topic === 'HTML') {
    console.log("Let's study HTML!");
} else if (topic === 'CSS') {
    console.log("Let's study CSS!");
} else if (topic === 'Git') {
    console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
} else {
    console.log('Please try again!');
}

var shape = ["triangle", "circle", "rectangle", "pentagon"]
for (var x = 0; x < shape.length; x++) {
    console.log(shape[x]);

}


var topic = ["HTML", "JAVASCRIPT", "CSS", "GIT"]
for (var z = 0; z < topic.length; z++) {
    console.log(topic[z]);

}

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}
console.log("Here are the topics which we learned in prework");
listTopics();

console.log("Which topics do you want to study first?");

function selectTopic() {
    if (topics[0] === 'HTML') {
        console.log("Let's study HTML!");
    } else if (topics[1] === 'CSS') {
        console.log("Let's study CSS!");
    } else if (topics[2] === 'Git') {
        console.log("Let's study Git!");
    } else if (topics[3] === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}
selectTopic();
*/
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();