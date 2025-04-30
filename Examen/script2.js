function mostrarFigura() {
    const valor = document.getElementById("figura").value;
    const resultado = document.getElementById("resultado");

  
    switch (valor) {
      case "1":
        resultado.textContent = "Capricornio";
        break;
    case "2":
        resultado.textContent = "Acuario";
        break;
    case "3":
        resultado.textContent = "Piscis";
        break;
    case "4":
        resultado.textContent = "Aries";
        break;
    case "5":
            resultado.textContent = "Tauro";
            break;
    case "6":
        resultado.textContent = "Geminis";
           break;
    case "7":
        resultado.textContent = "Cancer";
            break;
    case "8":
        resultado.textContent = "Leo";
            break;
    case "9":
        resultado.textContent = "Virgo";
            break;
    case "10":
        resultado.textContent ="Libra"; 
        break;
    case "11":
        resultado.textContent = "Escorpio";
        break;
    case "12":
        resultado.textContent = "Sagitario";
        break;            
    

    }
  }