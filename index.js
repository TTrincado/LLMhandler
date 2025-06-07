import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import embedRoute from './api/embed.js';
import completionsRoute from './api/completion.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(bodyParser.json());

app.post('/api/embed', embedRoute);
app.post('/api/completions', completionsRoute);
app.post('/api/qdrant', completionsRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
