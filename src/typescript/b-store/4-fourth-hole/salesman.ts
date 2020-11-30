import { Employee } from './employee';

export class Salesman extends Employee {
    private monthQuota: number = 0;

    constructor(
        firstName: string,
        lastName: string,
        fixedSalary: number,
        public commissionPorcentage: number) {
        super(firstName, lastName, fixedSalary);
    }

    getMonthQuota() {
        return this.monthQuota;
    }

    protected benefits() {
        return this.monthQuota * this.commissionPorcentage / 100;
    }

    updateMonthQuota(addQuota: number) {
        this.monthQuota = this.monthQuota + addQuota;
    }
}
