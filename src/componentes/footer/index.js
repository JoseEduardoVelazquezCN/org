import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(img/footer.png)"}}>
        <div className='redes'>
            <a href='https://www.aluracursos.com'>
                <img src="/img/facebook.png" alt="facebook"></img>
            </a>
            <a href='https://www.aluracursos.com'>
                <img src="/img/twitter.png" alt="x"></img>
            </a>
            <a href='https://www.aluracursos.com'>
                <img src="/img/instagram.png" alt="instagram"></img>
            </a>
        </div>
        <img src="/img/Logo (1).png" alt="Org"></img>
        <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer