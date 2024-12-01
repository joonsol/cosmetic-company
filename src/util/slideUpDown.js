import { gsap } from 'gsap'

export const slideUp = (element, duration = 0.3) => {
    if (!element) return

    gsap.to(element, {
        duration, // 애니메이션 지속 시간 (초 단위)
        y: '-80%', // 위로 슬라이드
        opacity: 0, // 투명하게 처리
        ease: 'power1.out', // 부드러운 전환
        onComplete: () => {
            element.style.display = 'none' // 애니메이션 종료 후 숨김
        },
    })
}

export const slideDown = (element, duration = 0.3) => {
    if (!element) return

    element.style.display = 'block' // 표시 상태로 변경

    gsap.fromTo(
        element,
        {
            y: '-80%', // 시작 위치 (화면 밖 위쪽)
            opacity: 0, // 투명한 상태로 시작
        },
        {
            duration, // 애니메이션 지속 시간
            y: '0%', // 제자리로 슬라이드
            opacity: 1, // 완전히 보이게 처리
            ease: 'power1.in', // 부드러운 전환
        }
    )
}
