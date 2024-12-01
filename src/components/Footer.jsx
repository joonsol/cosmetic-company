import footerData from "../util/footerData"
import { Link } from 'react-scroll'
import { content } from "../util/constants"
import navData from "../util/navData"
import "./styles/Footer.css"
const Footer = (params) => {
    const nav =navData
    return (
        <footer className="Footer">
            <div className="in_wrap">
                <div className="l_wrap">

                    <div className="footer-company">
                        <h2>{footerData.company.name}</h2>
                        <p>{footerData.company.description}</p>
                        <address>
                            {footerData.company.address}
                            <br />
                            <a href={`tel:${footerData.company.phone}`}>{footerData.company.phone}</a>
                            <br />
                            <a href={`mailto:${footerData.company.email}`}>{footerData.company.email}</a>
                        </address>
                    </div>
                    <div className="footer-copyright">
                       {footerData.copyright.text}
                    </div>
                </div>

                <ul className="c_wrap">
                {nav.map((item, index) => (
                    <li key={item.id || index}>
                        <Link
                            to={item.title}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-50} // 스크롤 위치를 기준으로 오프셋 조정
                            activeClass="active"
                        >{item.title}</Link>
                        {item.subMenu && (
                            <ul>
                                {item.subMenu.map((subItem, subIndex) => (
                                    <li key={subItem.id}>
                                        <a href='#'      >
                                            {subItem.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}

                    </li>
                ))}
                </ul>

                <div className="r_wrap">



                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <ul>
                            {footerData.socialMedia.map((social, i) => (
                                <li key={i}>
                                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                                        <img src={social.icon} alt={social.platform} />

                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>


        </footer>
    )
}
export default Footer
