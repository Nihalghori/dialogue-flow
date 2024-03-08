function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") {
        return;
    }
    appendUserMessage(userInput);

    // Bot responses based on user input
    setTimeout(function() {
        var chatContainer = document.getElementById("chat-container");
        if (userInput.toLowerCase().includes("asalam o alikum")) {
            appendBotMessage("Waalaikum Assalam! how can I help you");
        } else if (userInput.toLowerCase().includes("saylani")) {
            appendBotMessage("Saylani Welfare International Trust is a renowned non-profit organization based in Karachi, Pakistan. Established in 1999 by renowned humanitarian and social activist Maulana Bashir Ahmed Farooqui, Saylani Welfare International Trust is dedicated to providing humanitarian aid, social welfare services, and educational opportunities to the underprivileged communities across Pakistan. With a wide range of initiatives including free food distribution, healthcare services, vocational training programs, and educational scholarships, Saylani Welfare International Trust has made a significant impact in uplifting the lives of millions of people in need. In addition to its humanitarian efforts, the organization also emphasizes the importance of Information Technology (IT), offering IT training courses and workshops to empower individuals with digital skills essential for employment and economic empowerment. Saylani Welfare International Trust ka address hai: XYZ, ABC, Karachi. Aur aapki aur kuch madad karne mein khushi hogi. Committed to the principles of compassion, empathy, and service to humanity, Saylani Welfare International Trust continues to expand its reach and impact, striving to create a more equitable and just society for all.");
        } else {
            appendBotMessage("Sorry, I'm just a demo bot. I don't have real answers :)");
        }
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
