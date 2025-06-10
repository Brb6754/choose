document.addEventListener('DOMContentLoaded', () => {
    // Simulación de datos dinámicos para el perfil de la empresa
    const companyProfileData = {
        logo: "images/company-logo.jpg",
        name: "Empresa Ejemplo",
        industry: "Tecnología",
        phone: "+123 456 7890",
        email: "contacto@empresa.com",
        state: "Ciudad de México",
        city: "Ciudad de México",
        description: "Somos una empresa líder en soluciones tecnológicas."
    };

    // Simulación de datos dinámicos para vacantes
    const vacanciesData = [
        { 
            title: "Desarrollador Backend", 
            description: "Buscamos un desarrollador con experiencia en Node.js y bases de datos.", 
            category: "Tecnología", 
            image: "images/vacancy1.svg", 
            id: 1 
        },
        { 
            title: "Especialista en Marketing Digital", 
            description: "Responsable de campañas en redes sociales y SEO.", 
            category: "Marketing", 
            image: "images/vacancy2.svg", 
            id: 2 
        }
    ];

    // Simulación de datos dinámicos para candidatos
    const applicantsData = [
        { 
            name: "Ana Gómez", 
            vacancy: "Desarrollador Backend", 
            skills: ["Node.js", "MongoDB"], 
            image: "images/applicant1.jpg", 
            id: 1 
        },
        { 
            name: "Carlos López", 
            vacancy: "Especialista en Marketing Digital", 
            skills: ["SEO", "Google Ads"], 
            image: "images/applicant2.jpg", 
            id: 2 
        }
    ];

    // Simulación de datos dinámicos para notificaciones
    const notificationsData = [
        { message: "Nuevo candidato postulado a Desarrollador Backend." },
        { message: "Tu vacante de Marketing ha sido publicada." },
        { message: "Recordatorio: Revisar aplicaciones pendientes." },
        { message: "Evento de reclutamiento próximo viernes." }
    ];

    // Función para inicializar el perfil de la empresa
    function initializeProfile() {
        document.getElementById('cv-logo').src = companyProfileData.logo;
        document.getElementById('cv-name').textContent = companyProfileData.name;
        document.getElementById('cv-industry').textContent = companyProfileData.industry;
        document.getElementById('cv-phone').textContent = companyProfileData.phone;
        document.getElementById('cv-email').textContent = companyProfileData.email;
        document.getElementById('cv-state').textContent = companyProfileData.state;
        document.getElementById('cv-city').textContent = companyProfileData.city;
        document.getElementById('cv-description').textContent = companyProfileData.description;
    }

    // Función para renderizar vacantes
    function renderVacancies() {
        const vacanciesList = document.getElementById('vacancy-list');
        vacanciesList.innerHTML = '';
        vacanciesData.forEach(vacancy => {
            const vacancyItem = document.createElement('div');
            vacancyItem.className = 'opportunity-item';
            vacancyItem.innerHTML = `
                <img src="${vacancy.image}" class="item-image" alt="Vacante ${vacancy.title}">
                <div class="item-content">
                    <h3>${vacancy.title}</h3>
                    <p><strong>Categoría:</strong> ${vacancy.category}</p>
                    <p>${vacancy.description}</p>
                </div>
            `;
            vacanciesList.appendChild(vacancyItem);
        });
    }

    // Función para renderizar candidatos
    function renderApplicants() {
        const applicantsList = document.getElementById('applicants-list');
        applicantsList.innerHTML = '';
        applicantsData.forEach(applicant => {
            const applicantItem = document.createElement('div');
            applicantItem.className = 'course-item';
            applicantItem.innerHTML = `
                <img src="${applicant.image}" class="item-image" alt="Candidato ${applicant.name}">
                <div class="item-content">
                    <h3>${applicant.name}</h3>
                    <p><strong>Vacante:</strong> ${applicant.vacancy}</p>
                    <p><strong>Habilidades:</strong> ${applicant.skills.join(', ')}</p>
                    <button class="btn">Ver Perfil</button>
                </div>
            `;
            applicantsList.appendChild(applicantItem);
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

    // Función para manejar el formulario de vacantes
    function handleVacancyForm() {
        const vacancyForm = document.getElementById('vacancy-form');
        vacancyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('vacancy-title').value.trim();
            const description = document.getElementById('vacancy-description').value.trim();
            const category = document.getElementById('vacancy-category').value.trim();

            if (title && description && category) {
                vacanciesData.push({
                    title,
                    description,
                    category,
                    image: "images/default-vacancy.svg",
                    id: vacanciesData.length + 1
                });
                vacancyForm.reset();
                renderVacancies();
            }
        });
    }

    // Inicializar el dashboard
    initializeProfile();
    renderVacancies();
    renderApplicants();
    renderNotifications();
    handleVacancyForm();
});