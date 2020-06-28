import Person from "./Person";
import Address from "./Address";

export default class Company {
    companyName: string;
    owner: Person;
    address: Address;
    sector: string;
    employees: Array<Person> = [];

    constructor(companyName: string, owner: Person, address: Address, sector: string) {
        this.companyName = companyName;
        this.owner = owner;
        this.address = address;
        this.sector = sector;
    };

    addEmployee = (employee: Person) => {
        this.employees.push(employee);
        employee.employer = this;
    };
}