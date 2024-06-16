import styles from "./Header.module.css"

function Header () {
    return(
        <header className={styles.Header}>
            <div className="test">
            <img src="./imagens/E.png" alt="" />
            </div>
            <nav>
                <a href="">Criar Evento</a>
                <a href="">Meus Eventos</a>
                <a href=""><img src="/imagens/sino.png" alt="" /></a>
                <a href=""><img src="/imagens/Grup3.png" alt="saida" /></a>
            </nav>
        </header>

    )
}

export default Header