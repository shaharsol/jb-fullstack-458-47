const answer = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugiat! Doloribus ipsum quos inventore expedita. Enim, earum consectetur distinctio dignissimos fugit ipsum voluptas necessitatibus, molestiae, assumenda culpa ea quis voluptatibus!';

const displayChatGPTAnswer = async () => {
    // const words = answer.split(' ');
    // console.log(words);
    // for (let i=0; i < words.length; i++ ) {
    //     document.getElementById('answer').innerHTML += `${words[i]} `; 
    //     await delay(100);
    // }

    // for/of loop
    const array = [0, 1, 34, 38];
    for (number of array) {
        console.log(number)
    }

    // in javascript, a string is an array of characters
    for (bar of answer) {
        document.getElementById('answer').innerHTML += `${bar}`; 
        await delay(100);
    }

    // this won't work...
    // words.forEach(async word => {
    //     document.getElementById('answer').innerHTML += `${words[i]} `; 
    //     await delay(100);
    // })
    
    // document.getElementById('answer').innerHTML = answer;
}

const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

