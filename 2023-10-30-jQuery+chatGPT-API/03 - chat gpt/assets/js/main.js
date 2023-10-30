"use strict";

(() => {

    const gptForm = document.getElementById('gptForm');
    gptForm.addEventListener('submit', async event => {
        event.preventDefault();

        // get values from form inputs
        const amount = document.getElementById('amount').value;
        const language = document.getElementById('language').value;
        const level = document.getElementById('level').value;

        console.log({amount, language, level})

        // build prompt
        const prompt = buildPrompt(amount, language, level);
        console.log(prompt);

        // invoke gpt api
        const gptResponse = await askGpt(prompt);
        console.log(gptResponse.choices[0].text);

        // display questionnaire
        displayQuestionnaire(gptResponse.choices[0].text);
    })


    const buildPrompt = (amount, language, level) => {
        return `
        Please provide ${amount} ${language} job interview questions and answers, in ${level} level
        please return the data in JSON, in the following format:
        [{"id": "some random id", "question":"question 1", "answer":"answer 1"}, {"id": "some random id", "question":"question 2", "answer":"answer 2"}]
        `
    }

    const askGpt = async (prompt) => {
        const apiKey = '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';
        const url = 'https://api.openai.com/v1/completions';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}` 
            },
            body: JSON.stringify({
                prompt,
                model: 'gpt-3.5-turbo-instruct',
                max_tokens: 2000
            })
        }

        const response = await fetch(url, options);
        const json = await response.json();

        return json;
    }

    const displayQuestionnaire = (questionnaire) => {
        const data = JSON.parse(questionnaire);
        console.log(data)

        const html = data.map(qna => `
            <div class="question" onclick="javascript:document.getElementById(\"${qna.id}\").style.height = '30px';">${qna.question}</div>
            <div class="answer" id="${qna.id}">${qna.answer}</div>
        `).reduce((acumulator, current) => acumulator + current, '');

        document.getElementById('gptResults').innerHTML = html;
    }

})();