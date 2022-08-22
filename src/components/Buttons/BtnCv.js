//import { motion } from 'framer-motion'
import pdf from '../../assets/CV-JesusDamianFront.pdf'
import './Buttons.scss'

function BtnCv() {
    return(
        <a href={pdf} target='_blank' rel='noreferrer' download='CVDamian.pdf'>
            <button className='btn-cv'>DescargarCV</button>
        </a>
    )
}

export default BtnCv