import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormControl, FormGroup, ReactiveFormsModule , Validators} from '@angular/forms';
import { warn } from 'console';


@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  
formData = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [
    Validators.required,
    Validators.email
  ]),
  message: new FormControl('', Validators.required)
});

  sendEmail() {

 if(this.formData.invalid){
      console.log('Form Invalid');
  return;
 }
  const data = {
    from_name: this.formData.value.name,
    from_email: this.formData.value.email,
    message: this.formData.value.message
  };
   emailjs.send(
    'service_48drd7b',
    'template_dfds69k',
    data,
    'rzE5vXcwkJ39X18cZ'
  ).then(()=>{
    alert('message sent successfully');
    this.formData.reset();
  }
  
).catch((err)=>{
  console.log(err);
  alert('Failed!!!');

})

  }
}
