document.addEventListener('DOMContentLoaded', () => {
    const photoUpload = document.getElementById('photo-upload');
    const photoInput = document.getElementById('photo');
    const cvPhoto = document.querySelector('.cv-preview #cv-photo');
    const formPhoto = document.querySelector('.form-section #form-photo');
    const nameInput = document.getElementById('name');
    const carrerInput = document.getElementById('carrer');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const experienceInput = document.getElementById('experience');
    const habilitiesInput = document.getElementById('habilities');
    const universityInput = document.getElementById('university');
    const semesterInput = document.getElementById('semester');
    const stateInput = document.getElementById('state');
    const cityInput = document.getElementById('city');
    const cvName = document.getElementById('cv-name');
    const cvCarrer = document.getElementById('cv-carrer');
    const cvPhone = document.getElementById('cv-phone');
    const cvEmail = document.getElementById('cv-email');
    const cvExperienceList = document.getElementById('cv-experience-list');
    const cvHabilitiesList = document.getElementById('cv-habilities-list');
    const cvUniversity = document.getElementById('cv-university');
    const cvSemester = document.getElementById('cv-semester');
    const cvState = document.getElementById('cv-state');
    const cvCity = document.getElementById('cv-city');
  
    // Trigger file input click when photo-upload div is clicked
    photoUpload.addEventListener('click', () => {
      photoInput.click();
    });
  
    // Handle photo upload
    photoInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // Show photo in CV preview
          cvPhoto.src = e.target.result;
          cvPhoto.style.display = 'block';
          // Reset photo-upload box
          formPhoto.style.display = 'none';
          formPhoto.src = '';
          photoUpload.innerHTML = '<p>Sube tu foto aquí</p>';
          photoInput.value = ''; // Clear file input
        };
        reader.readAsDataURL(file);
      }
    });
  
    // Update CV preview in real-time
    nameInput.addEventListener('input', () => {
      cvName.textContent = nameInput.value || 'Tu nombre aquí';
    });
  
    carrerInput.addEventListener('input', () => {
      cvCarrer.textContent = carrerInput.value || 'Carrera';
    });
  
    phoneInput.addEventListener('input', () => {
      cvPhone.textContent = phoneInput.value || '';
    });
  
    emailInput.addEventListener('input', () => {
      cvEmail.textContent = emailInput.value || '';
    });

    universityInput.addEventListener('input', () => {
      cvUniversity.textContent = universityInput.value || '';
    });

    semesterInput.addEventListener('input', () => {
      cvSemester.textContent = semesterInput.value || '';
    });

    stateInput.addEventListener('input', () => {
      cvState.textContent = stateInput.value || '';
    });

    cityInput.addEventListener('input', () => {
      cvCity.textContent = cityInput.value || '';
    });
  
  
    experienceInput.addEventListener('input', () => {
      const experiences = experienceInput.value.split('\n').filter(exp => exp.trim() !== '');
      if (experiences.length > 0) {
        cvExperienceList.innerHTML = experiences.map(exp => `<li>${exp}</li>`).join('');
      } else {
        cvExperienceList.innerHTML = '<li>Escribe tu experiencia...</li>';
      }
    });
  
    habilitiesInput.addEventListener('input', () => {
      const habilities = habilitiesInput.value.split('\n').filter(exp => exp.trim() !== '');
      if (habilities.length > 0) {
        cvHabilitiesList.innerHTML = habilities.map(exp => `<li>${exp}</li>`).join('');
      } else {
        cvHabilitiesList.innerHTML = '<li>Escribe tus habilidades...</li>';
      }
    });
    
  });