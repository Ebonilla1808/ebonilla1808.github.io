// ========================================
// CONFIGURACIÓN DEL RAMO
// ========================================

const flowersContainer = document.getElementById("flowers");

const starsContainer = document.getElementById("stars");


// Configuración de las flores.
//
// x: posición horizontal.
// y: posición vertical.
// scale: tamaño de la flor.
// angle: inclinación del tallo.
// delay: tiempo de aparición.

const flowersConfig = [

    {
        type: "sunflower",
        x: 170,
        y: 25,
        scale: 1.1,
        angle: 0,
        delay: 0.2
    },

    {
        type: "tulip",
        x: 100,
        y: 65,
        scale: 1,
        angle: -12,
        delay: 0.4
    },

    {
        type: "sunflower",
        x: 240,
        y: 65,
        scale: 1,
        angle: 12,
        delay: 0.6
    },

    {
        type: "tulip",
        x: 45,
        y: 125,
        scale: 0.95,
        angle: -20,
        delay: 0.8
    },

    {
        type: "sunflower",
        x: 300,
        y: 125,
        scale: 0.95,
        angle: 20,
        delay: 1
    },

    {
        type: "tulip",
        x: 140,
        y: 110,
        scale: 1.05,
        angle: -5,
        delay: 1.2
    },

    {
        type: "sunflower",
        x: 210,
        y: 120,
        scale: 1.05,
        angle: 5,
        delay: 1.4
    },

    {
        type: "tulip",
        x: 80,
        y: 190,
        scale: 0.9,
        angle: -15,
        delay: 1.6
    },

    {
        type: "sunflower",
        x: 270,
        y: 190,
        scale: 0.9,
        angle: 15,
        delay: 1.8
    },

    {
        type: "tulip",
        x: 170,
        y: 190,
        scale: 1,
        angle: 0,
        delay: 2
    }

];

function createSunflower(config) {

    const flowerHead = document.createElement("div");

    flowerHead.classList.add("flower-head");


    // Crear los pétalos del girasol.

    const petalCount = 12;

    for (let i = 0; i < petalCount; i++) {

        const petal = document.createElement("div");

        petal.classList.add("petal");

        const rotation = (360 / petalCount) * i;

        petal.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );

        petal.style.setProperty(
            "--delay",
            `${config.delay + 0.4 + i * 0.04}s`
        );

        flowerHead.appendChild(petal);

    }


    // Crear el centro marrón del girasol.

    const flowerCenter = document.createElement("div");

    flowerCenter.classList.add("flower-center");

    flowerCenter.style.setProperty(
        "--delay",
        `${config.delay + 0.5}s`
    );

    flowerHead.appendChild(flowerCenter);

    return flowerHead;

}

function createTulip(config) {

    const tulipHead = document.createElement("div");

    tulipHead.classList.add("tulip-head");


    // Pétalo izquierdo.

    const leftPetal = document.createElement("div");

    leftPetal.classList.add(
        "tulip-petal",
        "tulip-petal-left"
    );


    // Pétalo derecho.

    const rightPetal = document.createElement("div");

    rightPetal.classList.add(
        "tulip-petal",
        "tulip-petal-right"
    );


    // Pétalo central.

    const centerPetal = document.createElement("div");

    centerPetal.classList.add(
        "tulip-petal",
        "tulip-petal-center"
    );


    // Configurar la animación de aparición.

    tulipHead.style.setProperty(
        "--delay",
        `${config.delay + 0.4}s`
    );


    // Construir el tulipán.

    tulipHead.appendChild(leftPetal);

    tulipHead.appendChild(rightPetal);

    tulipHead.appendChild(centerPetal);

    return tulipHead;

}
// ========================================
// CREAR UNA FLOR
// ========================================

function createFlower(config) {

    const flower = document.createElement("div");

    flower.classList.add("flower");

    flower.style.left = `${config.x}px`;

    flower.style.top = `${config.y}px`;

    flower.style.setProperty(
        "--flower-scale",
        config.scale
    );

    flower.style.animationDelay = `${config.delay}s`;


    // ====================================
    // MOVIMIENTO DE LA FLOR
    // ====================================

    const flowerSway = document.createElement("div");

    flowerSway.classList.add("flower-sway");

    flowerSway.style.animationDelay =
        `${Math.random() * 2}s`;


    // ====================================
    // TALLO
    // ====================================

    const stem = document.createElement("div");

    stem.classList.add("stem");

    stem.style.setProperty(
        "--stem-height",
        `${350 - config.y}px`
    );

    stem.style.setProperty(
        "--stem-angle",
        `${config.angle}deg`
    );


    // ====================================
    // HOJAS
    // ====================================

    const leftLeaf = document.createElement("div");

    leftLeaf.classList.add("leaf", "left");

    const rightLeaf = document.createElement("div");

    rightLeaf.classList.add("leaf", "right");


    // ====================================
    // CREAR CABEZA SEGÚN EL TIPO
    // ====================================

    let flowerHead;

    if (config.type === "tulip") {

        flowerHead = createTulip(config);

    } else {

        flowerHead = createSunflower(config);

    }


    // ====================================
    // CONSTRUIR FLOR
    // ====================================

    flowerSway.appendChild(stem);

    flowerSway.appendChild(leftLeaf);

    flowerSway.appendChild(rightLeaf);

    flowerSway.appendChild(flowerHead);

    flower.appendChild(flowerSway);

    flowersContainer.appendChild(flower);

}

// ========================================
// CREAR RAMO COMPLETO
// ========================================

function createBouquet() {

    flowersConfig.forEach(config => {

        createFlower(config);

    });

}


// ========================================
// CREAR PARTÍCULAS LUMINOSAS
// ========================================

function createStars() {

    const starCount = 45;

    for (let i = 0; i < starCount; i++) {

        const star = document.createElement("div");

        star.classList.add("star");


        // Posición aleatoria dentro del escenario.

        const x = Math.random() * 100;

        const y = Math.random() * 100;


        // Tamaño de cada partícula.

        const size = Math.random() * 3 + 1;


        // Duración de la animación.

        const duration = Math.random() * 4 + 3;


        // Retraso para evitar que todas
        // aparezcan al mismo tiempo.

        const delay = Math.random() * 5;


        star.style.left = `${x}%`;

        star.style.top = `${y}%`;


        star.style.setProperty(
            "--size",
            `${size}px`
        );

        star.style.setProperty(
            "--duration",
            `${duration}s`
        );

        star.style.setProperty(
            "--delay",
            `${delay}s`
        );


        starsContainer.appendChild(star);

    }

}


// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    createBouquet();

    createStars();

});