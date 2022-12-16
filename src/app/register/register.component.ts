import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators }  from '@angular/forms';
// import des classe néçessaire pour les formulaires
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// declare une Vr Type FormGroup qui sera notre controleur
  formControler!: FormGroup;



  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
      this.formControler = this.formBuilder.group({
        _nom: ['',
          [Validators.required,
          Validators.maxLength(10),]
        ],

        _prenom: ['',
          [Validators.required,
            Validators.maxLength(10)]
        ],

        _email: ['',
          [Validators.required,
            Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),]

        ],

        _password: ['',
          [Validators.required,
            Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/)],

        ],

        _passwordControl: ['',
         [Validators.required,
          Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/)],

        ]


      })
  }




  get _nom(){
    return this.formControler.get('_nom');
  }

  get _prenom(){
    return this.formControler.get('_prenom');
  }

   get _email(){
    return this.formControler.get('_email');
  }

    get _password(){
    return this.formControler.get('_password');
  }

   get _passwordControl(){
    return this.formControler.get('_passwordContol');
  }








  submit(){

    if (this.formControler.valid /*&& this._password?.value  == this._passwordControl?.value*/)
    {
      alert("Inscription valider");
    }
    else
    {
      alert("l'un des Champs renseigner n'est pas valide ou manquant");
    }

 }

  }














// }
//    Error = '_nom';
// switch (Error: string) {
//   case '_prenom':
//     console.log('errorName');
//     break;
//   case 'email':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     break;
//   default:
//     console.log();
// }
