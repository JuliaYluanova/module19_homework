
class ElectricDevice {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isTurnedOn = false;
  }

  turnOn() {
    if (!this.isTurnedOn) {
      this.isTurnedOn = true;
      console.log(`${this.name} включен(а) в розетку.`);
    } else {
      console.log(`${this.name} уже включен(а) в розетку.`);
    }
  }

  turnOff() {
    if (this.isTurnedOn) {
      this.isTurnedOn = false;
      console.log(`${this.name} выключен(а) из розетки.`);
    } else {
      console.log(`${this.name} уже выключен(а) из розетки.`);
    }
  }
}

class Lamp extends ElectricDevice {
  constructor(name, power, brightness) {
    super(name, power);
    this.brightness = brightness;
  }

  changeBrightness(brightness) {
    this.brightness = brightness;
    console.log(`${this.name} яркость изменена на ${this.brightness}%.`);
  }
}

class Computer extends ElectricDevice {
  constructor(name, power, brand, model) {
    super(name, power);
    this.brand = brand;
    this.model = model;
  }

  getInfo() {
    console.log(`${this.name} - ${this.brand} ${this.model}, мощность: ${this.power} Вт`);
  }
}

// Создаем экземпляры объектов
const lamp = new Lamp("Настольная лампа", 25, 50);
const computer = new Computer("Компьютер", 500, "HP", "ProBook");

// Включаем приборы в розетку
lamp.turnOn();
computer.turnOn();

// Изменяем яркость лампы
lamp.changeBrightness(75);

// Получаем информацию о компьютере
computer.getInfo();

// Выключаем приборы из розетки
lamp.turnOff();
computer.turnOff();