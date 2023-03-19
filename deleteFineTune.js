import { openai } from './api.js'

async function deleteFineTune() {
  try {
    const response = await openai.deleteModel('curie:ft-personal-2023-03-18-18-02-20')
    console.log('response: ', response)
  } catch (err) {
    console.log('err: ', err)
  }
}

deleteFineTune()