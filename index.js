const {NlpManager} = require('node-nlp');
const manager = new NlpManager(({languages: ['en']}));

// add documents

manager.addDocument('en', 'hello', "greeting");
manager.addDocument('en', 'hi', "greeting");
manager.addDocument('en', 'hey', "greeting");
manager.addDocument('en', 'whats up', "greeting");
manager.addDocument('en', 'good morning', "greeting");
manager.addDocument('en', 'good afternoon', "greeting");
manager.addDocument('en', 'good day', "greeting");
manager.addDocument('en', 'bye', "greetings.bye");
manager.addDocument('en', 'thank you', "greetings.bye");
manager.addDocument('en', 'that is all', "greetings.bye");
manager.addDocument('en', 'i dont need anything else', "greetings.bye");
manager.addDocument('en', 'thanks for your help', "greetings.bye");
manager.addDocument('en', 'good bye', "greetings.bye");
//add answers

manager.addAnswer('en', 'greeting', 'Hello! How are you?');
manager.addAnswer('en', 'greeting', 'Hi! How can I help?');
manager.addAnswer('en', 'greeting', 'Hello! Im Documentor, Nice to meet you!');
manager.addAnswer('en', 'greeting', 'How can I be of service?');
manager.addAnswer('en', 'greetings.bye', 'Thank you for using Documentor!');
manager.addAnswer('en', 'greetings.bye', 'Have a great day!');
manager.addAnswer('en', 'greetings.bye', 'Good bye! Thanks again.');
manager.addAnswer('en', 'greetings.bye', 'Happy to help! you have a great day!');


manager.train().then(async () => {
    manager.save();
    let response = await manager.process('en', 'Documentor! I need help!');
    console.log(response);
})