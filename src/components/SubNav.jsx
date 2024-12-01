import './styles/SubNav.css'
import { Link } from 'react-scroll'
import navData from "../util/navData"
import { content } from "../util/constants"
import { useEffect, useRef, useState,memo } from 'react'
import { gsap } from 'gsap'

const SubNav = memo(({ headerState }) => {
    const nav = navData
    const banner = content.product.items
    const subNavRef = useRef(null)

    const [contentVisible, setContentVisible] = useState(false)

    useEffect(() => {
        const element = subNavRef.current
        if (!element) return

        if (headerState) {
            setContentVisible(true) // 콘텐츠 표시 준비
            gsap.to(element, {
                duration: 0.3,
                y: '0%',
                opacity: 1,
                display: 'flex',
                ease: 'power1.out',
            })
        } else {
            gsap.to(element, {
                duration: 0.3,
                y: '-50%',
                opacity: 0,
                ease: 'power1.in',
                onComplete: () => {
                    setContentVisible(false) // 콘텐츠 숨김
                },
            })
        }
    }, [headerState])

    return (
        <div className="SubNav" ref={subNavRef} >
            {contentVisible && (
                <div className="in_wrap">
                    <div className="banner_wrap">
                        {banner.map((item, index) => {
                            if (index === 0 || index === 1) {
                                return (
                                    <div key={index} style={{ backgroundImage: `url(${item.image})` }}>
                                        <a href="#">
                                            <span>{item.name}</span>
                                        </a>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <ul className="depth1_nav">
                        {nav.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.title}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-50}
                                    activeClass="active"
                                >
                                    {item.title}
                                </Link>
                                {item.subMenu && (
                                    <ul className="depth2_nav">
                                        {item.subMenu.map((subItem) => (
                                            <li key={subItem.id}>
                                                <a href="#">{subItem.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
})

export default SubNav
