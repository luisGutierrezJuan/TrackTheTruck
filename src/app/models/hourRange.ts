export class HourRange {
    hour1: number;
    minute1: number;

    hour2: number;
    minute2: number;
  
    constructor(hour1: number, minute1: number, hour2: number, minute2: number) {
      this.hour1 = hour1;
      this.minute1 = minute1;
      this.hour2 = hour2;
      this.minute2 = minute2;
    }
  
    toString(): string {
      return this.agregarCeroIzquierda(this.hour1) + ":" + this.agregarCeroIzquierda(this.minute1) + " - " + this.agregarCeroIzquierda(this.hour2) + ":" + this.agregarCeroIzquierda(this.minute2);
    }
  
    private agregarCeroIzquierda(numero: number): string {
      if (numero < 10) {
        return "0" + numero.toString();
      }
      return numero.toString();
    }
  
  }