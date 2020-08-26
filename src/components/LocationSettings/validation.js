import * as Yup from 'yup';

const vSchema = Yup.object().shape({
  newLocation: Yup.string()
    .min(2, 'New location must be atleast 2 characters long.')
    .max(30, "New location mustn't exceed 30 characters long.")
    .required('New phone number field is required.'),
});

export default vSchema;
