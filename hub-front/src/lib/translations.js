export const translations = {
  ko: {
    // Header/Layout
    nav: {
      home: 'Home',
      resume: 'Resume',
      contact: 'Contact'
    },
    
    // Contact Info
    contact: {
      name: '이진우',
      email: 'jinwoolee42@outlook.com',
      linkedin: 'LinkedIn Profile',
      title: 'Contact'
    },
    
    // Main Page
    main: {
      heroTitle: '속도로 증명하는 AI 네이티브 해결사',
      heroSubtitles: [
        '빠르게 만들고 더 빠르게 학습합니다.',
        '작은 시작, 빠른 반복, 큰 임팩트.',
        '빠르게 실험하고 과감히 수확합니다.',
        '속도를 무기로, 결과로 증명합니다.'
      ],
      
      section2: {
        left: ['홈페이지를', '만들었네요,', '개발자인가요?'],
        right: ['그럼요.', '놀라운 가치를', '누구보다 빠르게', '만들어내고 있어요', '모두 AI 덕분이죠']
      },
      
      section3: {
        question: '무엇을 할 수 있나요?',
        answer: ['개인의 능력 범위에', '한계를 정할 수 없죠', 'AI 시대잖아요']
      },
      
      projects: {
        title: 'Projects',
        items: [
          {
            title: 'CloudiA Kubernetes',
            subtitle: 'Infrastructure',
            description: '프라이빗 클라우드 솔루션 CloudiA의 쿠버네티스 서비스 아키텍처 설계 및 에이전트 개발',
            icon: '☸️'
          },
          {
            title: 'CloudiA AlphaFold',
            subtitle: 'AI Service',
            description: 'DeepMind의 단백질 구조 예측 AI인 AlphaFold2를 손쉽게 배포 및 활용하는 서비스 개발',
            icon: '🧬'
          },
          {
            title: 'Business Strategy',
            subtitle: 'Management',
            description: '그룹사 계열사 경영전략팀 근무 경력. 기술과 비즈니스의 균형잡힌 시각으로 전략 수립',
            icon: '📊'
          }
        ]
      },
      
      simpleResume: {
        title: 'Simple Resume',
        experience: 'Experience',
        expertise: 'Expertise',
        viewFull: 'View Full Resume',
        
        companies: [
          {
            name: 'TmaxCloud',
            team: '경영전략팀',
            duration: '2023.12 — 2025.02'
          },
          {
            name: 'iAcloud',
            team: '개발팀 / 전임 연구원',
            duration: '2025.02 — Present'
          }
        ],
        
        skills: ['AI Driven Development', 'Cloud Architecture', 'Business Strategy', 'Technical Leadership']
      }
    },
    
    // Resume Page
    resume: {
      profile: {
        name: '이진우',
        title: 'AI Native Developer',
        location: 'Seoul, South Korea'
      },
      
      sections: {
        experienceTimeline: 'Experience Timeline',
        education: 'Education',
        certifications: 'Certifications',
        skillsExpertise: 'Skills & Expertise',
        current: 'Current'
      },
      
      experiences: [
        {
          position: '전임 연구원',
          team: '개발팀',
          company: 'iAcloud',
          duration: '2025.02',
          endDate: 'Present',
          details: [
            'CloudiA Kubernetes Service 설계 및 개발',
            'CloudiA AlphaFold2 서비스 설계 및 개발'
          ]
        },
        {
          position: '팀원',
          team: '경영전략팀',
          company: 'TmaxCloud',
          duration: '2023.12',
          endDate: '2025.02',
          details: [
            '시장 리서치 및 경쟁사 분석',
            '글로벌 파트너십 전략 수립',
            '신규 사업 기회 발굴 및 타당성 검토'
          ]
        }
      ],
      
      education: [
        {
          school: '42 Seoul',
          degree: 'Computer Science',
          field: 'Intensive Programming',
          year: '2021.09',
          endYear: '2023.09'
        },
        {
          school: '중앙대학교',
          degree: 'Sociology',
          field: "Bachelor's Degree",
          year: '2016.03',
          endYear: '2022.08'
        }
      ],
      
      certifications: [
        {
          institution: 'AWS',
          title: 'Solutions Architect Associate',
          year: '2024.09',
          badge: '☁️'
        },
        {
          institution: 'AWS',
          title: 'Cloud Practitioner',
          year: '2023.07',
          badge: '☁️'
        },
        {
          institution: 'English',
          title: 'OPIc IH',
          year: '2023.09',
          badge: '🌐'
        }
      ],
      
      skills: {
        Technical: ['AI Driven Development', 'Kubernetes', 'Cloud Architecture', 'AI Workload'],
        Business: ['Strategic Planning', 'Market Research'],
        Languages: ['Korean (Native)', 'English (Business)']
      }
    }
  },
  
  en: {
    // Header/Layout
    nav: {
      home: 'Home',
      resume: 'Resume',
      contact: 'Contact'
    },
    
    // Contact Info
    contact: {
      name: 'Jinwoo Lee',
      email: 'jinwoolee42@outlook.com',
      linkedin: 'LinkedIn Profile',
      title: 'Contact'
    },
    
    // Main Page
    main: {
      heroTitle: 'AI-Native Problem Solver',
      heroSubtitles: [
        'Build fast, learn faster.',
        'Small starts, rapid iterations, big impact.',
        'Experiment quickly, harvest boldly.',
        'Speed as a weapon, proven by results.'
      ],
      
      section2: {
        left: ['You built', 'a website,', 'are you a developer?'],
        right: ['Of course.', "I'm creating", 'amazing value', 'faster than anyone', 'All thanks to AI']
      },
      
      section3: {
        question: 'What can you do?',
        answer: ["There's no limit to", "an individual's capabilities", "It's the AI era"]
      },
      
      projects: {
        title: 'Projects',
        items: [
          {
            title: 'CloudiA Kubernetes',
            subtitle: 'Infrastructure',
            description: 'Designed architecture and developed agents for Kubernetes service in CloudiA private cloud solution',
            icon: '☸️'
          },
          {
            title: 'CloudiA AlphaFold',
            subtitle: 'AI Service',
            description: "Developed service for easy deployment and utilization of DeepMind's AlphaFold2 protein structure prediction AI",
            icon: '🧬'
          },
          {
            title: 'Business Strategy',
            subtitle: 'Management',
            description: 'Experience in corporate strategy team, establishing strategies with balanced perspective of technology and business',
            icon: '📊'
          }
        ]
      },
      
      simpleResume: {
        title: 'Simple Resume',
        experience: 'Experience',
        expertise: 'Expertise',
        viewFull: 'View Full Resume',
        
        companies: [
          {
            name: 'TmaxCloud',
            team: 'Strategy Team',
            duration: '2023.12 — 2025.02'
          },
          {
            name: 'iAcloud',
            team: 'Development Team / Researcher',
            duration: '2025.02 — Present'
          }
        ],
        
        skills: ['AI Driven Development', 'Cloud Architecture', 'Business Strategy', 'Technical Leadership']
      }
    },
    
    // Resume Page
    resume: {
      profile: {
        name: 'Jinwoo Lee',
        title: 'AI Native Developer',
        location: 'Seoul, South Korea'
      },
      
      sections: {
        experienceTimeline: 'Experience Timeline',
        education: 'Education',
        certifications: 'Certifications',
        skillsExpertise: 'Skills & Expertise',
        current: 'Current'
      },
      
      experiences: [
        {
          position: 'Researcher',
          team: 'Development Team',
          company: 'iAcloud',
          duration: '2025.02',
          endDate: 'Present',
          details: [
            'Designed and developed CloudiA Kubernetes Service',
            'Designed and developed CloudiA AlphaFold2 Service'
          ]
        },
        {
          position: 'Team Member',
          team: 'Strategy Team',
          company: 'TmaxCloud',
          duration: '2023.12',
          endDate: '2025.02',
          details: [
            'Market research and competitive analysis',
            'Established global partnership strategies',
            'Discovered new business opportunities and feasibility reviews'
          ]
        }
      ],
      
      education: [
        {
          school: '42 Seoul',
          degree: 'Computer Science',
          field: 'Intensive Programming',
          year: '2021.09',
          endYear: '2023.09'
        },
        {
          school: 'Chung-Ang University',
          degree: 'Sociology',
          field: "Bachelor's Degree",
          year: '2016.03',
          endYear: '2022.08'
        }
      ],
      
      certifications: [
        {
          institution: 'AWS',
          title: 'Solutions Architect Associate',
          year: '2024.09',
          badge: '☁️'
        },
        {
          institution: 'AWS',
          title: 'Cloud Practitioner',
          year: '2023.07',
          badge: '☁️'
        },
        {
          institution: 'English',
          title: 'OPIc IH',
          year: '2023.09',
          badge: '🌐'
        }
      ],
      
      skills: {
        Technical: ['AI Driven Development', 'Kubernetes', 'Cloud Architecture', 'AI Workload'],
        Business: ['Strategic Planning', 'Market Research'],
        Languages: ['Korean (Native)', 'English (Business)']
      }
    }
  }
};

export function t(lang, path) {
  const keys = path.split('.');
  let value = translations[lang];
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value || path;
}