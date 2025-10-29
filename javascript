<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Imagem em Movimento</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      background-color: #cfe8b8;
    }

    #img {
      position: absolute;
      width: 200px;
      height: auto;
      left: 0;
      top: 0;
    }
  </style>
</head>
<body>
  <!-- A imagem precisa estar na mesma pasta que este arquivo HTML -->
  <img id="img" src="fazenda.jpeg" alt="Imagem da Fazenda">

  <script>
    const img = document.getElementById("img");
    let x = 0, y = 0;       // posição
    let vx = 3, vy = 2;     // velocidade

    function mover() {
      // Atualiza posição
      x += vx;
      y += vy;

      // Pega largura e altura visível da tela
      const largura = window.innerWidth;
      const altura = window.innerHeight;

      // Rebater nas bordas
      if (x + img.width >= largura || x <= 0) vx *= -1;
      if (y + img.height >= altura || y <= 0) vy *= -1;

      // Aplica posição atual
      img.style.left = x + "px";
      img.style.top = y + "px";

      // Chama de novo para continuar o movimento
      requestAnimationFrame(mover);
    }

    mover(); // inicia o movimento
  </script>
</body>
</html>
