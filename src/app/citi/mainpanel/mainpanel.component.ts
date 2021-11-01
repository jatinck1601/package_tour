import { Component, OnInit } from '@angular/core';
import { PackageDetails } from '../PackageDetails';

@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.css']
})
export class MainpanelComponent implements OnInit {

  tmpArr: PackageDetails[] = [];
  status:boolean = false;
  pkgArr: PackageDetails[] = [];
  print: boolean = false;
  count: number = 0;

  constructor() { 
    let pkg1 = new PackageDetails("Kerala",7,85000,20,"assets/kerala.jpg");
    let pkg2 = new PackageDetails("Mumbai",6,95000,15,"assets/mum.jpg");
    let pkg3 = new PackageDetails("Kerala",5,50000,25,"assets/kerala.jpg");


    this.pkgArr.push(pkg1);
    this.pkgArr.push(pkg2);
    this.pkgArr.push(pkg3);
    this.pkgArr.push(new PackageDetails("Goa",9,1600000,10,"assets/mum.jpg"));
    this.pkgArr.push(new PackageDetails("Rajasthan",8,100000,15,"assets/raja.jpg"));
    this.pkgArr.push(new PackageDetails("Ladkh",5,70000,5,"assets/ladakh.jpg"));
    
    
  }
  
  ngOnInit(): void {
  }
  // doSearch(srch: string) {
  //    console.log(this.pkgArr.includes(srch));
  //   }
  
  
  addPackage(pkg: PackageDetails) {
    
    if (this.tmpArr.includes(pkg)) {
      const ind = this.tmpArr.indexOf(pkg);
      this.tmpArr.splice(ind, 1);
      this.count--;
    }
    else {
      this.tmpArr.push(pkg);
      this.count++;
    }

  }
  doThis() {
    if (this.count == 2)
      this.print = true;
  }
  search(key:string) {
    this.pkgArr = this.pkgArr.filter((p)=>p.packageName.toUpperCase().includes(key.toUpperCase()))
  }

}
