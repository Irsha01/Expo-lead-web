import { Component } from '@angular/core';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css']
})
export class LeftsideComponent {

userdata ={
  name : '',
  age : '',
  gender :'',
  hobbies: [] as string[]
}
newhobby =''
ages=[] as number[]
userrecords :any=[]
  filterreords: any;

constructor(){
this.ages = this.calculateages(18,99)
}


calculateages(start:number, end:number){
  const options: number[] =[]

  for (let i=start; i<=end;i++){
    options.push(i)
  
  }
  return options
}
  submitform(form:any){
if(form.valid){
console.log('form',form.value)
  this.userdata.name =form.value.name
  this.userdata.age =form.value.age
  this.userdata.gender =form.value.gender
  if(form.value.newhobby!=''){
    this.userdata.hobbies.push(form.value.newhobby)
  }
  for(let key in form.value){
    if(key.startsWith('hobbies')) {
      this.userdata.hobbies.push(form.value[key])
    }
  }
this.userrecords.push({...this.userdata})
this.filterreords =this.userrecords
form.reset();
this.userdata.hobbies = [];
}


  }

  removehobby(index:number) {
    this.userdata.hobbies.splice(index,1);
  }
  addhobby(){
if(this.newhobby.trim() !=='') {
  this.userdata.hobbies.push(this.newhobby)
}
this.newhobby=''
  }
  searchQuery=''
  searchopt(){
  this.userrecords= this.filterreords.filter((item: { name: string; })=> item.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
}

}
