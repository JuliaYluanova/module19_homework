
// Родительская функция "Электроприбор"
function ElectricAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.isOn = false;
}

// Методы для включения/выключения прибора
ElectricAppliance.prototype.turnOn = function() {
  this.isOn = true;
  console.log(this.name + " включен(а)");
};

ElectricAppliance.prototype.turnOff = function() {
  this.isOn = false;
  console.log(this.name + " выключен(а)");
};

// Конкретный прибор "Компьютер"
function Computer(name, power, brand) {
  ElectricAppliance.call(this, name, power);
  this.brand = brand;
}

// Делегирующая связь с родительской функцией "Электроприбор"
Computer.prototype = Object.create(ElectricAppliance.prototype);
Computer.prototype.constructor = Computer;

// Метод для отображения информации о компьютере
Computer.prototype.showInfo = function() {
  console.log(`Название: ${this.name}); Мощность: ${this.power}; Бренд: ${this.brand};`);
};

// Конкретный прибор "Лампа"
function Lamp(name, power, color) {
  ElectricAppliance.call(this, name, power);
  this.color = color;
}

// Делегирующая связь с родительской функцией "Электроприбор"
Lamp.prototype = Object.create(ElectricAppliance.prototype);
Lamp.prototype.constructor = Lamp;

// Метод для отображения информации о лампе
Lamp.prototype.showInfo = function() {
  console.log(`Название: ${this.name}); Мощность: ${this.power}; Цвет: ${this.color};`);
};

// Создаем экземпляры приборов
const computer = new Computer("Компьютер", 500, "Asus");
const lamp = new Lamp("Лампа", 100, "белый");

// Включаем приборы
computer.turnOn();
lamp.turnOn();

// Отображаем информацию о приборах
computer.showInfo();
lamp.showInfo();

// Вычисляем общую потребляемую мощность
let totalPower = computer.power + lamp.power;
console.log(`Общая потребляемая мощность: ${totalPower} Вт`);