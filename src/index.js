import express from 'express';
import { userFindbyIdController } from './controllers/user-find-by-id-controller.js';
import { userFetchController } from './controllers/user-fetch-controller.js';
import { userCreateController } from './controllers/user-create-controller.js';
import { validateFindWhereMiddleware } from './middlewares/validate-find-where-middleware.js';
import { validateCreateMiddleware } from './middlewares/validate-create-middleware.js';

const app = express();
app.use(express.json());

app.get('/users/:id', userFindbyIdController);
app.get('/users', validateFindWhereMiddleware, userFetchController);
app.post('/users', validateCreateMiddleware, userCreateController);

app.listen(3000, () => {
    console.log('Server started on port 3000');
})