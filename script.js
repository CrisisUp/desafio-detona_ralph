const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        felixIcon: document.querySelector(".menu-lives img"), 
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
    },
    actions: {
        timerId: null,
        countDownTimerId: null,
    }
};

// 1. Função para contar o tempo e mostrar Game Over
function countDown() {
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;

    if (state.values.curretTime <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        
        const screen = document.getElementById("game-over-screen");
        const finalScore = document.getElementById("final-score");
        
        finalScore.textContent = state.values.result;
        screen.classList.remove("hidden");
    }
}

// 2. Função para tocar sons (Lembre-se do erro 404 se o arquivo não existir!)
function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play().catch(() => {}); // Evita erro se o áudio não carregar
}

// 3. Função para sortear o Ralph
function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

// 4. Função para aumentar a dificuldade (chamada a cada acerto)
function updateDifficulty() {
    if (state.values.result % 5 === 0 && state.values.result > 0) {
        if (state.values.gameVelocity > 200) {
            state.values.gameVelocity -= 100;
            
            clearInterval(state.actions.timerId);
            state.actions.timerId = setInterval(randomSquare, state.values.gameVelocity);
        }
    }
}

// 5. Função de Cliques (Consolidada)
function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                
                updateDifficulty();
                playSound("hit");

                // Efeito visual de hit
                square.classList.add("hit");
                setTimeout(() => {
                    square.classList.remove("hit");
                }, 200);
            }
        });
    });
}

// 6. Reiniciar Jogo (Botão da tela final e Felix)
function resetGame() {
    location.reload(); 
}

// 7. Evento do Felix
state.view.felixIcon.addEventListener("click", () => {
    alert("Reiniciando a fase...");
    resetGame();
});

// 8. Inicializar
function initialize() {
    addListenerHitBox();
    state.actions.timerId = setInterval(randomSquare, state.values.gameVelocity);
    state.actions.countDownTimerId = setInterval(countDown, 1000);
}

initialize();