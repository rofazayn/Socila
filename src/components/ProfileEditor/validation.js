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
});

export default vSchema;
