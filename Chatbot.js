const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const responses = {
  'hello': 'Hi there!',
  'how are you': 'I am a chatbot, but thanks for asking!',
  'bye': 'Goodbye! Have a great day.',
  'exit': 'Chatbot exiting. Goodbye!',
  'default': 'I\'m not sure how to respond to that.'
};

function chatbot() {
  rl.question('User: ', (userInput) => {
    const trimmedInput = userInput.trim().toLowerCase();

    // Check if the user wants to exit
    if (trimmedInput === 'exit' || trimmedInput === 'quit') {
      console.log('Chatbot: Goodbye!');
      rl.close(); // Close the readline interface to exit the program
      return;
    }

    const response = responses[trimmedInput] || responses['default'];
    console.log(`Chatbot: ${response}`);

    // Recursive call to keep the chat going
    chatbot();
  });
}

// Start the chatbot
console.log('Chatbot: Hello! Ask me anything. Type "exit" to end the conversation.');
chatbot();
