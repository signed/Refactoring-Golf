import { Manager } from './manager';
import { Salesman } from './salesman';

test('calculate the net salary when fixed salary is under the minimum tax', () => {
    const fixedSalary = 3000;
    const manager = createManager(fixedSalary);

    expect(manager.salaryAfterAdditionsAndDeductions()).toEqual(2700)
});

test('calculate the net salary when fixed salary is over the minimum tax', () => {
    const fixedSalary = 5000;
    const manager = createManager(fixedSalary);

    expect(manager.salaryAfterAdditionsAndDeductions()).toEqual(4250)
});

test('calculate the net salary when benefits ', () => {
    const fixedSalary = 3000;
    const manager = createManager(fixedSalary);
    manager.addSubordinate(createSubordinate());

    expect(manager.salaryAfterAdditionsAndDeductions()).toEqual(2720)
});

const createManager = (fixedSalary: number): Manager => {
    return new Manager('Carlos', 'Rodriguez', fixedSalary);
};

const createSubordinate = (): Salesman => {
    return new Salesman('Miguel', 'Gonzales', 2000, 2);
};
