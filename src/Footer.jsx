
function Footer(){
    const styles = {
        textAlign: 'center'
    }

    return(<footer>
        <p style={styles}>&copy; {new Date().getFullYear()} Giorgi Karchiladze</p>
    </footer>)

}

export default Footer;