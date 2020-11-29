export class ThirdParty {
    private contactName: string | undefined;

    constructor(public readonly phoneNumber: string) {
    }

    getContactName(): string|undefined {
        return this.contactName;
    }

    formatPhone(): string {
        const first = this.phoneNumber.substring(0, 2)
        const second = this.phoneNumber.substring(2, 4)
        const third = this.phoneNumber.substring(4);
        return `CountryCode:${first} - Citycode:${second} - LocalNumber:${third}`
    }
}
