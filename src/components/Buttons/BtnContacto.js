import { Link } from 'react-router-dom'
import './Buttons.scss'

function BtnContacto () {
    return(
        <Link exact='true' to='/Contact'>
            <button className='btn-contacto'>Contactarme</button>
        </Link>
    )
}

export default BtnContacto