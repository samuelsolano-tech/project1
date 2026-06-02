const animes = [
    "Naruto",
    "One Piece",
    "Attack on Titan",
    "Demon Slayer",
    "Death Note",
    "Jujutsu Kaisen",
    "Hunter x Hunter",
    "Fullmetal Alchemist: Brotherhood",
    "Bleach",
    "Dragon Ball Z"
];

const btn = document.getElementById("btnDica");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", () => {
    const anime = animes[Math.floor(Math.random() * animes.length)];

    resultado.innerHTML =
        `⭐ Recomendação do dia: <strong>${anime}</strong>`;
});
