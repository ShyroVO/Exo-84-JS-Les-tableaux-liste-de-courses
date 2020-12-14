// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :
let liste = document.getElementById('listeCourse');

for (i = 0; i < articles.length; i++) {
    let nouveau = document.createElement('li');
    nouveau.innerHTML = articles[i];
    liste.appendChild(nouveau);
}





