import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'
import './FormularioContact.scss'

const FormularioContact = () => {
  const initialValues = {
    name: "",
    apellido: "",
    email: "",
    asunto: "",
  }
    const formik = useFormik({
        initialValues: {initialValues},
        validationSchema: Yup.object({
          name: Yup.string(),
          apellido: Yup.string(),
          email: Yup.string()
          .email('email no valido')
          .required('Campo obligatorio'),
          asunto: Yup.string()
          .required('Campo obligatorio'),
        }),
        onSubmit: values => {
           emailjs.send('service_wk7oipo', 'template_p1om6xp', values, 'ByxGvfOOiYG4nJvWS')
           .then((response) => {
           console.log("SUCCESS!", response.status, response.text);
           toast.success('Enviado Correctamente', {
            duration: 10000,
           })
           values = initialValues;      
        // navigate("/");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error('UP! Algo salio mal')
      });
          /*try {
            console.log(values)
            toast.success('Enviado Correctamente')
          } catch (error) {
            
            toast.error('UP! Algo salio mal')
          }*/
          
      
        }
    })
  return (
    <Form className='form-contact' onSubmit={formik.handleSubmit}>
        <div className='welcome-wrapper'>
          <p className='welcome-text'>Formulario de contacto:</p>
        </div>
        <div className='nombre-apellido' >
          <label>
          Nombre:
          <Form.Input 
            className='nombre'
            type='text'
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
             />
          </label>

          <label>
            Apellido:
          <Form.Input 
            className='apellido'
            type='text'
            name='apellido'
            value={formik.values.apellido} 
            onChange={formik.handleChange}
            error={formik.errors.apellido}
             />
          </label>
        </div>
        <div className='correo-asunto'>  
        <label>
          *Correo:
        <Form.Input
            type='text'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
            />
        </label>

        <label>
          *Asunto:
        <Form.Input
            type='text'
            name='asunto'
            value={formik.values.asunto}
            onChange={formik.handleChange}
            error={formik.errors.asunto}
            />
        </label>
        </div>
        <motion.button 
        className='btn-submit' 
        type='submit'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        >Enviar</motion.button>
        <Toaster 
        containerStyle={{
          position: 'relative', 
        }}
        toastOptions={{
          success: {
            style: {
            border: '1px solid green',
            minWidth: '350px',
            }
          }
        }}/>
    </Form>
  )
}

export default FormularioContact