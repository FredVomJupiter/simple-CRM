import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Company } from '../models/company.class'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  users!: any;
  companies!: any;

  constructor(private firestore: Firestore) {
    this.loadUserData();
  }


  loadUserData() {
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance, { idField: 'userId' }).subscribe((users) => {
      this.users = users;
      this.setCompanies();
    });
  }


  setCompanies() {
    let companies: Array<string> = [];
    this.users.forEach((user: any) => {
      companies.push(user.company);
    });
    this.companies = this.startCountingProcess(companies);
  }


  /**
   * This function takes an array of company names and returns an object with company names and their count.
   * @param companies as Array<string>.
   * @returns object with company names and their count.
   */
  startCountingProcess(companies: Array<string>) {
    let names: string[] = [];
    let counter: object[] = [];
    names = this.createListOfUniqueCompanyNames(companies, names);
    counter = this.createCounterTemplate(counter, names);
    counter = this.countCompanies(companies, counter);
    return counter;
  };


  createListOfUniqueCompanyNames(companies: Array<string>, names: string[]) {
    companies.forEach((company: string) => {
      if (!names.includes(company)) {
        names.push(company);
      }
    });
    return names;
  }


  createCounterTemplate(counter: object[], names: string[]) {
    names.forEach((company: string) => {
      counter.push(new Company(company));
    });
    return counter;
  }


  countCompanies(companies: Array<string>, counter: object[]) {
    companies.forEach((company: string) => {
      counter.forEach((item: any) => {
        if (item.name === company) {
          item.count++;
        }
      });
    });
    return counter;
  }
}
