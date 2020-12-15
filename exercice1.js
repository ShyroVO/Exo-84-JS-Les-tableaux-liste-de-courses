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

let boutonAjout = document.getElementById('ajouter');

for (let i = 0; i < articles.length; i++) {
    let nouveau = document.createElement('li');
    nouveau.innerHTML = articles[i];
    liste.appendChild(nouveau);
}

boutonAjout.addEventListener('click', function ajoutItem() {
    let textAjout = document.getElementById('contenusAjout').value;
    articles.push(textAjout);
    console.log(articles);
    return articles;
})
