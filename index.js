const mongoose = require('mongoose');
const { AnswerModel } = require('./src/db/answer/model');
const { QuestionModel } = require('./src/db/question/model');
const { UserModel } = require('./src/db/user/model');
const { VoteModel } = require('./src/db/vote/model');

mongoose.connect('mongodb://localhost:3001/mongoose-test')
    .then(() => {
        new AnswerModel();
        new QuestionModel();
        new UserModel();
        new VoteModel();
        console.log('success')
    })
    .catch(error => console.log(error))