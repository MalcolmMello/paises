import * as C from './styles'
import logo from '../../movalogo.png'
import back from '../../getback.png'
import { useNavigate } from 'react-router-dom'



export const Header = () => {
    let navigate = useNavigate()

    const BackMain = () => {
        navigate('/')
    }
    
    return (
        <C.Container>
            <img src={logo} alt="" />
            <C.GetBack onClick={BackMain}>
                <img src={back} alt="" />
                <p>Come Back</p>
            </C.GetBack>
        </C.Container>
    )
}