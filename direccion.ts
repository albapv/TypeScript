class Direccion {
  calle: string;
  numero: number;
  piso: string;
  letra: string;
  codigoPostal: string;
  poblacion: string;
  provincia: string;
  
  constructor(calle: string, numero: number, piso: string, letra: string, codigoPostal: string, poblacion: string, provincia: string) {
    this.calle = calle;
    this.numero = numero;
    this.piso = piso;
    this.letra = letra;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.provincia = provincia;
  }
}

export default Direccion;
