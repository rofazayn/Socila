import * as Yup from 'yup';

const vSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email.')
    .required('Email address is required.'),
  password: Yup.string()
    .required('Password is required.')
    .min(6, 'Password is too short.')
    .max(50, 'Password is too long.'),
  // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  remember: Yup.boolean()
});

export default vSchema;
