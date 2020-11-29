export abstract class Employee {

    protected firstName: string;
    protected lastName: string;
    protected fixedSalary: number;
    protected manager: Employee | undefined;
    protected street: string | undefined;
    protected city: string | undefined;
    protected country: string | undefined;
    protected subordinates = new Set<Employee>();

    protected constructor(firstName: string, lastName: string, fixedSalary: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fixedSalary = fixedSalary;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getFixedSalary(): number {
        return this.fixedSalary;
    }

    getManager() {
        return this.manager;
    }

    getStreet() {
        return this.street;
    }

    setStreet(street: string) {
        this.street = street;
    }

    getCity() {
        return this.city;
    }

    setCity(city: string) {
        this.city = city;
    }

    getCountry() {
        return this.country;
    }

    setCountry(country: string) {
        this.country = country;
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
