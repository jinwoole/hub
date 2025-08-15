<script>
  import { onMount } from 'svelte';
  let scrollY = 0;
  let sectionProgress = [0, 0, 0, 0, 0];
  let mouseX = 0;
  let mouseY = 0;
  let currentSection = 0;
  let section2El;
  
  // Subtitle typewriter state
  const subtitleTexts = [
    '빠르게 만들고 더 빠르게 학습합니다.',
    '작은 시작, 빠른 반복, 큰 임팩트.',
    '빠르게 실험하고 과감히 수확합니다.',
    '속도를 무기로, 결과로 증명합니다.'
  ];
  let subtitleDisplay = '';
  let subtitleIsDeleting = false;
  let subtitleCurrentIndex = 0;
  let subtitleTypingTimer;
  const subtitleTypeSpeed = 80;
  const subtitleDeleteSpeed = 45;
  const subtitlePauseMs = 2000;
  const subtitleEmptyPauseMs = 800;
  
  const handleScroll = () => {
    scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Calculate current section
    currentSection = Math.floor(scrollY / windowHeight);
    
    const sections = [
      { start: 0, end: 0.5 * windowHeight },
      { start: 0.3 * windowHeight, end: 1.3 * windowHeight },
      { start: 1.1 * windowHeight, end: 2.1 * windowHeight },
      { start: 1.9 * windowHeight, end: 2.9 * windowHeight },
      { start: 2.8 * windowHeight, end: 3.8 * windowHeight },
    ];
    
    const baseProgress = sections.map(({ start, end }) => {
      return Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
    });
    sectionProgress = baseProgress;
  };
  
  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };
  
  let cardContents = [
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
    },
  ];
  
  // Hero texts
  let titleText = '속도로 증명하는 AI 네이티브 해결사';
  
  onMount(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // start subtitle typewriter loop
    const typeSubtitle = () => {
      const currentText = subtitleTexts[subtitleCurrentIndex] || '';
      if (subtitleIsDeleting) {
        subtitleDisplay = currentText.substring(0, subtitleDisplay.length - 1);
        if (subtitleDisplay === '') {
          subtitleIsDeleting = false;
          subtitleCurrentIndex = (subtitleCurrentIndex + 1) % subtitleTexts.length;
          subtitleTypingTimer = setTimeout(typeSubtitle, subtitleEmptyPauseMs);
          return;
        }
        subtitleTypingTimer = setTimeout(typeSubtitle, subtitleDeleteSpeed);
      } else {
        subtitleDisplay = currentText.substring(0, subtitleDisplay.length + 1);
        if (subtitleDisplay === currentText) {
          subtitleTypingTimer = setTimeout(() => {
            subtitleIsDeleting = true;
            typeSubtitle();
          }, subtitlePauseMs);
          return;
        }
        subtitleTypingTimer = setTimeout(typeSubtitle, subtitleTypeSpeed);
      }
    };
    typeSubtitle();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (subtitleTypingTimer) clearTimeout(subtitleTypingTimer);
    };
  });
  
  // Smooth scroll to section with custom easing
  const scrollToSection = (sectionIndex) => {
    const targetY = window.innerHeight * sectionIndex;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 1200; // 1.2초로 늘림
    let startTime = null;
    
    // Easing function for smooth acceleration and deceleration
    const easeInOutCubic = (t) => {
      return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };
    
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * easedProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };
    
    requestAnimationFrame(animation);
  };
</script>

<svelte:window on:scroll={handleScroll} />

<main class="relative overflow-hidden bg-white">
  <!-- Mouse gradient spotlight -->
  <div 
    class="pointer-events-none fixed inset-0 z-0 transition-opacity duration-1000"
    style="opacity: {0.03}; background: radial-gradient(600px circle at {mouseX}px {mouseY}px, rgba(0, 102, 255, 0.06), transparent 40%);"
  ></div>
  
  
  
  <!-- Section 1: Hero with refined animation -->
  <section class="h-[100vh] relative flex items-center justify-center" bind:this={section2El}>
    <div
      class="text-center px-4"
      style="opacity: {1 - sectionProgress[0]}; transform: translateY({-10 + sectionProgress[0] * -20}vh); transition: opacity 0.5s, transform 0.5s;"
    >
      <h1 class="text-3xl md:text-5xl lg:text-6xl font-thin text-primary-black mb-6">
        {#each titleText.split(' ') as word, i}
          <span 
            class="inline-block animate-fade-up"
            style="animation-delay: {i * 0.1}s;"
          >
            {word}
          </span>{' '}
        {/each}
      </h1>
      
      <p class="text-lg md:text-xl text-primary-gray font-light animate-fade-in" style="animation-delay: 0.5s;">
        {subtitleDisplay}
        <span class="opacity-60">|</span>
      </p>
      
      
      
      <!-- Elegant scroll indicator -->
      <button
        class="mt-20 flex flex-col items-center animate-fade-in cursor-pointer hover:scale-110 transition-transform mx-auto"
        style="animation-delay: 1s; opacity: {1 - sectionProgress[0]}; transition: opacity 0.5s, transform 0.2s;"
        on:click={() => scrollToSection(1)}
      >
        <div class="w-[1px] h-20 bg-gradient-to-b from-transparent via-primary-black to-transparent opacity-20 animate-pulse"></div>
        <svg
          class="w-5 h-5 mt-2 text-primary-gray animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  </section>
  
  <!-- Section 2: Split text with refined timing -->
  <section class="h-[100vh] relative flex items-center justify-center">
    <div
      class="max-w-5xl mx-auto px-6 lg:px-8"
      style="opacity: {sectionProgress[1]}; transition: opacity 0.4s;"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div
          class="text-left md:text-right"
          style="transform: translateY({-16 + sectionProgress[1] * 16}vh); transition: transform 0.7s;"
        >
          <h2 class="text-2xl md:text-4xl font-thin leading-tight text-primary-black">
            홈페이지를<br />
            만들었네요,<br />
            <span class="font-light">개발자인가요?</span>
          </h2>
        </div>
        
        <div
          class="text-right md:text-left"
          style="transform: translateY({16 - sectionProgress[1] * 16}vh); transition: transform 0.7s;"
        >
          <h2 class="text-2xl md:text-4xl font-thin leading-tight text-primary-black">
            <span class="font-light">그럼요.</span><br />
            놀라운 가치를<br />
            누구보다 빠르게<br />
            만들어내고 있어요<br />
            <span class="text-primary-gray text-xl">모두 AI 덕분이죠</span>
          </h2>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Section 3: Capability showcase -->
  <section class="h-[100vh] relative flex items-center justify-center">
    <div class="text-center max-w-4xl mx-auto px-6 lg:px-8">
      <h2 
        class="text-2xl md:text-3xl font-thin text-primary-black mb-8"
        style="transform: translateY({5 - sectionProgress[2] * 15}vh); opacity: {sectionProgress[2] >= 0 ? 1 : 0}; transition: transform 0.3s;"
      >
        무엇을 할 수 있나요?
      </h2>
      
      <div
        style="opacity: {Math.min(Math.max((sectionProgress[2] - 0.3) * 2, 0), 1)}; transition: opacity 0.3s;"
      >
        <h2 
          class="text-2xl md:text-4xl font-thin text-primary-black leading-relaxed"
          style="transform: translateY({20 - sectionProgress[2] * 20}vh); transition: transform 0.3s;"
        >
          개인의 능력 범위에<br />
          <span class="font-light">한계를 정할 수 없죠</span><br />
          <span class="text-xl md:text-2xl text-primary-gray">AI 시대잖아요</span>
        </h2>
      </div>
    </div>
  </section>
  
  <!-- Section 4: Project cards with glass effect -->
  <section class="h-[100vh] relative flex items-center justify-center">
    <div
      class="max-w-6xl mx-auto px-6 lg:px-8"
      style="opacity: {sectionProgress[3]}; transition: opacity 0.3s;"
    >
      <h2 class="text-3xl md:text-4xl font-thin text-primary-black text-center mb-12 tracking-wide">
        Projects
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each cardContents as { title, subtitle, description, icon }, index}
          <div
            class="group relative bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            style="transform: translateY({(1 - sectionProgress[3]) * 20}vh) rotateY({(1 - sectionProgress[3]) * (index % 2 === 0 ? -20 : 20)}deg); opacity: {sectionProgress[3]}; transition: transform 0.5s, opacity 0.5s;"
          >
            <!-- Glass overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-glass-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div class="relative z-10">
              <div class="text-4xl mb-4">{icon}</div>
              <p class="text-xs uppercase tracking-super-wide text-primary-gray mb-2">{subtitle}</p>
              <h3 class="text-xl font-light text-primary-black mb-4 tracking-wide">{title}</h3>
              <p class="text-sm text-primary-gray leading-relaxed">{description}</p>
            </div>
            
            <!-- Subtle border glow on hover -->
            <div class="absolute inset-0 rounded-2xl border border-accent-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <!-- Section 5: Simple resume preview -->
  <section class="py-32">
    <div class="max-w-5xl mx-auto px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-thin mb-16 text-primary-black tracking-wide">Simple Resume</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
        <!-- Experience -->
        <div class="animate-fade-up">
          <h3 class="text-xs uppercase tracking-super-wide text-primary-gray mb-8">Experience</h3>
          <div class="space-y-8">
            <div class="group">
              <div class="flex items-start gap-4">
                <div class="w-2 h-2 rounded-full bg-primary-black mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h4 class="font-light text-lg text-primary-black">TmaxCloud</h4>
                  <p class="text-sm text-primary-gray mt-1">경영전략팀</p>
                  <p class="text-xs text-primary-gray mt-2 tracking-wide">2023.12 — 2025.02</p>
                </div>
              </div>
            </div>
            
            <div class="group">
              <div class="flex items-start gap-4">
                <div class="w-2 h-2 rounded-full bg-primary-black mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h4 class="font-light text-lg text-primary-black">iAcloud</h4>
                  <p class="text-sm text-primary-gray mt-1">개발팀 / 전임 연구원</p>
                  <p class="text-xs text-primary-gray mt-2 tracking-wide">2025.02 — Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Skills -->
        <div class="animate-fade-up" style="animation-delay: 0.2s;">
          <h3 class="text-xs uppercase tracking-super-wide text-primary-gray mb-8">Expertise</h3>
          <div class="space-y-3">
            {#each ['AI Driven Development', 'Cloud Architecture', 'Business Strategy', 'Technical Leadership'] as skill}
              <div class="group flex items-center gap-3">
                <div class="w-1 h-1 rounded-full bg-primary-gray group-hover:bg-accent-blue transition-colors"></div>
                <span class="text-sm text-primary-black font-light tracking-wide">{skill}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
      
      <!-- CTA Button -->
      <div class="mt-20 animate-fade-up" style="animation-delay: 0.4s;">
        <a 
          href="/resume" 
          class="group inline-flex items-center gap-3 px-10 py-4 border border-primary-black text-primary-black rounded-full hover:bg-primary-black hover:text-white transition-all duration-500"
        >
          <span class="font-light tracking-wide">View Full Resume</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</main>

<style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    overscroll-behavior: none;
  }
  
  :global(::selection) {
    background-color: rgba(0, 102, 255, 0.1);
    color: #0066FF;
  }
  
  main {
    height: 500vh;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeUp {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
    opacity: 0;
  }
  
  .animate-fade-up {
    animation: fadeUp 0.8s ease-out forwards;
    opacity: 0;
  }
</style>