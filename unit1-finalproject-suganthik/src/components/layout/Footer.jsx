function Footer(){
    const year = new Date().getFullYear();
    return(
        <div>
        <footer>
            <p>&copy;{ year } Nirtya by Teachers name copyrights reserved.</p>
        </footer>
        </div>
    );
}
export default Footer;