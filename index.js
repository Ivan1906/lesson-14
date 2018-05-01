const mongoose = require('mongoose');
const { AnswerModel } = require('./src/db/answer/model');
const { QuestionModel } = require('./src/db/question/model');
const { UserModel } = require('./src/db/user/model');
const { VoteModel } = require('./src/db/vote/model');

mongoose.connect('mongodb://localhost:3001/mongoose-test')
    .then(() => {
        try {
            //Заповнення даних колекцій
            new UserModel({}).save().then(insUser => 
                new QuestionModel({
                    createdById: insUser._id
                }).save().then(insQuestion => 
                    new AnswerModel({
                        questionId: insQuestion._id,
                        createdById: insUser._id
                    }).save().then(insAnswer => 
                        new VoteModel({
                            answerId: insAnswer._id,
                            createdById: insUser._id
                        }).save())));
        } catch(error) {
            console.log(error);
        }
        
        console.log('success')
    })
    .catch(error => console.log(error))