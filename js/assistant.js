const assistantButton = document.getElementById('assistantButton');
let isDragging = false;
let currentY;
let initialY;
let startY;
let hasMoved = false;

assistantButton.addEventListener('mousedown', startDragging);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDragging);

function startDragging(e) {
  e.preventDefault();
  initialY = e.clientY - currentY;
  startY = e.clientY;
  isDragging = true;
  hasMoved = false;
  assistantButton.classList.add('dragging');
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentY = e.clientY - initialY;
    currentY = Math.max(0, Math.min(currentY, window.innerHeight - assistantButton.offsetHeight));
    assistantButton.style.top = currentY + 'px';
    assistantButton.style.bottom = 'auto';

    // Check if the mouse has moved beyond a small threshold (5px)
    if (Math.abs(e.clientY - startY) > 5) {
      hasMoved = true;
    }
  }
}

function stopDragging(e) {
  if (isDragging) {
    isDragging = false;
    assistantButton.classList.remove('dragging');

    // Only toggle the chat if there was no movement (pure click)
    if (!hasMoved) {
      toggleChat();
    }
  }
}

currentY = window.innerHeight - assistantButton.offsetHeight - 20;
assistantButton.style.top = currentY + 'px';

const chatContainer = document.getElementById('chatContainer');
const chatMessages = document.getElementById('chatMessages');
const chatDate = document.getElementById('chatDate');

function toggleChat() {
  if (chatContainer.style.display === 'block') {
    chatContainer.style.display = 'none';
    assistantButton.style.display = 'flex';
  } else {
    chatContainer.style.display = 'block';
    assistantButton.style.display = 'none';
  }

  const initialTimestamp = document.getElementById('initial-timestamp');
  const now = new Date();
  const timeString = now.toLocaleTimeString('es-ES', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
  initialTimestamp.textContent = timeString;
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const messages = document.getElementById('chatMessages');
  if (input.value.trim()) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user';
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = input.value;
    const timestamp = document.createElement('div');
    timestamp.className = 'timestamp';
    const now = new Date();
    timestamp.textContent = now.toLocaleTimeString('es-ES', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
    messageContent.appendChild(timestamp);
    messageDiv.appendChild(messageContent);
    messages.appendChild(messageDiv);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {
      const aiMessageDiv = document.createElement('div');
      aiMessageDiv.className = 'chat-message ai';
      const icon = document.createElement('div');
      icon.className = 'icon';
      icon.textContent = 'C';
      const aiMessageContent = document.createElement('div');
      aiMessageContent.className = 'message-content';
      aiMessageContent.textContent = '¡Hola! Puedo ayudarte a elegir tu carrera o recomendarte cursos. ¿Qué te interesa?';
      const aiTimestamp = document.createElement('div');
      aiTimestamp.className = 'timestamp';
      const aiTime = new Date();
      aiTimestamp.textContent = aiTime.toLocaleTimeString('es-ES', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
      aiMessageContent.appendChild(aiTimestamp);
      aiMessageDiv.appendChild(icon);
      aiMessageDiv.appendChild(aiMessageContent);
      messages.appendChild(aiMessageDiv);
      messages.scrollTop = messages.scrollHeight;
    }, 1000);
  }
}

chatMessages.addEventListener('scroll', () => {
  if (chatMessages.scrollTop < chatMessages.scrollHeight - chatMessages.clientHeight) {
    chatDate.style.display = 'block';
  }
});

document.addEventListener('click', function(event) {
  if (chatContainer.style.display === 'block' && !chatContainer.contains(event.target) && !assistantButton.contains(event.target)) {
    toggleChat();
  } 
});

window.addEventListener('resize', () => {
  currentY = Math.max(0, Math.min(currentY, window.innerHeight - assistantButton.offsetHeight));
  assistantButton.style.top = currentY + 'px';
});