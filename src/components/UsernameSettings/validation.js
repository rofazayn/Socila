import * as Yup from 'yup';

const usernameRegex = /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

const vSchema = Yup.object().shape({
  newUsername: Yup.string()
    .min(6, 'New username must be atleast 6 characters long.')
    .max(20, 'New username must not exceed 20 characters long.')
    .matches(usernameRegex, 'Please enter a valid new username.')
    .required('New username field is required.'),
});

export default vSchema;
