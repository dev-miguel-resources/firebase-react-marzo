import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';

import { signInWithGoogle } from '../../firebase/firebase.utils'; 

import './sign-in.styles.scss';

class SignIn extends React.Component {
   constructor(props) {
       super(props);

       this.state = {
           email: '',
           password: ''
       };
   }

   render() {
       return (
           <p>Hola soy el SignIn</p>
       );
   }
}

export default SignIn;
