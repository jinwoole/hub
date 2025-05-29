<script>
  import { onMount } from 'svelte';
  let scrollY = 0;
  let sectionProgress = [0, 0, 0, 0, 0];

  const handleScroll = () => {
    scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const sections = [
      { start: 0, end: 0.5 * windowHeight }, // Section 1: Welcome message scroll progress
      { start: 0.3 * windowHeight, end: 1.3 * windowHeight }, // Section 2: Introduction message scroll progress
      { start: 1.1 * windowHeight, end: 2.1 * windowHeight }, // Section 3: What if not a developer
      { start: 1.9 * windowHeight, end: 2.9 * windowHeight }, // Section 4: Card content animations
      { start: 2.8 * windowHeight, end: 3.8 * windowHeight }, // Section 5: Resume scroll progress
    ];

    sectionProgress = sections.map(({ start, end }) => {
      return Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
    });
  };

  // 카드 내용 변수화
  let cardContents = [
    { title: 'AI활용 개발', description: '어떤 임무가 주어지든 빠르게 큰 그림을 이해하고 AI를 활용한 프로덕션 수준의 설계 및 구현 가능. 프라이빗 클라우드/쿠버네티스/LLM 분야 솔루션 개발 중' },
    { title: '글로벌 업무', description: '업무에 활용 가능한 수준의 영어. 글로벌 파트너십 업무 지원 및 회사 및 제품소개서, IR자료 등 번역 경험' },
    { title: '전략기획 업무', description: '그룹사 계열사 경영전략팀 근무 경력 보유. 기술 뿐만 아니라 비즈니스적인 시야를 보유하고 시장의 흐름과 회사의 상황과 맞는 사고 가능' },
  ];

  onMount(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<main class="relative overflow-hidden font-pretendard">
  <!-- Section 1: Welcome message and scroll down indicator -->
  <section class="h-[100vh] relative">
    <div
      class="sticky top-0 h-screen flex items-center justify-center flex-col"
      style="opacity: {1 - sectionProgress[0]}; transform: translateY({-10 + sectionProgress[0] * -20}vh); transition: opacity 0.5s, transform 0.5s;"
    >
      <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        제 프로필에 오신 것을 환영합니다.
      </h1>
      <div
        class="flex flex-col items-center mt-4 text-gray-700 text-sm opacity-80 transition-opacity duration-500"
        style="opacity: {1 - sectionProgress[0]};"
      >
        <span>Scroll Down</span>
        <svg
          class="w-6 h-6 mt-1 text-gray-700 animate-bounce cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          on:click={() => window.scrollTo({ top: window.innerHeight * 1.1, behavior: 'smooth' })}
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  </section>

  <!-- Section 2: Adjusted timing for earlier start -->
  <section class="h-[100vh] relative">
    <div
      class="sticky top-0 h-screen flex items-center justify-center"
      style="opacity: {sectionProgress[1]}; transition: opacity 0.4s;"
    >
      <div class="relative w-full h-full flex items-center justify-center">
        <div
          class="absolute left-0 top-1/2 w-1/2 transform transition-transform duration-700"
          style="transform: translateY({-20 + sectionProgress[1] * 20}vh);"
        >
          <h2 class="text-4xl font-semibold text-gray-900 text-right pr-4">
            홈페이지를 만들었네요,<br />
            개발자인가요?
          </h2>
        </div>
        <div
          class="absolute right-0 top-1/2 w-1/2 transform transition-transform duration-700"
          style="transform: translateY({20 - sectionProgress[1] * 20}vh);"
        >
          <h2 class="text-4xl font-semibold text-gray-900 text-left pl-4">
            <br /><br />놀라운 가치를 만들어내고 있어요<br />
            모두 다 AI 덕분이죠.
          </h2>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Animations complete when centered -->
  <section class="h-[100vh] relative">
    <div class="sticky top-0 h-screen flex items-center justify-center flex-col">
      <div
        class="text-center"
        style="transform: translateY({5 - sectionProgress[2] * 15}vh); opacity: {sectionProgress[2] >= 0 ? 1 : 0}; transition: transform 0.3s;"
      >
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">무엇을 만들 수 있나요?</h2>
      </div>
      <div
        class="text-center"
        style="transform: translateY({50 - sectionProgress[2] * 50}vh); opacity: {Math.min(Math.max((sectionProgress[2] - 0.3) * 2, 0), 1)}; transition: transform 0.3s, opacity 0.3s;"
      >
        <h2 class="text-4xl font-semibold text-gray-900">상상할 수 있는 것이면 모두 시도해 볼 수 있죠.</h2>
      </div>
    </div>
  </section>

  <!-- Section 4: Cards with animations and section title -->
  <section class="h-[100vh] relative">
    <div
      class="sticky top-0 h-screen flex items-center justify-center flex-col"
      style="opacity: {sectionProgress[3]}; transition: opacity 0.3s;"
    >
      <h2 class="text-4xl font-bold text-gray-900 mb-8">Usecases</h2>
      <div class="grid grid-cols-2 gap-8">
        {#each cardContents as { title, description }, index}
            <div
            class="w-96 p-12 bg-gray-50 rounded-lg shadow-lg transform transition-transform duration-500"
            style="transform: translateY({(1 - sectionProgress[3]) * 20}vh) rotateY({(1 - sectionProgress[3]) * (index % 2 === 0 ? -20 : 20)}deg); opacity: {sectionProgress[3]};"
            >
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
            <p class="text-gray-600 mt-4">{description}</p>
            </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Section 5: Simple resume section -->
  <section class="py-16 pb-24">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8">Simple Resume</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Experience -->
        <div>
          <h3 class="text-2xl font-semibold mb-4">Experience</h3>
          <ul class="text-gray-700">
            <li class="mb-3">
              <strong>TmaxCloud</strong><br />
              2023.12 - 2025.2<br />
              전략마케팅실/경영전략팀 팀원
            </li>
                        <li class="mb-3">
              <strong>iAcloud</strong><br />
              2025.2 - 현재<br />
              전임 디벨로퍼
            </li>
          </ul>
        </div>
        <!-- Skills -->
        <div>
          <h3 class="text-2xl font-semibold mb-4">Skills</h3>
          <ul class="text-gray-700">
            <li>컴퓨터 공학 기초 지식</li>
            <li>AI 활용 개발</li>
            <li>클라우드 및 IT인프라 관련 지식</li>
            <li>비즈니스 영어</li>
            <li>경영 전략 업무</li>
          </ul>
      </div>
        </div>
        <!-- Button to navigate to /resume -->
        <div class="mt-8 flex justify-center">
          <a href="/resume" class="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="relative flex items-center gap-2">
              View Full Resume
              <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </a>
        </div>
    </div>
  </section>
</main>



<style>
  @import url('https://fonts.googleapis.com/css2?family=Pretendard&display=swap');

  main {
    height: 470vh; /* Adjusted to accommodate five sections without extra space */
  }

  .font-pretendard {
    font-family: 'Pretendard', sans-serif;
  }
</style>
