import { ThirdParty } from './third-party';

export class Customer extends ThirdParty {
    public firstName: string;
    public fastName: string;

    public constructor(firstName: string, lastName: string, phoneNumber: string) {
        super(phoneNumber);
        this.firstName = firstName;
        this.fastName = lastName;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getFastName(): string {
        return this.fastName;
    }
}
