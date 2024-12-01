import sns1 from "../assets/sns1.png"
import sns2 from "../assets/sns2.png"
import sns3 from "../assets/sns3.png"
import sns4 from "../assets/sns4.png"

export const footerData = {
    company: {
        name: "Cosmetic Company",
        description: "Leading the industry with innovative solutions and exceptional services since 2020.",
        address: "123 Main Street, Suite 100, Your City, Your Country",
        phone: "+1 (123) 456-7890",
        email: "info@yourcompany.com",
    },

    socialMedia: [
        {
            platform: "Kakao",
            url: "https://www.kakaocorp.com/page/",
            icon: sns1
        },
        {
            platform: "Youtube",
            url: "https://www.youtube.com/",
            icon: sns2
        },
        {
            platform: "Facebook",
            url: "https://www.facebook.com/",
            icon: sns3
        },
        {
            platform: "Instargram",
            url: "https://www.instagram.com/",
            icon: sns4
        },
    ],
    copyright: {
        text: "© 2024 Your Company Name. All rights reserved.",
    },
};

export default footerData;
