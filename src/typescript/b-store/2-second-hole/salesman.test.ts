import { Salesman } from './salesman';

test('calculate the net salary when fixed salary is under the minimum tax', () => {
    const fixedSalary = 3000;
    const salesman = createSalesman(fixedSalary);

    expect(salesman.netSalary()).toEqual(2700)
});

test('calculate the net salary when fixed salary is over the minimum tax', () => {
    const fixedSalary = 5000;
    const salesman = createSalesman(fixedSalary);

    expect(salesman.netSalary()).toEqual(4250)
});

test('calculate the net salary when have month quota', () => {
    const fixedSalary = 3000;
    const salesman = createSalesman(fixedSalary);
    salesman.updateMonthQuota(1000)

    expect(salesman.netSalary()).toEqual(2800)
});

const createSalesman = (fixedSalary: number) => {
    return new Salesman('Carlos', 'Rodriguez', fixedSalary, 10);
};
