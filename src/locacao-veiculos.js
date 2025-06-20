<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Locadora de Veículos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }

        header {
            background-color: #1e90ff;
            color: white;
            padding: 20px;
            text-align: center;
        }

        .container {
            max-width: 1000px;
            margin: 20px auto;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .vehicle {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
        }

        .vehicle h3 {
            margin-top: 0;
        }

        .rent-btn {
            background-color: #1e90ff;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .rent-btn:hover {
            background-color: #0f78d4;
        }

        .message {
            margin-top: 10px;
            color: green;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <header>
        <h1>Locadora de Veículos</h1>
    </header>
    <div class="container">
        <div class="vehicle">
            <h3>Fiat Uno - 2020</h3>
            <p>R$ 100,00 por dia</p>
            <button class="rent-btn" onclick="alugarVeiculo('Fiat-Uno')">Alugar</button>
            <div class="message" id="msg-Fiat-Uno"></div>
        </div>
        <div class="vehicle">
            <h3>Chevrolet Onix - 2022</h3>
            <p>R$ 150,00 por dia</p>
            <button class="rent-btn" onclick="alugarVeiculo('Chevrolet-Onix')">Alugar</button>
            <div class="message" id="msg-Chevrolet-Onix"></div>
        </div>
        <div class="vehicle">
            <h3>Renault Kwid - 2021</h3>
            <p>R$ 120,00 por dia</p>
            <button class="rent-btn" onclick="alugarVeiculo('Renault-Kwid')">Alugar</button>
            <div class="message" id="msg-Renault-Kwid"></div>
        </div>
    </div>

    <script>
        function alugarVeiculo(nomeVeiculo) {
            // Substitui hífens por espaços para mostrar o nome correto
            const nomeFormatado = nomeVeiculo.replace(/-/g, ' ');
            const mensagemDiv = document.getElementById(`msg-${nomeVeiculo}`);
            if (mensagemDiv) {
                mensagemDiv.textContent = `Você alugou o veículo: ${nomeFormatado}`;
                setTimeout(() => {
                    mensagemDiv.textContent = "";
                }, 5000);
            }
        }
    </script>
</body>

</html>
