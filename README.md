# UniSwipe Frontend Application

## Getting Started

Make sure that you have node installed and npm package manager. Then cd into the root directory of the repository and run:
```bash
npm install .
```
After this has run, to start the server run:
```bash
npm run dev
```

## Connecting to the Model API

To connect the model API you just need to set an environment variable for where you are running the model. The model repository is available [here](https://github.com/kalxed/uniswipebackend) for download.

In the root directory of the repository, navigate to the .env.local file. Replace the value of the variable with the address and port of where your server is running.

Now, if rerun your website with the environment variable properly populated, you should be retrieving schools from the model and able to swipe on the site.