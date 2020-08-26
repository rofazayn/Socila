import * as Yup from 'yup';

const vSchema = Yup.object().shape({
  newUsername: Yup.string()
    // .email('Enter a valid new email.')
    .required('New username field is required.'),
});

export default vSchema;
