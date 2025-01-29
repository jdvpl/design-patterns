/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

/**
 * ! Builder Pattern:
 * It is a creational design pattern that allows us to construct complex objects
 * step by step.
 *
 * The pattern allows us to produce different types and representations
 * of an object using the same construction code.
 *
 * * It is useful when we need to construct a complex object with many parts
 * * and we want the construction process to be independent of the parts
 * * that make it up.
 *
 * https://refactoring.guru/design-patterns/builder
 */

class Computer{
  public cpu: string='cpu - not defined';
  public ram: string ='ram - not defined';
  public storage: string ='storage - not defined';
  public gpu: string ='gpu - not defined';

  displayConfiguration(){
    console.log(`Configuration: ${this.cpu}, ${this.ram}, ${this.storage}, ${this.gpu}`);
  }
}

class ComputerBuilder{
  private computer: Computer;

  constructor(){
    this.computer = new Computer();
  }

  setCPU(cpu: string):ComputerBuilder{
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string):ComputerBuilder{
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string):ComputerBuilder{
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string):ComputerBuilder{
    this.computer.gpu = gpu;
    return this;
  }

  build(){
    return this.computer;
  }
}