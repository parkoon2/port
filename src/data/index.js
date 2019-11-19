// ------- 프로필 -------
export const profile = {
    title: `I'm <span>Jong Hyeok Park</span>`,
    subtitle: 'Frontend & Backend Developer',
    age: '90년생',
    address: '경기도 남양주시 와부읍 덕소리',
    email: 'devparkoon@gmail.com',
    phone: '010. 3329. 0917'
    // hobbies: ['개발 스택 쌓기', '테니스', '헬스', '음주가무']
}

// ------- 소셜 -------
export const social = [
    {
        title: 'github',
        icon: 'mdi-github-box',
        link: 'https://github.com/parkoon'
    },
    {
        title: 'linkedin',
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/devparkoon'
    },
    {
        title: 'blog',
        icon: 'mdi-blogger',
        link: 'https://devparkoon.tistory.com/'
    },
    {
        title: 'instagram',
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/devparkoon'
    }
]

// ------- 사이드 프로젝트 -------
export const sideProjects = [
    {
        id: v1(),
        title: '2019 포트폴리오',
        subtitle: 'updated at 2019',
        demo: 'https://devparkoon.me',
        git: 'https://github.com/parkoon/port',
        image: require('../assets/projects/homepage/homepage-1.jpg'),
        delay: 0
    },
    {
        id: v1(),
        title: '테트리스',
        subtitle: 'React & React hook',
        demo: 'https://parkoon.github.io/react-tetris/',
        git: 'https://github.com/parkoon/react-tetris',
        image: require('../assets/projects/tetris/tetris-1.jpg'),
        delay: 200
    },
    {
        id: v1(),
        title: 'CSS Layout practice',
        subtitle: 'feat, nomard corder',
        demo: 'https://parkoon.github.io/css-real-world',
        git: 'https://github.com/parkoon/css-real-world',
        image: require('../assets/projects/css-real-world.jpg'),
        delay: 400
    },
    {
        id: v1(),
        title: 'Clone Coding (Megabox)',
        subtitle: 'React & Context API',
        demo: 'https://parkoon.github.io/cc-nexon',
        git: 'https://github.com/parkoon/cc-nexon',
        image: require('../assets/projects/clone-megabox.jpg'),
        delay: 600
    },
    {
        id: v1(),
        title: 'Window 95 style portfolio',
        subtitle: 'React & Next',
        demo: '',
        git: 'https://github.com/parkoon/window95',
        image: require('../assets/projects/window95.jpg'),
        delay: 800
    }
]

// ------- 메인 프로젝트 -------
import { v1 } from 'uuid'
export const mainProjects = [
    {
        id: v1(),
        title: 'LG AI 매장 데모 앱',
        subtitle: 'LG OLED TV 매장 전시를 위한 앱',
        techs: ['HTML', 'CSS', 'Javascript', 'Enact', 'webOS'],
        role: '개발 & 유지보수',
        period: '2019.02.10 ~ 2016.10.31',
        images: [
            require('../assets/projects/lg-ai/ai-1.jpg'),
            require('../assets/projects/lg-ai/ai-2.jpg'),
            require('../assets/projects/lg-ai/ai-3.jpg'),
            require('../assets/projects/lg-ai/ai-4.jpg'),
            require('../assets/projects/lg-ai/ai-5.jpg')
        ],
        git: '',
        demo: 'https://www.youtube.com/watch?v=76or5lTj8ow',
        description:
            'LG OLED TV AI ThinQ 홍보를 위한 매장 데모 어플리케이션 입니다. webOS에서 지원해주는 AI Sound / AI Picture / 조도 센서 기능 API 기반으로 개발되었습니다. 해당 앱을 통해 고객은 매장 현장에서 LG OLED TV AI ThinQ 만의 화질과 사운드를 느낄 수 있습니다.'
    },
    {
        id: v1(),
        title: 'LG A+ CES 데모 앱',
        subtitle: '2019 미국 라스베가스 소비자 가전 전시회 데모 앱',
        techs: ['HTML', 'CSS', 'Javascript', 'Enact', 'webOS'],
        role: '개발 & 유지보수',
        period: '2018.10.01 ~ 2018.12.01',
        images: [
            require('../assets/projects/lg-aplus/aplus-1.jpg'),
            require('../assets/projects/lg-aplus/aplus-2.jpg')
        ],
        git: '',
        demo:
            'https://www.youtube.com/watch?v=bwNYuWizpmk&feature=youtu.be&t=415',
        description:
            '2019년 라스베가스에서 개최한 CES 중 한 파트인 LG Press conference에서 제품 소개를 위한 어플리케이션 입니다. webOS에서 지원해주는 Roll Controll API를 기반으로 개발되었습니다. 어플리케이션 설정에 따라 자동으로 TV / 메뉴 / 종료가 동작 될 수 있고, 발표자의 리모컨 조작으로 3가지 동작을 자유롭게 조작할 수 있습니다.'
    },
    {
        id: v1(),
        title: 'LG Smart TV 전자 메뉴얼',
        subtitle: '사용자를 위한 TV 가이드 앱',
        techs: ['HTML', 'CSS', 'Javascript', 'jQuery', 'webOS'],
        role: '개발 & 유지보수',
        period: '2016.05.10 ~ 2019.08.31',
        images: [
            require('../assets/projects/userguide/userguide-2.png'),
            require('../assets/projects/userguide/userguide-1.png'),
            require('../assets/projects/userguide/userguide-3.png')
        ],
        git: '',
        demo: '',
        description:
            'LG SmartTV 전자 메뉴얼은 직관적인 UI와 화면 구성을 통해 사용자 가독성 중심에 디자인과 웹표준 및 웹 접근성 기술을 적용하여 사용자 편의성에 최적화된 웹 기술 기반에 전자 메뉴얼입니다.'
    },
    {
        id: v1(),
        title: 'Knowledgetalk',
        subtitle: 'WebRTC를 이용한 영상/음성 통화 웹',
        techs: [
            'HTML',
            'CSS',
            'Javascript',
            'jQuery',
            'WebRTC',
            'Socket.io',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Redis',
            'Canvas'
        ],
        role: '설계 & 프론트엔드(80%) / 백엔드(20%) 개발 및 유지보수',
        period: '2018.01.01 ~ 2019.11.01',
        images: [
            require('../assets/projects/ktalk/ktalk-3.jpg'),
            require('../assets/projects/ktalk/ktalk-4.jpg'),
            require('../assets/projects/ktalk/ktalk-5.jpg'),
            require('../assets/projects/ktalk/ktalk-2.jpg'),
            require('../assets/projects/ktalk/ktalk-1.jpg')
        ],
        git: '',
        demo: '',
        description:
            '웹기술인 HTML5와 WebRTC(Web Real-Time Communication)를 이용하여 웹브라우저에서 Flash 또는 Silverlight같은 플러그인 없이 웹 브라우저만으로 영상통화 및 데이터 전송이 가능한 웹 브라우저 기반의 메신저입니다.'
    },
    {
        id: v1(),
        title: 'KP 토론서비스 관리 웹',
        subtitle: '관리자 페이지',
        techs: [
            'HTML',
            'CSS',
            'Javascript',
            'React',
            'Redux',
            'Ant Design',
            'Node.js',
            'Express'
        ],
        role: '설계 & 프론트엔드 개발',
        period: '2019.10.01 ~ 2019.11.01',
        images: [
            require('../assets/projects/debate-admin/debate-admin-6.jpg'),
            require('../assets/projects/debate-admin/debate-admin-2.jpg'),
            require('../assets/projects/debate-admin/debate-admin-5.jpg'),
            require('../assets/projects/debate-admin/debate-admin-4.jpg'),
            require('../assets/projects/debate-admin/debate-admin-3.jpg'),
            require('../assets/projects/debate-admin/debate-admin-1.jpg')
        ],
        git: '',
        demo: '',
        description:
            'KP 토론서비스의 사용자, 토론방, 문의 게시판, 통계 등을 관리하는 페이지입니다.'
    },
    {
        id: v1(),
        title: 'KT 호텔서비스 관리 웹',
        subtitle: '관리자 페이지',
        techs: [
            'HTML',
            'CSS',
            'Javascript',
            'React',
            'Next',
            'Node.js',
            'Express'
        ],
        role: '프론트엔드 개발',
        period: '2019.06.01 ~ 2019.10.31',
        images: [
            require('../assets/projects/hotel-admin/hotel-admin-1.jpg'),
            require('../assets/projects/hotel-admin/hotel-admin-2.jpg'),
            require('../assets/projects/hotel-admin/hotel-admin-5.jpg'),
            require('../assets/projects/hotel-admin/hotel-admin-4.jpg'),
            require('../assets/projects/hotel-admin/hotel-admin-3.jpg')
        ],
        git: '',
        demo: '',
        description:
            'KT와 협력으로 진행한 호텔 화상통화 웹과 기가지니 앱을 관리하는 페이지입니다.'
    },

    {
        id: v1(),
        title: 'Webrtc 커스텀 라이브러리',
        subtitle: '영상/음성 웹을 위한 라이브러리',
        techs: ['Javascript', 'WebRTC', 'socket.io', 'Webpack'],
        role: '설계 & 프론트엔드 개발',
        period: '2018.01.01 ~ 2019.11.01',
        images: [require('../assets/projects/webrtc-lib/webrtc-lib-1.jpg')],
        git: '',
        demo: '',
        description:
            '진행하는 프로젝트 대부분이 WebRTC와 관련된 웹 또는 앱으로, 업무의 반복을 줄이고자 별도의 라이브러리로 개발했습니다. WebRTC의 개념과 시그널링 서버의 연동규격을 숙지하고 있지 않아도, 특정 API만 호출하면 영상/음성 연결, 화이트보드 공유, 자료 공유, 화면 공유 등의 기능을 쉽게 개발할 수 있습니다.'
    },

    {
        id: v1(),
        title: '렌티큘러 측위 시스템',
        subtitle: '정부과제',
        techs: ['Javascript', 'Node.js', 'Express', 'REST api', 'PostgreSQL'],
        role: '오픈 REST api 서버 개발',
        period: '2018.09.01 ~ 2019.09.30',
        images: [
            require('../assets/projects/lenticular/lenticular-1.jpg'),
            require('../assets/projects/lenticular/lenticular-2.jpg'),
            require('../assets/projects/lenticular/lenticular-3.jpg'),
            require('../assets/projects/lenticular/lenticular-4.jpg'),
            require('../assets/projects/lenticular/lenticular-5.jpg'),
            require('../assets/projects/lenticular/lenticular-6.jpg'),
            require('../assets/projects/lenticular/lenticular-7.jpg'),
            require('../assets/projects/lenticular/lenticular-8.jpg')
        ],
        git: '',
        demo: '',
        description:
            '무선 Wi-Fi 환경에서 대형 건물에 진입하게 되면 GPS 가 동작하지 않아 건물 내부에서는 사용자의 측위에 문제가 발생, 건물 내부에 렌티큘러 스티커를 부착하여, 해당 스티커를 통해 사용자의 정밀한 위치 정보를 제공하는 시스템입니다.'
    },
    {
        id: v1(),
        title: 'KT 화상컨설팅 PC 앱',
        subtitle: 'WebRTC를 이용한 영상/음성 통화 PC 앱',
        techs: ['HTML', 'CSS', 'Javascript', 'Electron', 'Socket.io'],
        role: 'PC 앱 개발 및 유지보수',
        period: '2018.03.01 ~ 2018.10.01',
        images: [
            require('../assets/projects/consulting-pc/consulting-pc-1.jpg'),
            require('../assets/projects/consulting-pc/consulting-pc-2.jpg'),
            require('../assets/projects/consulting-pc/consulting-pc-5.jpg'),
            require('../assets/projects/consulting-pc/consulting-pc-4.jpg'),
            require('../assets/projects/consulting-pc/consulting-pc-3.jpg')
        ],
        git: '',
        demo: '',
        description:
            '웹기술인 HTML5와 WebRTC(Web Real-Time Communication) 그리고 Electron Framework를 이용하여 PC환경 에서 영상통화 및 데이터 전송이 가능한 메신저입니다.'
    },
    {
        id: v1(),
        title: 'KT 화상컨설팅 웹',
        subtitle: 'WebRTC를 이용한 영상/음성 통화 웹',
        techs: [
            'HTML',
            'CSS',
            'Javascript',
            'jQuery',
            'WebRTC',
            'Socket.io',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Redis',
            'Canvas'
        ],
        role: '설계 & 프론트엔드 개발 및 유지보수',
        period: '2017.09.01 ~ 2018.01.01',
        images: [
            require('../assets/projects/consulting-web/consulting-web-1.jpg'),
            require('../assets/projects/consulting-web/consulting-web-2.jpg'),
            require('../assets/projects/consulting-web/consulting-web-3.jpg'),
            require('../assets/projects/consulting-web/consulting-web-4.jpg')
        ],
        git: '',
        demo: '',
        description:
            '웹기술인 HTML5와 WebRTC(Web Real-Time Communication)를 이용하여 웹브라우저에서 Flash 또는 Silverlight같은 플러그인 없이 웹 브라우저만으로 영상통화 및 데이터 전송이 가능한 웹 브라우저 기반의 메신저입니다.'
    },
    {
        id: v1(),
        title: 'Knowledgetalk 관리 웹',
        subtitle: '관리자 페이지',
        techs: ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'Express'],
        role: '설계 & 프론트엔드 개발 및 유지보수',
        period: '2018.01.01 ~ 2019.01.01',
        images: [
            require('../assets/projects/ktalk-admin/ktalk-admin-1.jpg'),
            require('../assets/projects/ktalk-admin/ktalk-admin-2.jpg')
        ],
        git: '',
        demo: '',
        description:
            'Knowledgetalk의 사용자, 통화기록, 통계 등을 관리하는 페이지입니다.'
    }
]

// ------- 스킬 -------
export const skills = [
    {
        name: 'html',
        level: 92
    },
    {
        name: 'css',
        level: 85
    },
    {
        name: 'javascript',
        level: 90
    },
    {
        name: 'react',
        level: 87
    },
    {
        name: 'vue',
        level: 72
    },
    {
        name: 'jQuery',
        level: 70
    },
    {
        name: 'node',
        level: 87
    },
    {
        name: 'mongodb',
        level: 60
    },
    {
        name: 'postgresql',
        level: 55
    }
]
