document.getElementById('emailForm').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('errorMessage');
    
    // Vérifier si l'adresse e-mail est valide
    if (!emailInput.validity.valid) {
        errorMessage.textContent = "Veuillez entrer une adresse e-mail valide.";
        errorMessage.style.display = "block";
        event.preventDefault(); // Empêche l'envoi du formulaire
    } else {
        errorMessage.style.display = "none";
    }
});

    function togglePasswordVisibility(pwdId, chkId) {
        const pwd = document.getElementById(pwdId);
        const chk = document.getElementById(chkId);
        
        chk.onchange = function() {
            pwd.type = chk.checked ? "text" : "password";
        };
    }
    
    // Appliquer la fonction aux deux paires de champ de mot de passe et case à cocher
    togglePasswordVisibility('pwd1', 'chk1');
    togglePasswordVisibility('pwd2', 'chk2');
    if (pwd1 !== pwd2) {
        event.preventDefault(); // Empêche l'envoi du formulaire
        errorMessage.textContent = "Les mots de passe ne correspondent pas.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none"; // Cache le message d'erreur
    }
