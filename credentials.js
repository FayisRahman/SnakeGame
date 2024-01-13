const username = "wearethadathil";
const password = "g3J7UsLLi7fsZh0Y";
const dbName = "snakeDB";
const url = "mongodb+srv://"+ username +":"+password+"@cluster0.664dfoi.mongodb.net/"+dbName+"?retryWrites=true&w=majority";

module.exports = {
    username: username,
    password: password,
    url: url,
}