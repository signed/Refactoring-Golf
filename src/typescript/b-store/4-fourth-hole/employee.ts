export abstract class Employee {
    manager: Employee | undefined;
    public street: string | undefined;
    public city: string | undefined;
    public country: string | undefined;
    protected constructor(
        public firstName: string,
        public lastName: string,
        public fixedSalary: number) {
    }

    netSalary() {
        return this.fixedSalary + this.benefits() - this.pensionFounds() - this.tax();
    }

    protected tax() {
        let tax = 0;
        if (this.fixedSalary > 3500)
            tax = this.fixedSalary * 5 / 100;
        return tax;
    }

    protected pensionFounds() {
        return this.fixedSalary * 10 / 100;
    }

    protected abstract benefits(): number;
}
