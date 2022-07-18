import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

export default function App () {
    return (
        <div className="container bg-container-escuro">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}