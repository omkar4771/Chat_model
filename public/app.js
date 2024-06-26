// script.js
// Dummy data for chats
const chats = {
    Alice: [
        { sender: 'Alice', text: 'Hey, how are you?' },
        { sender: 'You', text: 'I am good, thanks!' }
    ],
    Bob: [
        { sender: 'Bob', text: 'Are you coming to the party?' },
        { sender: 'You', text: 'Yes, I will be there!' }
    ]
};

document.getElementById('sendButton').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function openChat(chatName) {
    document.getElementById('chatTitle').textContent = chatName;
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = ''; // Clear existing messages

    const chat = chats[chatName];
    chat.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message ' + (message.sender === 'You' ? 'sent' : 'received');
        messageElement.textContent = message.text;
        messagesContainer.appendChild(messageElement);
    });
    scrollToBottom();
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message) {
        const activeChat = document.getElementById('chatTitle').textContent;
        if (activeChat !== 'Select a chat') {
            const messageElement = document.createElement('div');
            messageElement.className = 'message sent';
            messageElement.textContent = message;
            document.getElementById('messages').appendChild(messageElement);
            input.value = '';

            // Update the dummy chat data
            chats[activeChat].push({ sender: 'You', text: message });
            scrollToBottom();
        }
    }
}

function scrollToBottom() {
    const messages = document.getElementById('messages');
    messages.scrollTop = messages.scrollHeight;
}
