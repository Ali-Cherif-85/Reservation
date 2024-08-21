function redirectToSearchPage() {
    const searchTerm = document.getElementById('search').value;
    
    // Vérifie si l'utilisateur a entré quelque chose dans la barre de recherche
    if (searchTerm) {
        // Redirige vers une autre page avec le terme de recherche en paramètre (exemple avec Google)
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    } else {
        alert('Veuillez entrer un terme de recherche.');
    }
}
