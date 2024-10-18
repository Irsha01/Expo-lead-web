import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.css']
})
export class RightsideComponent implements OnInit{
userForm !:FormGroup
 ages=[] as number []
 ages1: number[] = Array.from({ length: 100 }, (_, i) => i + 1);
 searchQuery=''
 newHobbyControl: FormControl
userrecords:any=[]
  constructor (private formbuilder:FormBuilder){
    this.ages=this.calculate(18,99)
    this.newHobbyControl=new FormControl('', Validators.required);
    console.log(this.ages)
    console.log(this.ages1)
   
  }

  ngOnInit(): void {
    this.userForm=this.formbuilder.group({
      name :['',Validators.required],
      age :['',Validators.required],
      gender :['',Validators.required],
      hobbies :this.formbuilder.array([]),
      terms: [false, Validators.requiredTrue]
    })
  }

  calculate(start:number, end:number) {
    const options:number[] =[]
    for (let i=start; i<=end; i++) {
      options.push(i)
    }
    return options
  }
 

  get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  removehobby(index:number){
this.hobbies.removeAt(index)
  }
  addhobby(){
    if (this.newHobbyControl.valid) {
      this.hobbies.push(this.newHobbyControl);
      this.newHobbyControl = new FormControl('', Validators.required); // Reinitialize for the next hobby
    }
  }
  searchopt(){

  }
  submitform(){
  if(this.userForm.valid){
console.log(this.userForm.value)
this.userrecords.push(this.userForm.value)
  }

  }
}
