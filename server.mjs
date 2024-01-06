import { createServer } from 'http';
import express  from 'express';
import path from 'path';
import cors from 'cors';


const app = express();
const port = process.env.PORT || 3000;
const server = createServer(app);

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
