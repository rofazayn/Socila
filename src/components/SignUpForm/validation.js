import * as Yup from 'yup';

const vSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Enter your full name.')
    .max(80, 'Name is too long.'),
  email: Yup.string()
    .email('Enter a valid email.')
    .required('Email address is required.'),
  password: Yup.string()
    .required('Password is required.')
    .min(6, 'Password is too short.')
    .max(50, 'Password is too long.'),
  // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  agreed: Yup.bool()
    .oneOf([true], 'You must agree to the terms.')
    .required('Agreement checkbox is required')
});

export default vSchema;
