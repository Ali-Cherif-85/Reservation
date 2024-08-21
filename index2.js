document.addEventListener('DOMContentLoaded', function() {
    const typeVoitureSelect = document.getElementById('typeVoiture');
    const modeleVoitureSelect = document.getElementById('modeleVoiture');
    const submitBtn = document.getElementById('submitBtn');
    const errorMessage = document.getElementById('errorMessage');
    const searchBtn = document.getElementById('searchBtn');

    const voitures = {
        berline: ['Fiat Tipo Berline', 'MG 5', 'Mercedes-Benz Classe C Plug-in Hybride', 'Honda Civic Hybride', 'Toyota Corolla Sedan Hybride', 'Skoda Octavia RS'],
        citadine: ['Skoda Fabia', 'Volkswagen Polo', 'Toyota Yaris Hybride', 'Hyundai i20', 'Dacia Sandero', 'KIA Picanto'],
        suv: ['Skoda Kushaq', 'Dacia Sandero Stepway', 'Opel Mokka', 'Hyundai Venue'],
        compacte: ['Volkswagen Golf 8', 'Cupra', 'Renault Megane', 'Seat Leon'],
        coupe: ['BMW Serie 4 Coupe', 'Porsche'],
        pickup: ['Toyota Hilux Double Cabine', 'Mitsubishi L200 Double Cabine', 'Toyota Hilux Simple Cabine', 'Toyota Land Cruiser 79', 'Volkswagen Amarok'],
        monospace: ['Hyundai Staria 9 places', 'Peugeot Expert Combi', 'Mercedes-Benz Classe V'],
        utilitaire: ['Fiat Fiorino', 'Renault Express Van', 'Peugeot Partner']
    };

    typeVoitureSelect.addEventListener('change', function() {
        const selectedType = this.value;
        modeleVoitureSelect.innerHTML = '<option value="">Sélectionner un modèle</option>';

        if (selectedType && voitures[selectedType]) {
            const modeles = voitures[selectedType];
            modeles.forEach(function(modele) {
                const option = document.createElement('option');
                option.value = modele.toLowerCase().replace(/\s+/g, '');
                option.textContent = modele;
                modeleVoitureSelect.appendChild(option);
            });
        }
    });

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        
        const selectedType = typeVoitureSelect.value;
        const selectedModele = modeleVoitureSelect.value;
        const date1 = new Date(document.getElementById('date1').value);
        const date2 = new Date(document.getElementById('date2').value);
        const diffInTime = date2.getTime() - date1.getTime(); 
    const diffInDays = diffInTime / (1000 * 3600 * 24); 

    if (diffInDays >= 1) { 
        errorMessage.textContent = '';
        alert(`Les dates sont valides ! La différence entre les deux dates est de ${Math.round(diffInDays)} jours.`);
        window.location.href = `index7.html?type=${encodeURIComponent(selectedType)}&modele=${encodeURIComponent(selectedModele)}`;
    } else {
        errorMessage.textContent = 'La deuxième date doit être strictement supérieure d\'au moins un jour à la première date.';
    }
        if (!selectedType || !selectedModele) {
            errorMessage.textContent = 'Veuillez sélectionner un type et un modèle de voiture.';
            return;
        }

        if (date2 > date1 && (date2 - date1) >= 86400000) {
            const diffDays = Math.ceil((date2 - date1) / (1000 * 60 * 60 * 24));
            errorMessage.textContent = '';
            window.location.href = `index7.html?type=${encodeURIComponent(selectedType)}&modele=${encodeURIComponent(selectedModele)}&jours=${diffDays}`;
        } else {
            errorMessage.textContent = 'La deuxième date doit être strictement supérieure d\'au moins un jour à la première date.';
        }
    });

    searchBtn.addEventListener('click', function(event) {
        const selectedType = typeVoitureSelect.value;
        const selectedModele = modeleVoitureSelect.value;

        if (!selectedType || !selectedModele) {
            event.preventDefault();
            alert('Veuillez sélectionner un type et un modèle de voiture avant de rechercher.');
        }
    });
});



