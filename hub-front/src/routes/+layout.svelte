<!-- Header.svelte -->
<script>
  import "../app.css";
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let isDrawerOpen = false;
  let scrollY = 0;
  let isScrolled = false;
  
  const contactName = "이진우";
  const contactEmail = "jinwoolee42@outlook.com";
  const contactLinkedIn = "www.linkedin.com/in/jinwoo-lee-profile";
  
  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
      isScrolled = scrollY > 10;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  const handleKeydown = (e) => {
    if (e.key === 'Escape' && isDrawerOpen) {
      isDrawerOpen = false;
    }
  };
</script>

<svelte:window on:keydown={handleKeydown} />

<header class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 {isScrolled ? 'bg-glass-white backdrop-blur-md border-b border-glass-border' : 'bg-transparent'}">
  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-black to-transparent opacity-10"></div>
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
    <div class="flex flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">{contactName}</span>
        <div class="text-xl sm:text-2xl font-light tracking-wider text-primary-black hover:text-accent-blue transition-colors duration-300" style="font-family: 'Pretendard', sans-serif; font-weight: 300;">
          {contactName}
        </div>
      </a>
    </div>

    <!-- 기존 내비게이션 유지 -->
    <div class="flex gap-x-4 sm:gap-x-6 lg:gap-x-12">
      <!-- Resume 링크 -->
      <a href="/resume" class="group relative text-sm sm:text-base font-light tracking-wide leading-6 text-primary-black hover:text-accent-blue transition-colors duration-300">
        Resume
        <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-blue group-hover:w-full transition-all duration-300"></span>
      </a>
    </div>

    <!-- Contact 버튼을 클릭하면 드로어 열림 -->
    <div class="flex flex-1 justify-end">
      <button type="button" on:click={() => isDrawerOpen = true} class="group relative text-sm sm:text-base font-light tracking-wide leading-6 text-primary-black hover:text-accent-blue transition-all duration-300">
        <span class="flex items-center gap-1">
          Contact
          <span aria-hidden="true" class="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </span>
      </button>
    </div>
  </nav>
</header>

<main class="pt-20">
  <slot />
</main>

<!-- 하단의 추가 Contact 버튼 (오른쪽 정렬) -->
<div class="flex justify-end mt-16 mr-4 sm:mr-6 lg:mr-8 mb-16">
  <button type="button" on:click={() => isDrawerOpen = true} class="group relative text-sm sm:text-base font-light tracking-wide leading-6 text-primary-black hover:text-accent-blue transition-all duration-300">
    <span class="flex items-center gap-1">
      Contact
      <span aria-hidden="true" class="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
    </span>
  </button>
</div>

{#if isDrawerOpen}
  <!-- 드로어 코드 -->
  <div class="fixed inset-0 z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <!-- 배경 오버레이 - 클릭하면 드로어 닫힘 -->
    <div
      class="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm cursor-pointer"
      on:click={() => isDrawerOpen = false}
      on:keydown={(e) => e.key === 'Escape' && (isDrawerOpen = false)}
      tabindex="0"
      role="button"
      aria-label="Close drawer"
      transition:fade
    ></div>

    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute inset-0 overflow-hidden">
        <div class="fixed inset-y-0 right-0 flex max-w-full pl-10">
          <!-- 슬라이드 오버 패널 -->
          <div
            class="pointer-events-auto relative w-screen max-w-md"
            on:click|stopPropagation
            role="dialog"
            tabindex="-1"
            transition:fly={{ x: 300, duration: 300 }}
          >
            <!-- 닫기 버튼 -->
            <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
              <button type="button" on:click={() => isDrawerOpen = false} class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                <span class="absolute -inset-2.5"></span>
                <span class="sr-only">Close panel</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div class="flex h-full flex-col overflow-y-scroll bg-glass-white backdrop-blur-xl border-l border-glass-border py-6 shadow-2xl">
              <div class="px-4 sm:px-6">
                <h2 class="text-lg font-light tracking-wider text-primary-black" id="slide-over-title">Contact</h2>
              </div>
              <div class="relative mt-6 flex-1 px-4 sm:px-6">
                <!-- 연락처 정보 -->
                <div class="flex flex-col space-y-4">
                  <!-- 이메일 -->
                  <a href="mailto:{contactEmail}" class="group flex items-center gap-2 text-sm text-primary-gray hover:text-accent-blue transition-colors duration-300">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    {contactEmail}
                  </a>
                  
                  <!-- LinkedIn 프로필 -->
                  <a href={`https://${contactLinkedIn}`} target="_blank" class="group flex items-center gap-2 text-sm text-primary-gray hover:text-accent-blue transition-colors duration-300">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
