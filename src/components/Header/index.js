import * as C from './styles'
import logo from '../../movalogo.png'
import back from '../../getback.png'

export const Header = () => {
    return (
        <C.Container>
            <img src={logo} alt="" />
            <C.GetBack>
                <img src={back} alt="" />
                <p>Voltar</p>
            </C.GetBack>
        </C.Container>
    )
}