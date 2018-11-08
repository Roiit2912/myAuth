import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import {FormsModule} from '@angular/forms';
import { TestService } from '../test.service';
import { Router } from '@angular/router';
import {MyToken} from '../my-token';


@Component({
  selector: 'app-sme',
  templateUrl: './sme.component.html',
  styleUrls: ['./sme.component.css']
})
export class SmeComponent implements OnInit {
  
  myBool:any=false;

  registerForm: FormGroup;
  registerForm1:FormGroup;
  submitted = false;
  submitted1=false;

  constructor(private formBuilder: FormBuilder,private http:HttpClient, private test:TestService,private router:Router) { }


  ngOnInit() {

   this.registerForm = this.formBuilder.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
});


this.registerForm1 = this.formBuilder.group({
    //firstName: ['', Validators.required],
    securityKey:['',Validators.required],
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
});

   
  }

  get f() { return this.registerForm.controls; }

  get f1() { return this.registerForm1.controls; }

    onSubmit(signIn) {
        this.submitted = true;
    
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

       this.test.smeSignIn(signIn).subscribe(response => (myfun(response)));

       function myfun(response)
      {
        if(response=="user does not exist")
        {
          alert('user does not exist');
        }
        else if(response=="Password entered is not correct")
        {
          
          alert("Password entered is not correct");
        }

        else if(response=="You are a learner, Please sign in through learner page")
        {
          alert("You are a learner, Please sign in through learner page");
        }
        else if(response=="Invalid state")
        {
          alert("Invalid state");
        }
       else
        {
          let mytoken = response as MyToken;
          var smeToken= mytoken.token;
          console.log(mytoken.token);
          localStorage.setItem("SME_TOKEN",smeToken);  
          alert("Succesful login");
          window.location.href = "https://roiit2912.github.io/angular-assignment/search";
  
        }
      }
        
    }

    onSubmit1(signUp) {
      this.submitted1 = true;

      // stop here if form is invalid
      if (this.registerForm1.invalid) {
          return;
      }

      //console.log( signUp.securityKey);
      
      this.test.smeSignUp(signUp).subscribe(token => (myfun(token.toString())));

      function myfun(token)
      {
        if(token=="User already exist")
        {
          alert("User already exist");
        }
        else if(token=="Wrong Security Key entered")
        {
          
          alert("Wrong Security Key entered");
        }

       else if(token="Success")
        { 
          alert("Succesfully Registerd");
        }

        else{
          alert("Invalid state");
        }

      }

     
      
  }


}
