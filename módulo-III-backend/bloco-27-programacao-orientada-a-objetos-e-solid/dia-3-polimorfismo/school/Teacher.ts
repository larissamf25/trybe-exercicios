import Enrollable from './Enrollable';
import Person from './Person';
import Subject from './Subject';

export default class Employee extends Person implements Enrollable {
  private _enrollment = String();
  private _admissionDate: Date;
  private _subject: Subject;

  constructor(name: string, birthDate: Date, private _salary: number, subject: Subject) {
    super(name, birthDate);

    this.salary = _salary;
    this._admissionDate = new Date();
    this._subject = subject;
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    }

    this._enrollment = value;
  }

  get subject(): Subject {
    return this._subject;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo.');

    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de admissão não pode ser uma data no futuro.');
    }

    this._admissionDate = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FUNC${randomStr}`;
  }
}