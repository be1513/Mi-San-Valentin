// ❤️ Generar corazones flotantes
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Posición aleatoria
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";

    // Tamaño aleatorio
    const size = Math.random() * 20 + 10 + "px";
    heart.style.fontSize = size;

    // Velocidad aleatoria
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    // Agregar al contenedor
    document.getElementById("hearts-container").appendChild(heart);

    // Eliminar después de la animación
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generar corazones cada 300ms
setInterval(createHeart, 300);

// 🐼🐨 Generar pandas y koalas animados
function createAnimal() {
    const animal = document.createElement("img");

    // Alternar entre panda y koala
    const isPanda = Math.random() > 0.5;
    animal.src = isPanda ? "panda.png" : "koala.png";
    animal.classList.add(isPanda ? "panda" : "koala");

    // Posición aleatoria
    animal.style.left = Math.random() * window.innerWidth + "px";
    animal.style.top = Math.random() * window.innerHeight + "px";

    // Tamaño aleatorio
    const size = Math.random() * 40 + 40 + "px";
    animal.style.width = size;

    // Agregar al contenedor
    document.getElementById("pandas-koalas-container").appendChild(animal);

    // Eliminar después de un tiempo
    setTimeout(() => {
        animal.remove();
    }, 10000);
}

// Generar pandas y koalas cada 2 segundos
setInterval(createAnimal, 2000);
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", function() {
    message.innerText = "¡Te Amo ETERNAMENTE mi Chaparrita ! 💖🥰";
    message.style.opacity = "1";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", function() {
    // Mueve el botón a una posición aleatoria
    let x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    let y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("click", function() {
    message.innerText = "¡No puedes decir que no! 😆";
    message.style.opacity = "1";
});
