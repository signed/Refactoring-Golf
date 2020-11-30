import { ThirdParty } from './third-party';

export class Customer extends ThirdParty {

    public constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        phoneNumber: string) {
        super(phoneNumber);
    }

}
