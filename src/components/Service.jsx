import "./styles/Service.css"
import { content } from "../util/constants"
const Service = (params) => {
    const serviceContent = content.service


    return (
        <div className="Service">
            <div className="in_wrap">
                <div className="t_wrap">
                    <h1>{serviceContent.title}</h1>
                    <p>{serviceContent.description}</p>
                </div>
                <ul className="service_list">
                    {serviceContent.offerings.map((item, i) => (
                        <li key={i}>

                            <h4>{item.name}</h4>
                            <p>{item.details}</p>

                            <div className="icon_wrap">

                                <span className="material-symbols-outlined">
                                    {item.icon}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
export default Service
