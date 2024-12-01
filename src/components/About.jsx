import "./styles/About.css"
import { content } from "../util/constants"
import Button from './Button'
import { gsap } from "gsap";
import { useRef,memo } from "react";
import useGsapAnimation from "../hooks/useGsapAnimation";
const About = memo((params) => {
    const aboutContent= content.about

    const aboutRef = useGsapAnimation(

        {
            from: { opacity: 0, y: 50 },
            to: { opacity: 1, y: 0, duration: .4 ,stagger:.2},
        },
        {
            start: "top 80%", // 트리거 시작 위치
            end: "bottom 60%", // 트리거 종료 위치
            toggleActions: "play none none none", // 애니메이션 트리거 액션
        }
    );
return(
    <div className="About">
        <div className="in_wrap">
        <div className="t_wrap">
                <h2>{aboutContent.title}</h2>
                <p>{aboutContent.description}</p>
                <Button text={"View more"} type={"Bl"}/>
            </div>
        <ul className="vision_list">
                {aboutContent.vision.map((item,i)=>(
                    <li key={i}  ref={aboutRef}>
                        <div className="img_wrap" style={{backgroundImage:`url('${item.image}')`}}>

                        </div>
                        <div className="t_wrap">

                        <h4>
                        {item.title}
                        </h4>
                        <p>{item.text}</p>
                        </div>
                    </li>

                ))}
            </ul>


        </div>
    </div>
)
})
export default About
