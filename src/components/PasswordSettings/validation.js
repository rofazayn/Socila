import * as Yup from 'yup';

const vSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('New password field is required.')
    .min(6, 'New password must be atleast 6 characters long.')
    .max(50, "New password mustn't exceed 50 characters long."),
});

export default vSchema;
