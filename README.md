## Running the code
  Install node.js "https://nodejs.org/en/download"
  refresh vs code

  Open windows powershell as admin
  input "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser"

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

## Running the Gemini Express server

1. Clone the repo to the device you want to use.
2. Open a terminal and navigate to the project root folder.
3. Change into the server directory:
   - `cd src/server`
4. Install the server dependencies:
   - `npm install`
5. Create a `.env` file in `src/server` with your Gemini API key:
   - `GEMINI_API_KEY=your_api_key_here`
6. Start the server:
   - `node index.js`
7. The server will listen on port `3001` by default.

### Using the server from another device

- Make sure the device has Node.js installed.
- Clone the repository and follow the same steps above.
- If you want to run the server on a different machine than the frontend, update the frontend fetch URL from `/api/chat` to the server host, for example:
  - `http://localhost:3001/api/chat`
- Ensure the server machine is reachable from the other device, and open port `3001` if necessary.
