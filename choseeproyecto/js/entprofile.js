document.addEventListener('DOMContentLoaded', () => {
    // Get form input elements
    const companyNameInput = document.getElementById('company-name');
    const industryInput = document.getElementById('industry');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const stateInput = document.getElementById('state');
    const cityInput = document.getElementById('city');
    const descriptionInput = document.getElementById('description');
    const logoInput = document.getElementById('company-logo');
    const photoUpload = document.getElementById('photo-upload');
    const formLogo = document.getElementById('form-logo');

    // Get preview elements
    const cvName = document.getElementById('cv-name');
    const cvIndustry = document.getElementById('cv-industry');
    const cvPhone = document.getElementById('cv-phone');
    const cvEmail = document.getElementById('cv-email');
    const cvState = document.getElementById('cv-state');
    const cvCity = document.getElementById('cv-city');
    const cvDescription = document.getElementById('cv-description');
    const cvLogo = document.getElementById('cv-logo');

    // Error checking and logging
    if (!companyNameInput || !cvName || !industryInput || !cvIndustry || !phoneInput || !cvPhone ||
        !emailInput || !cvEmail || !stateInput || !cvState || !cityInput || !cvCity ||
        !descriptionInput || !cvDescription || !logoInput || !cvLogo || !formLogo || !photoUpload) {
        console.error('Error: One or more required elements not found:', {
            companyNameInput, cvName, industryInput, cvIndustry, phoneInput, cvPhone,
            emailInput, cvEmail, stateInput, cvState, cityInput, cvCity,
            descriptionInput, cvDescription, logoInput, cvLogo, formLogo, photoUpload
        });
        return;
    }

    // Real-time update for text inputs with validation bypass
    const updatePreview = (input, preview, defaultValue) => {
        input.addEventListener('input', () => {
            console.log(`${preview.id} input:`, input.value);
            preview.textContent = input.value || defaultValue;
        });
    };

    updatePreview(companyNameInput, cvName, 'Nombre de la empresa');
    updatePreview(industryInput, cvIndustry, 'Industria');
    updatePreview(phoneInput, cvPhone, '');
    updatePreview(emailInput, cvEmail, '');
    updatePreview(stateInput, cvState, '');
    updatePreview(cityInput, cvCity, '');
    updatePreview(descriptionInput, cvDescription, 'Escribe la descripción de la empresa...');

    // Real-time update for logo upload
    logoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                console.log('Logo uploaded:', e.target.result);
                formLogo.src = e.target.result;
                formLogo.style.display = 'block';
                photoUpload.querySelector('p').style.display = 'none';
                cvLogo.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            formLogo.style.display = 'none';
            photoUpload.querySelector('p').style.display = 'block';
            cvLogo.src = 'images/company-logo.jpg';
        }
    });

    photoUpload.addEventListener('click', () => {
        logoInput.click();
    });
});