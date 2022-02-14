import * as Yup from 'yup';

export const formData = {
  name: '',
  father_lastname: '',
  mothers_lastname: '',
  birthname: '',
  phone_number: '',
  email: '',
  street: '',
  int_number: '',
  ext_number: '',
  neighborhood: '',
  city: '',
  password: '',
  confirmPassword: '',
};

export const validate = Yup.object({
  name: Yup.string().required('Este campo es requerido'),
  father_lastname: Yup.string().required('Este campo es requerido'),
  mothers_lastname: Yup.string().required('Este campo es requerido'),
  birthname: Yup.string().required('Este campo es requerido'),
  phone_number: Yup.string().required('Este campo es requerido'),
  email: Yup.string()
    .required('Este campo es requerido')
    .email('Por favor ingrese un correo valido'),
  street: Yup.string().required('Este campo es requerido'),
  ext_number: Yup.string().required('Este campo es requerido'),
  neighborhood: Yup.string().required('Este campo es requerido'),
  city: Yup.string().required('Este campo es requerido'),
});

export const validatePassword = Yup.object({
  name: Yup.string().required('Este campo es requerido'),
  father_lastname: Yup.string().required('Este campo es requerido'),
  mothers_lastname: Yup.string().required('Este campo es requerido'),
  birthname: Yup.string().required('Este campo es requerido'),
  phone_number: Yup.string().required('Este campo es requerido'),
  email: Yup.string()
    .required('Este campo es requerido')
    .email('Por favor ingrese un correo valido'),
  street: Yup.string().required('Este campo es requerido'),
  ext_number: Yup.string().required('Este campo es requerido'),
  neighborhood: Yup.string().required('Este campo es requerido'),
  city: Yup.string().required('Este campo es requerido'),
  password: Yup.string().required('Este campo es requerido'),
  confirmPassword: Yup.string()
    .required('Este campo es requerido')
    .oneOf([Yup.ref('password'), null], 'Ingrese de nuevo la contraseña.'),
});
