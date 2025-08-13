import '../../../styles/Footer.css'
const Footer=() => {
    return(
        <footer>
    <div className="f-info">
        
        <div className="f-info-name"> &copy; CareHub Private Limited</div>
        <div className="f-info-link">
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <a href="">Company Details</a>
        </div>
        <div className="f-info-social">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>

        </div>
    </div>
</footer>
    );
}
   
export default Footer;