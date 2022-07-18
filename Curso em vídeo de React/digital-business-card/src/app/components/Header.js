export default function Header () {
    return (
        <header>
            <img className="header-foto" width="100%" src="https://i.imgur.com/X3qnI6C.png" alt="mulher parda e jovem com o cabelo castanho e blusa vermelha, sorrindo"/>
            <section>
                <article className="flex center column">
                    <h1>Danielle Luz</h1>
                    <h2>Programadora full-stack em formação</h2>
                    <a href="" className="header-website">
                        danielleluz.website
                    </a>
                </article>
                <nav>
                    <ul className="flex center">
                        <li>
                            <a href="mailto:daniln2209@gmail.com" className="b-email">
                                Email
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/danielle-da-luz-nascimento/" className="b-linkedin">
                                Linkedin
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}