## GPT Fine-Tuning using Node.js

This project show how to easily fine-tune a GPT data model.

### Prerequisites

To follow along with this tutorial, you’ll need to have the following installed on your machine:

- Python
- Node.js

You’ll also need an OpenAI API Key. You can get one at [https://openai.com](https://openai.com).

### Getting started

First, clone the repo and install the dependencies:

```sh
git clone https://github.com/dabit3/gpt-fine-tuning-with-nodejs.git

cd gpt-fine-tuning-with-nodejs

npm install # or yarn
```

Next, set the environment variable for your OpenAI API Key

```sh
export OPENAI_KEY="your-api-key"
```

### Running the app

First, upload the file with the example or custom data set to OpenAI:

```sh
node uploadFile.js
```

Next, use the File ID that is logged out to create a new fine tune based on davinci by updating the `training_file` in `createFineTune.js`.

Finally, create the fine tune:

```sh
node createFineTune.js
```

### Listing your Fine Tunes

Once the fine tune is created, it will take some time to process. We can get the status of the fine tune, as well as the model ID, by calling the listFineTunes API method.

```sh
node listFineTunes.js
```

### Testing it out

Now that the fine tune has processed and our. new model is ready, we can try it out.

Open createCompletion.js. Here, update the fine_tuned_model value with your model name.

Next, run the script:

```sh
node createCompletion.js
```