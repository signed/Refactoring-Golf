export abstract class Employee {
    protected manager: Employee | undefined;
    public street: string | undefined;
    public city: string | undefined;
    public country: string | undefined;
    protected subordinates = new Set<Employee>();

    protected constructor(
        public firstName: string,
        public lastName: string,
        public fixedSalary: number) {
    }

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
}
