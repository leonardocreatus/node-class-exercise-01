import express from 'express';
import mongoose from 'mongoose';
import { userFindbyIdController } from './controllers/user/user-find-by-id-controller.js';
import { userFetchController } from './controllers/user/user-fetch-controller.js';
import { userCreateController } from './controllers/user/user-create-controller.js';
import { validateFindWhereMiddleware } from './middlewares/validate-find-where-middleware.js';
import { userModel } from './models/user-model.js';
import { authController } from './controllers/auth/auth-controller.js';
import { validAuthController } from './controllers/auth/auth-valid-controller.js';
import { authMiddleware } from './middlewares/auth-middleware.js';

mongoose.connect('mongodb+srv://encore:encore@cluster0.ic6rn.mongodb.net/class', { useNewUrlParser: true });


const app = express();
app.use(express.json());

app.get('/users/:id', authMiddleware, userFindbyIdController);
app.get('/users', validateFindWhereMiddleware, userFetchController);
app.post('/users', userCreateController);
app.post('/auth', authController);
app.post('/auth/valid', validAuthController)

app.listen(3000, () => {
    console.log('Server started on port 3000');
})