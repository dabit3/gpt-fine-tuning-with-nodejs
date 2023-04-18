import { openai } from './api.js'
import readline from 'readline';

async function createCompletion(prompt) {
  try {
    const response = await openai.createCompletion({
      model: 'davinci',
      prompt: prompt,
      max_tokens: 200
    })
    if (response.data) {
      console.log('choices: ', response.data.choices[0].text)
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your prompt? ', (answer) => {
  createCompletion(answer)
  rl.close();
});


