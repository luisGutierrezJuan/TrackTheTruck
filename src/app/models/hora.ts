export class Hora {
    horas: number;
    minutos: number;
  
    constructor(horas: number, minutos: number) {
      this.horas = horas;
      this.minutos = minutos;
    }
  
    toString(): string {
      return this.agregarCeroIzquierda(this.horas) + ":" + this.agregarCeroIzquierda(this.minutos);
    }
  
    private agregarCeroIzquierda(numero: number): string {
      if (numero < 10) {
        return "0" + numero.toString();
      }
      return numero.toString();
    }
  
    esHoraValida(hora: Hora): boolean {
      return hora.horas >= 0 && hora.horas <= 23 &&
             hora.minutos >= 0 && hora.minutos <= 59;
    }
  }