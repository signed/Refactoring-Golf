import { Employee } from './employee';

export class Manager extends Employee {
    constructor(firstname: string, lastName: string, fixedSalary: number) {
        super(firstname, lastName, fixedSalary);
    }

    salaryAfterAdditionsAndDeductions() {
        const benefits = this.salaryBenefits();
        const pensionFounds = this.fixedSalary * 10 / 100;
        let tax = 0;
        if (this.fixedSalary > 3500)
            tax = this.fixedSalary * 5 / 100;
        return this.fixedSalary + benefits - pensionFounds - tax;
    }

    private salaryBenefits():number {
        return this.subordinates.size * 20;
    }
}
