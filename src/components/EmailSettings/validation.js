import * as Yup from 'yup';

const vSchema = Yup.object().shape({
  newEmail: Yup.string()
    .email('Enter a valid email.')
    .required('Email address is required.'),
});

export default vSchema;
