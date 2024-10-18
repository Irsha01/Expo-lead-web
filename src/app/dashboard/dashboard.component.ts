import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private subscription!:Subscription;
  allColors = [];
  rows=6
  name:string=''
  age!:number
  stopwatchvalue =0
  data = [
    { a: 'happy', b: 'robin', c: ['blue', 'green'] },
    { a: 'tired', b: 'panther', c: ['green', 'black', 'orange', 'blue'] },
    { a: 'sad', b: 'goldfish', c: ['green', 'red'] }
];

 array = [
  {
    "City": "New York",
    "Country": "USA",
    "number": [1, 3, 5]
  },
  {
    "City": "London",
    "Country": "UK",
    "number": [5, 4, 8]
  }
];

arrayval =[
  {id:1, number: [1,2,3]},
     {id: 2, number: [11,24,31]},
      {id: 3, number: [41,25,93]}
    ];
rating: number = 0;
  stars: boolean[] = Array(5).fill(false);

  rate(rating: number): void {
    this.rating = rating;
  }

userData = {
  name: '',
  age: null,
  gender: '',
  hobbies:[] as string[],
  terms: false
};
userRecords: any[] = []; 
newHobby : string =''
ageOptions: number[] = [];
  filteredRecords: any[]=[];
constructor(){
  this.ageOptions = this.generateAgeOptions(18, 99);
  const color = this.data.map(item=>item.c).flat();
 console.log(color);
 const output = this.array.flatMap(obj => obj.number);
console.log(output);

const arrayvalout = this.arrayval.flatMap(arr=>arr.number)
const arrayvalout1 = this.arrayval.map(arr=>arr.number).flat();
console.log('arrayval',arrayvalout)
console.log('arrayval111',arrayvalout1)
}

startwatch(){
  this.subscription = interval(1000).subscribe(()=> {
  this.stopwatchvalue +=1000;
  })
}

stopwatch(){
  this.subscription.unsubscribe();
}

resetwatch(){
  this.stopwatch()
  this.stopwatchvalue=0;
}

range(n:number){
  return [...Array(n).keys()].map(i=>i+1);
}


generateAgeOptions(start: number, end: number): number[] {
  const options: number[] = [];
  for (let i = start; i <= end; i++) {
    options.push(i);
  }
  return options;
}

addHobby() {
  if (this.newHobby.trim() !== '') {
    this.userData.hobbies.push(this.newHobby.trim());
    console.log('hobby',this.userData.hobbies)
    this.newHobby = ''; // Clear the new hobby input field
  }
}

removeHobby(index: number) {
  this.userData.hobbies.splice(index, 1);
}

deleterow(index:number){
  this.userRecords.splice(index,1);
  this.filteredRecords=this.userRecords
}

submitForm(form: any) {
 
  if (form.valid) {
    console.log('formvalue',form.value)
    this.userData.name = form.value.name;
    this.userData.age = form.value.age;
    this.userData.gender = form.value.gender;
    
    if(form.value.newHobby!=''){
      this.userData.hobbies.push(form.value.newHobby)
    }
   // this.userData.hobbies = form.value.hobbies;
    this.userData.terms = form.value.terms;
   // this.userData.hobbies = [];
    for (let key in form.value) {
      if (key.startsWith('hobbies')) {
        this.userData.hobbies.push(form.value[key]);
      }
    }
    // Push userData into userRecords array
    this.userRecords.push({...this.userData});
    this.filteredRecords = this.userRecords;
    console.log('records',this.userRecords);
    console.log('values',this.userRecords);
    
  form.reset();
  this.userData.hobbies = [];
  }
}
 reset(form: any){
  form.reset();
 }

 


searchQuery = '';

search() {
  console.log(this.userRecords);
  console.log('Search query:', this.searchQuery);
  this.userRecords = this.filteredRecords.filter(user =>
    user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
}

}
