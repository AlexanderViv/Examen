function mostrarFigura() {
    const valor = document.getElementById("figura").value;
    const resultado = document.getElementById("resultado");

    switch (valor) {
      case "1":
        resultado.textContent = "$850";
        break;
      case "2":
        resultado.textContent = "$3000";
        break;
      case "3":
        resultado.textContent = "$2200";
        break;

    }
}