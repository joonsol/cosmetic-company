import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./styles/Product.css"
import { content } from "../util/constants"
import { gsap } from "gsap";
import useGsapAnimation from "../hooks/useGsapAnimation";
const Product = (params) => {
    const productContent = content.product


    return (
        <div className="Product">
            <div className="in_wrap">
                <div className="t_wrap">

                    <h1>{productContent.title}</h1>
                    <p>{productContent.description}</p>
                </div>
            </div>
            <Splide
                options={{
                    type: "loop", // 무한 반복
                    autoplay: true, // 자동 재생
                    interval: 5000, // 슬라이드 전환 간격 (ms)
                    arrows:false,
                    perPage: 5,
                    perMove: 1,
                    gap:"2rem",
                    pauseOnFocus:true,
                    pagination:false,
                    breakpoints: {
                        768: { perPage: 2, gap: "10px" }, // 768px 이하에서 perPage를 2로 설정
                        480: { perPage: 1, gap: "5px" },  // 480px 이하에서 perPage를 1로 설정
                    }
                }}

            // 중앙 정렬
            >
                {productContent.items.map((item, index) => (
                    <SplideSlide key={index}>
                            <div className="t_wrap"

                               >
                                <div className="img_wrap">
                                  <img src={item.image}  />

                                </div>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </div>

                    </SplideSlide>

                ))}
            </Splide>

        </div>
    )
}
export default Product
