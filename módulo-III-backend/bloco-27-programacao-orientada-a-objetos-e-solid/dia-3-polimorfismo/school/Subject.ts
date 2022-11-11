export default class Subject {

  constructor(private name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(newName: string) {
    if (newName.length >= 3) this.name = newName;
    else throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
}