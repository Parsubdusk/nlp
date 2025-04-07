const { NlpManager } = require('node-nlp');
const { Hono } = require('hono');
const { serve } = require('@hono/node-server');
const manager = new NlpManager(({languages: ['en']}));
const app = new Hono();
// add documents

manager.addDocument('en', 'hello', "greeting");
manager.addDocument('en', 'hi', "greeting");
manager.addDocument('en', 'hey', "greeting");
manager.addDocument('en', 'yo', "greeting");
manager.addDocument('en', 'good morning', "greeting");
manager.addDocument('en', 'good afternoon', "greeting");
manager.addDocument('en', 'good day', "greeting");
manager.addDocument('en', 'bye', "greetings.bye");
manager.addDocument('en', 'thank you', "greetings.bye");
manager.addDocument('en', 'that is all', "greetings.bye");
manager.addDocument('en', 'i dont need anything else', "greetings.bye");
manager.addDocument('en', 'thanks for your help', "greetings.bye");
manager.addDocument('en', 'good bye', "greetings.bye");
manager.addDocument('en', 'I need help finding a lawyer!', "assistance.request")
manager.addDocument('en', 'I need references?', "assistance.request")
manager.addDocument('en', 'Do you know of any cheap lawyers?', "assistance.request")
manager.addDocument('en', 'I need help finding a lawyer!', "assistance.request")
manager.addDocument('en', 'Can you recommend someone for me to talk to?', "assistance.request")
manager.addDocument('en', 'Do you know anyone that can provide low cost legal representation?', "assistance.request")

//add answers


manager.addAnswer('en', 'greeting', 'Hello! How are you?');
manager.addAnswer('en', 'greeting', 'Hi! How can I help?');
manager.addAnswer('en', 'greeting', 'Hello! Im Documentor, Nice to meet you!');
manager.addAnswer('en', 'greeting', 'How can I be of service?');
manager.addAnswer('en', 'greetings.bye', 'Thank you for using Documentor!');
manager.addAnswer('en', 'greetings.bye', 'Have a great day!');
manager.addAnswer('en', 'greetings.bye', 'Good bye! Thanks again.');
manager.addAnswer('en', 'greetings.bye', 'Happy to help! you have a great day!');
manager.addAnswer('en', 'assistance.request', 'Sure! I can help you. Can you tell me what kind of lawyer do you need?');
manager.addAnswer('en', 'assistance.request', 'What kind of references are you looking for?');
manager.addAnswer('en', 'assistance.request', 'I can help you find a lawyer. Can you tell me what kind of lawyer you need?');
manager.addAnswer('en', 'assistance.request', 'Please tell me more about the kind of referral you are looking for?');
manager.addAnswer('en', 'assistance.request', 'Happy to help! What area of law do you need help with?');
manager.addAnswer('en', 'assistance.request', 'Happy to help! Can you let me know what you need assitance with?');
manager.addAnswer('en', 'assistance.request', 'Yes I can! First can you give me more information on the subject you need help with?');



manager.train().then(async () => {
    await manager.save();
    console.log('NLP Manager trained and saved.')
    let response = await manager.process('en', 'Can you guide me?');
    console.log(response);
    response = await manager.process('en', 'I need help.');
    console.log(response);
}).catch(err => {
    console.error('Error training NLP Manager:', err);

app.post('/bot', async (c) => {
        const { message } = await c.req.json();
        const response = await manager.process('en', message)
        return
c.json({ response: response.answer || "I'm sorry, I didn't understand. Can you please explain further." });
});

    const port = 3000/bot;
    serve(app, { port })
        
console.log('Server is running on http://localhost: ${port}');
});

    


