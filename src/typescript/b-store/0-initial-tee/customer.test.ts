import { Customer } from './customer';

test('format the phone number', () => {
    const customer = new Customer("Alberto", "Paez", "54115678654");

    const formattedPhone = customer.formatPhone();

    expect(formattedPhone).toEqual("CountryCode:54 - Citycode:11 - LocalNumber:5678654")
});
