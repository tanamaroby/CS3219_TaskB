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

        nodemon index

7. Then, open up http://localhost:8080 and you should see the following text: Hello everyone, welcome to CS3219 OTOT Assignment Task B. This app contains a bunch of characters from Persona 5 as contacts

8. The API server is now up. Use Postman to do GET, PUT, and DELETE API calls on localhost. 

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

