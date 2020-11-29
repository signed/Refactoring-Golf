import { Employee } from './employee';

export class Salesman extends Employee {
    private commissionPorcentage: number;
    private monthQuota: number = 0;

    constructor(firstName: string, lastName: string, fixedSalary: number, commissionPorcentage: number) {
        super(firstName, lastName, fixedSalary);
        this.commissionPorcentage = commissionPorcentage;
    }

    setCommissionPorcentage(commissionPorcentage: number) {
        this.commissionPorcentage = commissionPorcentage;
    }

    getCommissionPorcentage() {
        return this.commissionPorcentage;
    }

    getMonthQuota() {
        return this.monthQuota;
    }

    netSalary(): number {
        const benefits = this.monthQuota * this.commissionPorcentage / 100;
        const pensionFounds = this.fixedSalary * 10 / 100;
        let tax = 0;
        if (this.fixedSalary > 3500)
            tax = this.fixedSalary * 5 / 100;
        return this.fixedSalary + benefits - pensionFounds - tax;
    }

    updateMonthQuota(addQuota: number) {
        this.monthQuota = this.monthQuota + addQuota;
    }
}
