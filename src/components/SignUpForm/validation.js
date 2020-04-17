import * as Yup from 'yup';

const vSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    // .matches(
    //   /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/,
    //   'Please enter your real name.'
    // )
    .min(2, 'First name is too short.')
    .max(80, 'First name is too long.'),
  lastName: Yup.string()
    .required('Last name is required')
    // .matches(
    //   /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/,
    //   'Please enter your real name.'
    // )
    .min(2, 'Last name is too short.')
    .max(80, 'Last name is too long.'),
  username: Yup.string()
    .required('Username is required')
    // .matches(
    //   /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    //   'Letters and numbers only'
    // )
    .min(6, 'Username is too short.')
    .max(30, 'Username is too long.'),
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
    .required('Agreement checkbox is required'),
});

export default vSchema;
