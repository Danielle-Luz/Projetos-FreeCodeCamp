import logo from "../img/react-icon.png";
export default function Header () {
    return (
        <header className="flex sp-between f-column ai-center bg-escuro">
            <div className="flex ai-center">
                <img src={logo} width="30px"/>
                <h2 className="c-blue">ReactFacts</h2>
            </div>
            <div>
                <h3>React Course - Project 1</h3>
            </div>
        </header>
    );
}