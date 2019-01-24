export class Contact {
    contactId:string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    city: string;
    address: string;
    service: string;
    owner:string;


    constructor( contactId:string, firstname: string, lastname: string, email: string, phone: string, city: string, address: string, service: string, owner:string){
        this.contactId=contactId;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.phone=phone;
        this.city=city;
        this.email=email;
        this.address=address;
        this.service=service;
        this.owner=owner;
    }

}
