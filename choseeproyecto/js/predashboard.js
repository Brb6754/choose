// Simulación de datos dinámicos para los cursos
const coursesData = [
    { title: "Introducción a Python", description: "Aprende los fundamentos de programación con Python.", image: "images/python.jpeg" },
    { title: "Diseño UX/UI", description: "Domina las técnicas de diseño de interfaces.", image: "images/curso2.svg" },
    { title: "Desarrollo Full Stack", description: "Conviértete en un desarrollador completo.", image: "images/python.jpeg" }
];

// Simulación de datos dinámicos para las oportunidades
const opportunitiesData = [
    { title: "Universidad Panamericana", description: "Status: Aceptado, Beca: 50%", image: "images/up.png" },
    { title: "Universidad Autonoma de Aguagascalientes", description:"Status: Rechazado, Beca: 20%", image: "images/uaa.jpeg" }
];

// Simulación de datos dinámicos para las notificaciones
const notificationsData = [
    { message: "Nuevo curso de Python disponible." },
    { message: "Tu Universidad ha actauliza tu coursework." },
    { message: "Recordatorio: Completar perfil para acceder a más oportunidades." },
    { message: "Evento de networking próximo viernes." }
];

// Simulación de datos iniciales del perfil
const profileData = {
    photo: "images/profile.jpg",
    name: "Juan Pérez",
    profession: "Desarrollador Web",
    phone: "+123 456 7890",
    email: "juan.perez@example.com",
    state: "Ciudad de México",
    city: "Ciudad de México",
    experience: [
        "Desarrollador Frontend en Empresa XYZ (2020-2023)",
        "Freelance Web Developer (2018-2020)"
    ],
    habilities: [
        "JavaScript",
        "React",
        "Node.js",
        "CSS"
    ]
};

// Función para renderizar cursos
function renderCourses() {
    const coursesList = document.getElementById('courses-list');
    coursesList.innerHTML = '';
    coursesData.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `
            <img src="${course.image}" class="item-image" alt="Curso ${course.title}">
            <div class="item-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <button>Inscribirse</button>
            </div>
        `;
        coursesList.appendChild(courseItem);
    });
}

// Función para renderizar oportunidades
function renderOpportunities() {
    const opportunitiesList = document.getElementById('opportunities-list');
    opportunitiesList.innerHTML = '';
    opportunitiesData.forEach(opportunity => {
        const opportunityItem = document.createElement('div');
        opportunityItem.className = 'opportunity-item';
        opportunityItem.innerHTML = `
            <img src="${opportunity.image}" class="item-image" alt="Oportunidad ${opportunity.title}">
            <div class="item-content">
                <h3>${opportunity.title}</h3>
                <p>${opportunity.description}</p>
            </div>
        `;
        opportunitiesList.appendChild(opportunityItem);
    });
}

// Función para renderizar notificaciones
function renderNotifications() {
    const notificationsLeft = document.getElementById('notifications-left');
    const notificationsRight = document.getElementById('notifications-right');
    notificationsLeft.innerHTML = '';
    notificationsRight.innerHTML = '';

    notificationsData.forEach((notification, index) => {
        const notificationItem = document.createElement('div');
        notificationItem.className = 'notification-item';
        notificationItem.innerHTML = `<p>${notification.message}</p>`;
        if (index % 2 === 0) {
            notificationsLeft.appendChild(notificationItem);
        } else {
            notificationsRight.appendChild(notificationItem);
        }
    });
}

// Función para inicializar el formulario con datos existentes
function initializeForm() {
    document.getElementById('form-photo').src = profileData.photo;
    document.getElementById('form-photo').style.display = profileData.photo ? 'block' : 'none';
    document.getElementById('photo-upload').querySelector('p').style.display = profileData.photo ? 'none' : 'block';
    document.getElementById('name').value = profileData.name;
    document.getElementById('profession').value = profileData.profession;
    document.getElementById('phone').value = profileData.phone;
    document.getElementById('email').value = profileData.email;
    document.getElementById('state').value = profileData.state;
    document.getElementById('city').value = profileData.city;
    document.getElementById('experience').value = profileData.experience.join('\n');
    document.getElementById('habilities').value = profileData.habilities.join('\n');
}

// Función para actualizar el CV preview
function updateCVPreview() {
    const name = document.getElementById('name').value || 'Tu nombre aquí';
    const profession = document.getElementById('profession').value || 'Profesión';
    const phone = document.getElementById('phone').value || '';
    const email = document.getElementById('email').value || '';
    const state = document.getElementById('state').value || '';
    const city = document.getElementById('city').value || '';
    const experience = document.getElementById('experience').value || 'Escribe tu experiencia...';
    const habilities = document.getElementById('habilities').value || 'Escribe tus habilidades...';

    document.getElementById('cv-photo').src = document.getElementById('form-photo').src || profileData.photo;
    document.getElementById('cv-name').textContent = name;
    document.getElementById('cv-profession').textContent = profession;
    document.getElementById('cv-phone').textContent = phone;
    document.getElementById('cv-email').textContent = email;
    document.getElementById('cv-state').textContent = state;
    document.getElementById('cv-city').textContent = city;

    const experienceList = document.getElementById('cv-experience-list');
    experienceList.innerHTML = '';
    experience.split('\n').forEach(line => {
        if (line.trim()) {
            const li = document.createElement('li');
            li.textContent = line.trim();
            experienceList.appendChild(li);
        }
    });
    if (!experienceList.children.length) {
        experienceList.innerHTML = '<li>Escribe tu experiencia...</li>';
    }

    const habilitiesList = document.getElementById('cv-habilities-list');
    habilitiesList.innerHTML = '';
    habilities.split('\n').forEach(line => {
        if (line.trim()) {
            const li = document.createElement('li');
            li.textContent = line.trim();
            habilitiesList.appendChild(li);
        }
    });
    if (!habilitiesList.children.length) {
        habilitiesList.innerHTML = '<li>Escribe tus habilidades...</li>';
    }
}

// Función para manejar la subida de fotos
function handlePhotoUpload() {
    const photoInput = document.getElementById('photo');
    const photoUpload = document.getElementById('photo-upload');
    const formPhoto = document.getElementById('form-photo');

    photoUpload.addEventListener('click', () => photoInput.click());

    photoInput.addEventListener('change', () => {
        const file = photoInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                formPhoto.src = e.target.result;
                formPhoto.style.display = 'block';
                photoUpload.querySelector('p').style.display = 'none';
                updateCVPreview();
            };
            reader.readAsDataURL(file);
        }
    });
}

// Función para manejar el chat
function handleChat() {
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');

    chatSend.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            // Añadir mensaje del usuario
            const userMessage = document.createElement('div');
            userMessage.className = 'chat-message user';
            userMessage.innerHTML = `<p>${message}</p>`;
            chatMessages.appendChild(userMessage);

            // Simular respuesta del asistente (para futura integración con modelo de lenguaje)
            const assistantMessage = document.createElement('div');
            assistantMessage.className = 'chat-message assistant';
            assistantMessage.innerHTML = `<p>Entendido, estoy analizando tu mensaje. ¿Quieres recomendaciones sobre cursos o trayectorias profesionales?</p>`;
            chatMessages.appendChild(assistantMessage);

            // Limpiar input y desplazar el scroll al final
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    // Permitir enviar mensaje con Enter
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            chatSend.click();
        }
    });
}

// Inicializar el dashboard
document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
    renderOpportunities();
    renderNotifications();
    initializeForm();
    handlePhotoUpload();
    handleChat();

    // Añadir event listeners para los inputs del formulario
    const inputs = ['name', 'profession', 'phone', 'email', 'state', 'city', 'experience', 'habilities'];
    inputs.forEach(id => {
        document.getElementById(id).addEventListener('input', updateCVPreview);
    });

    // Inicializar el CV preview
    updateCVPreview();
});