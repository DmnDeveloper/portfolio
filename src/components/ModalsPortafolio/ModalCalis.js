import homecali from '../../assets/homeCal.png'
import imgnav from '../../assets/navbar.png'
import { BtnCode, BtnView} from '../Buttons/BtnsModal'
import './ModalStyle.scss'

const ModalCalis = () => {
  return (
    <>
    <p className='txt-one'>Cuenta con diseño responsivo desde telefonos celular hasta laptops.</p>
    <div className='img-one'><img src={homecali} alt=''/></div>
    <p className='txt-two'>Algunas de las tecnologias utilizadas son: react,sass , react-router-dom, formik, yup, y emailJS para el formulario de contacto </p>
    <div className='img-two'><img  src={imgnav} alt=''/></div>
    <div className='container-btns'>
        <BtnCode 
        link={'https://github.com/DmnDeveloper/calistenia-gdl-mexico'}/>
        <BtnView 
        link={'https://dmndeveloper.github.io/calistenia-gdl-mexico/'}/>
    </div>
    </> 
  )
}

export default ModalCalis