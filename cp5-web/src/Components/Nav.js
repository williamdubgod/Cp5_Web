import {Link} from 'react-router-dom'
import '../App.css'
import '../Components/Css/style.css'

export default function Nav() {

    return(
        <div id="menu-nav">
            <nav id='navegador'>
                <h1>
                    <Link to="/">Porco Mania</Link>
                </h1>

                <ul>
                    <li>
                        <Link to="/roupas">Roupas</Link>
                    </li>
                    <li>
                        <Link to="/calcados">Calçados</Link>
                    </li>
                    <li>
                        <Link to="/acessorios">Acessórios</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

}