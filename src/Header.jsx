
function Header({ changeSection }){
    return(
        <header>
            <nav className="header-nav">
                <h1 className="header-nav-h1">Giorgi Karchiladze's CV</h1>
                <ul className="nav-buttons">
                    <li><a href="#" onClick={(e) =>
                    { e.preventDefault(); changeSection("AboutMe"); }}>About Me</a></li>
                    <li><a href="#" onClick={(e) =>
                    { e.preventDefault(); changeSection("Projects"); }}>Projects</a></li>
                    {/*<li><a href="#" onClick={(e) =>*/}
                    {/*{ e.preventDefault(); changeSection("Education")}}>Skills</a></li>*/}
                </ul>
            </nav>
        </header>
    )
}

export default Header