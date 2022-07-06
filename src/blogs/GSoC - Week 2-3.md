# GSoC - Week 2-3

Hey everyone!
I hope none of you are experiencing any syntax errors in your lives. 

Let us consider this project as a extreme, dangerous and high-stakes top secret mission. (I have been watching Spy x Family, my bad.)

What does a mission require to be executed perfectly?

*~~"Think Mark, Think."~~*

You: "A solid plan?"

Me: "Bingo! You are a very smart person. ~~Lend me your brain~~"

## Understanding the Workflow

Working on a complex project, it is ideal to go over your plan of execution, about what are your impact areas, which particular functions, data models (if any) and flow of the program are you going to create or modify.

There is another approach to development which is choosing ***one*** feature to implement and then implement that repeat this again by choosing yet another feature. However, I particularly am not fond of this approach considering 2 things:

1. You cannot be sure of how long it would take to implement the whole project. Therefore you cannot set a deadline to your work.

2. Most of the complex projects and sometimes even the simpler projects have functions you write depend on another set of functions you write. The problem is created when you are required to go back and forth between these functions in order to make them support the new changes. With planning things before-hand, you'll be aware of the ***scope*** of that particular set of code.

## Deciding the Scope of the Project

The project is aimed at optimising the current Portalcasting codebase. Currently every subtask present within the pipe to predict the rodent population is performed in a sequential order. 

That basically means a subtask is required to wait before its previous task has completed execution. This is refered to as ***Synchronous*** programming. 

This brings about a problem, an embarassing one at that. It is called the **embarassingly parallel problem**, which entails that very little effort is needed to seperate the said problem into seperate and independent part. 

Through the course of this project, that is my goal to break this project down into multple segments and apply parallel processing over those segments.

Currently, to my knowledge, the pipeline for the predictions is as follows,

1. **Setup Directory**,
   This particular step is aimed at setting up a directory for the purpose of forecasting. There are two ways to create the environment for usage, 
   `setup_production` and `setup_sandbox`.  These are executed only once to set up the working environment and is not required to be ran everytime we need to predict.
   Both these methods are virtually same for the sake of this project of ours. Essentially they both utilise the `setup_dir` function to create a directory (using `create_dir` function) and then fill that directory (using `fill_dir` function).
   
   The `create_dir` function essentially takes very less amount of time (a few milliiseconds) considering its task is to generate all the required filepaths that are going to be filled. 
   There won't be any benefit if we were to parallelize this process given each **instance** of a subprocess takes resources to be created and therefore in this case the amount of resources they would take would be greater than that when directories are created sequencially. 
   
   The `fill_dir` function calls upon 6 basic functions for filling data,
   
   1. `fill_raw`, which fetches resources such as observations, directory archies and climate forecasts,
   
   2. `fill_casts`, which prepares the forecast data from the raw data,
   
   3. `fill_fits`, which prepares model fits from the raw data,
   
   4. `fill_data`, which prepares dataset controls, rodent datasets, temporal data, covariates and metadata,
   
   5. `write_model_controls`, which prepares controls for the models and stores them in yaml,
   
   6. `fill_models`, which prepares the scripts for the supported prediction models.
   
   This provides us with our first area where we could break these 6 functions, and apply parallel processing over them. They, within themselves, can be further broken down and we would discuss that later.

2.  **Cast Portal Rodents Models**,
   In order to forecast the rodent population, we use the function `portalcast` with the parameters: 
   
   => `main` for the directory created with `fill_dir`, 
   
   => `models` as a vector of model names to be forcasted using, 
   
   => `datasets` as a vector of dataset names to  be created, 
   
   => `end_moons` as an integer denoting the last newmoon number,
   
   => `start_moon` as an integer denoting the first newmoon number
   
   These are all the relevent parameters that we need to consider during our research task.
   
   Breaking down this function further, it computes the number of *moons* it has to predict the population for, and then sequentially calls the `cast` function for each *moon* in the range `[start_moon...end_moons]`.
   
   This is one of our areas where we could think of applying multiprocessing but we do have to keep in mind that the number of *moons* might range in hundreds and that might make the forked threads to take lot more time than the sequential method.

3. **Cast function**,
   
   The `cast` function calls upon the `models_to_cast` function and passes the vector list containing the model names `models` onto that. `models_to_cast` returns a vector of scripts to the respective prediction models.
   
   After the retrieval of the scripts, each script is sequentially executed. This is yet another area for multiprocessing that I would like to focus on. 
   
   The reason for that is that currently Portalcasting uses 8 models for the purpose of prediction: 
   
   `AutoArima`, `NaiveArima`, `ESSS`, `nbGARCH`, `nbsGARCH`, `pevGARCH`, `simplexEDM`, `GPEDM`, `jags_RW` and `jags_logistics` 
   
   We would go into the working of these on a later date.
   
   Breaking these apart and running them into different forked threads would result in decrease of total runtime of the prediction workflow.

## Bye?

For now, my aim would be to look at all the possible ways to implement multiprocessing on this project, and deciding what part of the project to start doing that to. We have shortlisted three areas,

1. The setup process doesn't impact the prediction pipeline as such however it would still be great to make that faster.

2. Moons could be iterated in parallel but we would have to consider the number of moons to be queued this way so as to prevent excessive and unneccesary threads from being created.

3. The casting function could call upon each forecasting model in a different thread and I am certain that would reduce the runtime.

Let's meet again next week ~~(hopefully?)~~.
