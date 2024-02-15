import logo from '../assets/investment-calculator-logo.png';

function Header(){
    return(
        <header id="header">
            <img src={logo} alt="img having money bag"></img>
            <h1>Investment calculator</h1>
        </header>
    );
}

export default Header;