import './styles/Nav.css'
import { Link, } from 'react-scroll'
import navData from "../util/navData"

// import SubNav from './SubNav'
const Nav = ({ onClickSub }) => {
    const nav = navData





    return (

        <nav>
            <ul>
                {nav.map((item, index) => (
                    <li
                        key={index}
                    >
                        <Link
                            to={item.title}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-50} // 스크롤 위치를 기준으로 오프셋 조정
                            activeClass="active"
                        >{item.title}</Link>
                        {item.subMenu && (
                            <ul >
                                {item.subMenu.map((subItem) => (
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
            <button onClick={onClickSub}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    )
}
export default Nav
