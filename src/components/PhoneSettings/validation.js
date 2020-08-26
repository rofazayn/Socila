import * as Yup from 'yup';

const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const vSchema = Yup.object().shape({
  newPhone: Yup.string()
    .matches(phoneRegex, 'Please enter a valid phone number.')
    .required('New phone number field is required.'),
});

export default vSchema;
