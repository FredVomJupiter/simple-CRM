export class User {
    company: string;
    firstName: string;
    lastName: string;
    address: string;
    postalCode: number;
    city: string;
    state: string;
    email: string;
    telephone: number;

    constructor(obj?: any) {
        this.company = obj ? obj.company : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.address = obj ? obj.address : '';
        this.postalCode = obj ? obj.postalCode : 0;
        this.city = obj ? obj.city : '';
        this.state = obj ? obj.state : '';
        this.email = obj ? obj.email : '';
        this.telephone = obj ? obj.telephone : 0;
    }
}