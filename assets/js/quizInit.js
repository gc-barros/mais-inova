function quizInit() {

    const botaoAvancar = document.querySelector("[data-botao-avancar]");
    const pergunta = document.querySelector("[data-question]");
    const opcoesClick = document.querySelectorAll("[data-option]");
    const opcoesTexto = document.querySelectorAll("[data-option-text]");
    const radioButtons = document.querySelectorAll("[data-option] > input");
    const mensagemAlerta = document.querySelector("[data-alerta]");
    const barraDeProgresso = document.querySelector("[data-progressbar]");
    const loading = document.querySelector("[data-loading]");
    const conteudoPrincipal = document.querySelector("[data-principal]");
    const quizBox = document.querySelector(".quiz__box");
    
    let pontuacaoDaQuestao = {iniciante: 0, moderado: 0, arrojado: 0};
    let pontuacaoFinal = {iniciante: 0, moderado: 0, arrojado: 0};

    let currentQuestion = 0;

    let questions = [
        {
            question: "Qual a sua experiência com investimentos?",
            options: [
                "Nenhuma ou quase nada de experiência.",
                "Conheço alguns fundos de investimento.",
                "Escolho meus próprios investimentos e tenho ampla experiência no mercado.",
            ],
        },
        {
            question: "Selecione a frase que melhor te define na hora de escolher um investimento:",
            options: [
                "Sigo o conselho de alguém que saiba mais do mercado que eu.",
                "Busco a segurança, pensando a longo prazo.",
                "Invisto em algo que eu conheça bem, normalmente tenho muito conhecimento sobre tudo.",
            ],
        },
        {
            question: "Qual é mais importante pra você?",
            options: [
                "Tranquilidade e pouco risco.",
                "Diversificação e um pouco mais de rentabilidade.",
                "Maior rentabilidade possível.",
            ],
        },
        {
            question: "Se você passa por um momento de grande oscilação nos seus investimentos, você:",
            options: [
                "Vende logo tudo pra não sair perdendo muito.",
                "Examina com atenção o mercado e vê se é necessário vender.",
                "Entende que está sujeito a riscos dessa magnitude e está ciente que pode perder tudo, mas está preparado.",
            ],
        },
    ];

    botaoAvancar.addEventListener("click", computarQuestao);
    
    opcoesClick.forEach((opcao) => {
        opcao.addEventListener("click", () => {

            // Checa qual é o perfil da questão clicada.
            const numeroOpcao = opcao.dataset.option;
            const opcaoIniciante = numeroOpcao == "1";
            const opcaoModerado = numeroOpcao == "2";
            const opcaoArrojado = numeroOpcao == "3";

            // Ativa o botão avançar e apaga a mensagem de alerta, se estiverem ativos.
            let botaoInativo = botaoAvancar.classList.contains("quiz__botao--inativo");
            if (botaoInativo) {
                botaoAvancar.classList.remove("quiz__botao--inativo");
                mensagemAlerta.style.visibility = "hidden";
            }

            // Reseta a pontuação da questão e adiciona 1 ponto ao perfil selecionado.
            pontuacaoDaQuestao = { iniciante: 0, moderado: 0, arrojado: 0 };

            if (opcaoIniciante) {
                pontuacaoDaQuestao.iniciante = 1;
            }
            
            if (opcaoModerado) {
                pontuacaoDaQuestao.moderado = 1;
            }

            if (opcaoArrojado) {
                pontuacaoDaQuestao.arrojado = 1;
            }
        })
    })

    exibirProximaQuestao();
    
    function computarQuestao() {
        let botaoInativo = botaoAvancar.classList.contains("quiz__botao--inativo");
        
        // Exibe alerta se o botão for clicado quando estiver inativo e interrompe a função.
        if (botaoInativo) {
            mensagemAlerta.style.visibility = "visible";
            return
        }

        armazenarPontuacao(pontuacaoDaQuestao);
        currentQuestion++;
        resetarQuestao();
        exibirProximaQuestao();
    }

    function exibirProximaQuestao() {
        
        // Se a questão existir, renderiza a pergunta e as alternativas na tela.
        if (questions[currentQuestion]) {
            atualizaProgresso(currentQuestion);

            pergunta.innerText = questions[currentQuestion].question;
            opcoesTexto.forEach((opcao, i) => {
                opcao.innerText = questions[currentQuestion].options[i];
            });

        // Finaliza o jogo se não houver mais questões.
        } else {
            atualizaProgresso(currentQuestion);
            quizBox.style.opacity = 0.3;
            setTimeout(exibirLoading, 1000);
            setTimeout(analisarPerfil, 6000);
        }
    }

    function resetarQuestao() {
        // Desmarca todas as questões.
        radioButtons.forEach((radio) => {
            radio.checked = false;
        })

        // Desabilita botão avançar.
        botaoAvancar.classList.add("quiz__botao--inativo");
    }

    function armazenarPontuacao(pontuacao) {
        // Transfere a pontuação de uma questão para a pontuação final.
        pontuacaoFinal.iniciante += pontuacao.iniciante;
        pontuacaoFinal.moderado += pontuacao.moderado;
        pontuacaoFinal.arrojado += pontuacao.arrojado;
    }

    function atualizaProgresso(currentQuestion) {
        // Calcula a porcentagem de quantas questões foram respondidas
        let porcentagem = Math.floor(((currentQuestion) / questions.length)*100);
        barraDeProgresso.style.width = porcentagem + "%"
    }

    function analisarPerfil() {
        // Analisa a pontuação e redireciona o usuário para a página do seu perfil
        if (pontuacaoFinal.iniciante > pontuacaoFinal.moderado &&
            pontuacaoFinal.iniciante > pontuacaoFinal.arrojado) {
            window.location.pathname = "/perfiliniciante.html";

        } else if (pontuacaoFinal.moderado > pontuacaoFinal.arrojado) {
            window.location.pathname = "/perfilmoderado.html";

        } else {
            window.location.pathname = "/perfilarrojado.html";
        }
    }

    function exibirLoading() {
        loading.classList.add("loading__habilitado");
        conteudoPrincipal.classList.add("principal__desabilitado");
    }
}

export default quizInit;