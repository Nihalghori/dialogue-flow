function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") {
        return;
    }
    appendUserMessage(userInput);
    // Simulate bot response (you can replace this with actual backend logic)
    setTimeout(function() {
        appendBotMessage("Sorry, I'm just a demo bot. I don't have real answers :)");
    }, 500);
    document.getElementById("user-input").value = "";
}

function appendUserMessage(message) {
    var chatContainer = document.getElementById("chat-container");
    var userMessageElement = document.createElement("div");
    userMessageElement.className = "user-message";
    userMessageElement.textContent = message;
    chatContainer.appendChild(userMessageElement);
}

function appendBotMessage(message) {
    var chatContainer = document.getElementById("chat-container");
    var botMessageElement = document.createElement("div");
    botMessageElement.className = "bot-message";
    botMessageElement.textContent = message;
    chatContainer.appendChild(botMessageElement);
}
