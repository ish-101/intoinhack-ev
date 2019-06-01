import express from 'express';
import logger from 'morgan'
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

mongoose.connect('mongodb://localhost:27017/intoinhack-ev', {
    useNewUrlParser: true,
    useCreateIndex: true
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

module.exports = app;
