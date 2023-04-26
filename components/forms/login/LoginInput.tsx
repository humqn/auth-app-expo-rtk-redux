
import React, { FunctionComponent } from 'react';
import {
  Text,
} from 'react-native';
import { Input } from 'react-native-elements';
import { TextField } from '../TextField';
const LoginInput: FunctionComponent<React.ComponentProps<typeof Input>> = ({...props}) => {
  return (
    <>
      <Text>Identifiant</Text>
      <TextField name='login' placeholder='Identifiant' {...props}/>
    </>
  );
};



export default LoginInput;
