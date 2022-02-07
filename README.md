# Requirement

- Node.js 16
- npm

# Download the dependencies

`npm install`

# Environment variables in the file `.env`

REACT_APP_URL=http://127.0.0.1:4000/
REACT_APP_MOCK=false

Replace the value REACT_APP_URL by the url of your backend server
If you want to use the mock, set REACT_APP_MOCK to true

# The pages of the application

- / -> Display the informations for the user 12
- /user/12 -> Display the informations for the user 12
- /user/18 -> Display the informations for the user 18

# Run the frontend application with the following command

`npm start`

# Generate the static website

`npm build`

The static website is generated in the folder `/dist`
