<script>
  import { onMount } from 'svelte';
  let scrollY = 0;
  let sectionProgress = [0, 0, 0, 0, 0];

  const handleScroll = () => {
    scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const sections = [
      { start: 0, end: 0.5 * windowHeight }, // Section 1
      { start: 0.3 * windowHeight, end: 1.3 * windowHeight }, // Section 2 (earlier start)
      { start: 1.1 * windowHeight, end: 2.1 * windowHeight }, // Section 3 (earlier start)
      { start: 1.9 * windowHeight, end: 2.9 * windowHeight }, // Section 4 (earlier start)
      { start: 2.8 * windowHeight, end: 3.8 * windowHeight }, // Section 5 (earlier start)
    ];

    sectionProgress = sections.map(({ start, end }) => {
      return Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
    });
  };

  onMount(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<main class="relative overflow-hidden">
  <!-- Section 1: Welcome message and scroll down indicator -->
  <section class="h-[100vh] relative">
    <div
      class="sticky top-0 h-screen flex items-center justify-center flex-col"
      style="opacity: {1 - sectionProgress[0]}; transform: translateY({-10 + sectionProgress[0] * -20}vh); transition: opacity 0.5s, transform 0.5s;"
    >
      <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Welcome to My Interactive World
      </h1>
      <div
        class="flex flex-col items-center mt-4 text-gray-700 text-sm opacity-80 transition-opacity duration-500"
        style="opacity: {1 - sectionProgress[0]};"
      >
        <span>Scroll Down</span>
        <svg class="w-6 h-6 mt-1 text-gray-700 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <br />저는 생각하고,<br />
            코딩은 AI가 해요!
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
        <h2 class="text-3xl font-semibold text-gray-900 mb-4">개발자가 아니면 뭐죠?</h2>
      </div>
      <div
        class="text-center"
        style="transform: translateY({50 - sectionProgress[2] * 50}vh); opacity: {Math.min(Math.max((sectionProgress[2] - 0.3) * 2, 0), 1)}; transition: transform 0.3s, opacity 0.3s;"
      >
        <h2 class="text-4xl font-semibold text-gray-900">IT가 어떤 가치를 만들어낼 수 있을까 고민하고 있어요.</h2>
      </div>
    </div>
  </section>

  <!-- Section 4: Appears earlier with adjusted animations -->
  <section class="h-[100vh] relative">
    <div
      class="sticky top-0 h-screen flex items-center justify-center"
      style="opacity: {sectionProgress[3]}; transition: opacity 0.3s;"
    >
      <div class="grid grid-cols-2 gap-8">
        {#each [1, 2, 3, 4] as card}
          <div
            class="w-64 p-6 bg-gray-50 rounded-lg shadow-lg transform transition-transform duration-500"
            style="transform: translateY({(1 - sectionProgress[3]) * 20}vh) rotateY({(1 - sectionProgress[3]) * (card % 2 === 0 ? -20 : 20)}deg); opacity: {sectionProgress[3]};"
          >
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Card {card}</h3>
            <p class="text-gray-600">Dynamic animations enhance engagement.</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Section 5: Simple resume section -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8">Jinwoo Lee's Resume</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Experience -->
        <div>
          <h3 class="text-2xl font-semibold mb-4">Experience</h3>
          <ul class="text-gray-700">
            <li class="mb-3">
              <strong>TmaxCloud - Software Engineer</strong><br />
              2020 - Present<br />
              Focused on cloud platform development and large-scale distributed systems.
            </li>
            <li>
              <strong>Freelance Developer</strong><br />
              2018 - 2020<br />
              Built custom web solutions for clients, with an emphasis on user-friendly design.
            </li>
          </ul>
        </div>
        <!-- Skills -->
        <div>
          <h3 class="text-2xl font-semibold mb-4">Skills</h3>
          <ul class="text-gray-700">
            <li>JavaScript, TypeScript, Python</li>
            <li>React, Svelte, Node.js</li>
            <li>Docker, Kubernetes, AWS</li>
            <li>Git, Agile Development</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  main {
    height: 450vh; /* Adjusted to accommodate five sections without extra space */
  }
</style>
