import { Employee } from './employee';

export class Manager extends Employee {
    constructor(firstname: string, lastName: string, fixedSalary: number) {
        super(firstname, lastName, fixedSalary);
    }

    protected subordinates = new Set<Employee>();

    getSubordinates(): Set<Employee> {
        return new Set<Employee>(this.subordinates);
    }

    addSubordinate(subordinate: Employee) {
        this.subordinates.add(subordinate);
        subordinate.manager = this;
    }

    removeSubordinate(subordinate: Employee) {
        this.subordinates.delete(subordinate);
        subordinate.manager = undefined;
    }

    protected benefits(): number {
        return this.subordinates.size * 20;
    }
}
