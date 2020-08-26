import * as Yup from 'yup';

const vSchema = Yup.object().shape({
  newEmail: Yup.string()
    .email('Enter a valid new email.')
    .required('New email address is required.'),
});

export default vSchema;
