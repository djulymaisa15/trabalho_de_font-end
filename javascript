<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Imagem em Movimento</title>
  <style>
    body {
      margin: 0;
      overflow: hidden; /* impede a barra de rolagem */
      background-color: #e0f7e0;
    }
    img {
      position: absolute;
      width: 200px;
      height: auto;
    }
  </style>
</head>
<body>
  <img id="img" src="fazenda.jpeg" alt="Fazenda">

  <script>
    // Posições e velocidades iniciais
    let x = 0, y = 0;
    let vx = 3, vy = 2;
    const img = document.getElementById("img");

    // Função para movimentar a imagem
    function mover() {
      x += vx;
      y += vy;

      // Faz a imagem "bater" nas bordas da tela
      if (x + img.width > window.innerWidth || x < 0) vx *= -1;
      if (y + img.height > window.innerHeight || y < 0) vy *= -1;

      // Atualiza a posição da imagem
      img.style.left = x + "px";
      img.style.top = y + "px";

      requestAnimationFrame(mover); // movimento contínuo e suave
    }

    mover(); // inicia o movimento
  </script>
</body>
</html>

