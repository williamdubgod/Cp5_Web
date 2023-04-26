import {Link} from 'react-router-dom'
import '../App.css'
import '../Components/Css/style.css'

export default function Nav() {

    return(
        <div id="menu-nav">
            <nav id='navegador'>
                <h1>
                    <Link to="/">Sportsware</Link>
                </h1>

                <ul>
                    <li>
                        <Link to="/Camisas">Camisas</Link>
                    </li>
                    <li>
                        <Link to="/Calcas">Calças</Link>
                    </li>
                    <li>
                        <Link to="/Acessorios">Acessórios</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

}