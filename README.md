# How to run the API locally 

1. Verify that NodeJs is installed 

        node -v

2. Verify that npm is installed

        npm -v 

3. Verify that MongoDB is installed

        mongo --version

4. Clone this repository and navigate to the directory

        git clone https://github.com/tanamaroby/CS3219_TaskB.git

        cd CS3219_TaskB

5. Install the packages using npm

        npm install

6. Start up the server using the command

        npm run dev

7. Then, open up http://localhost:8080 and you should see the following text: Hello everyone, welcome to CS3219 OTOT Assignment Task B. This app contains a bunch of characters from Persona 5 as contacts

8. The API server is now up. Use Postman to do GET, PUT, and DELETE API calls on localhost. 

# How to access deployed API

1. Open up https://sg7cmab7q5.execute-api.us-east-1.amazonaws.com/dev on your web browser to access the main page (serverless).

2. Use Postman to do GET, PUT, and DELETE API calls on the link above. 

# API Commands

1. List all personas

        GET /api/contacts

2. Create new persona 

        POST /api/contacts

3. Retrieve a single persona

        GET /api/contacts/{id}

4. Update a single persona

        PUT /api/contacts/{id}

5. Delete a persona

        DELETE /api/contacts/{id}

# Running tests locally

The tests are placed in the `tests` folder. As of now, there is only 1 test file which is `test.js`.

This instruction assumes that you have cloned the project and is currently in the project directory. 

1. Verify that mocha is installed using 

        mocha -version

2. Install all required dependencies

        npm install

3. Run the test 

        npm run test

# Running tests via Travis

This instruction assumes that you have cloned the project and is currently in the project directory.

1. Create a new git repo if you have not already. 

2. Login to Travis website at https://travis.ci.org.

3. Login to Travis website using your GitHub account.

4. On the list of repositories in Travis, enable Travis on the repository you are going to push to.

5. Verify that `.travis.yml` exists on the root directory.

6. [Optional] Create changes to the repo and push to main.

7. or trigger the build from Travis.




