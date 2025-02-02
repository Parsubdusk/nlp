const {NlpManager} = require('node-nlp');
const manager = new NlpManager(({languages: ['en']}));

// add documents

manager.addDocument('en', 'hello', "greeting");
manager.addDocument('en', 'hi', "greeting");
manager.addDocument('en', 'hey', "greeting");
manager.addDocument('en', 'yo', "greeting");
manager.addDocument('en', 'good morning', "greeting");
manager.addDocument('en', 'good afternoon', "greeting");
manager.addDocument('en', 'good day', "greeting");

//add answers

manager.addAnswer('en', 'greeting', 'Hello! How are you?');
manager.addAnswer('en', 'greeting', 'Hi! How can I help?');
manager.addAnswer('en', 'greeting', 'Hello! Im Documentor, Nice to meet you!');
manager.addAnswer('en', 'greeting', 'How can I be of service?');

manager.train().then(async () => {
    manager.save();
    let response = await manager.process('en', 'how are you');
    console.log(response);
})