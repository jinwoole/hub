<!-- Header.svelte -->
<script>
  import "../app.css";
  import { fade, fly } from 'svelte/transition';
  let isDrawerOpen = false; // 드로어 상태 변수
  let isProductsDropdownOpen = false; // Products 드롭다운 상태 변수

  // Contact 정보 변수
  const contactName = "이진우";
  const contactEmail = "jinwoolee42@outlook.com";
  const contactLinkedIn = "www.linkedin.com/in/jinwoo-lee-profile"; // LinkedIn URL
</script>

<header class="bg-white">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
    <div class="flex flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">{contactName}</span>
        <div class="text-xl sm:text-2xl font-bold" style="font-family: 'Pretendard', sans-serif;">
          {contactName}
        </div>
      </a>
    </div>

    <!-- 기존 내비게이션 유지 -->
    <div class="flex gap-x-4 sm:gap-x-6 lg:gap-x-12">
      <!-- Products 드롭다운을 위한 컨테이너 (임시로 숨김) -->
      <!-- 
      <div 
        class="relative inline-block" 
        on:mouseenter={() => isProductsDropdownOpen = true} 
        on:mouseleave={() => isProductsDropdownOpen = false}
      >
        <button
          type="button"
          class="flex items-center gap-x-1 text-sm sm:text-base font-semibold leading-6 text-gray-900 focus:outline-none"
          aria-expanded={isProductsDropdownOpen}
        >
          Products
          <svg class="h-4 w-4 sm:h-5 sm:w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </button>

        <div
          class="absolute left-0 top-full z-10 mt-0 w-60 sm:w-screen sm:max-w-md overflow-hidden rounded-lg sm:rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-200 transform"
          class:opacity-100={isProductsDropdownOpen}
          class:opacity-0={!isProductsDropdownOpen}
          class:translate-y-0={isProductsDropdownOpen}
          class:-translate-y-1={!isProductsDropdownOpen}
          class:pointer-events-auto={isProductsDropdownOpen}
          class:pointer-events-none={!isProductsDropdownOpen}
        >
          <div class="p-3 sm:p-4">
            <a href="/products/dailynews" class="group relative flex items-center gap-x-4 sm:gap-x-6 rounded-md sm:rounded-lg p-3 sm:p-4 text-sm leading-5 sm:leading-6 hover:bg-gray-50">
              <div class="flex h-10 w-10 sm:h-11 sm:w-11 flex-none items-center justify-center rounded-md sm:rounded-lg bg-gray-50 group-hover:bg-white">
                <svg class="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 3.75H4.5a2.25 2.25 0 0 0-2.25 2.25v12a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25v-12a2.25 2.25 0 0 0-2.25-2.25ZM4.5 6h15v12h-15V6Zm3 3h9v1.5H7.5V9Zm0 3h9v1.5H7.5V12Zm0 3h6v1.5H7.5V15Z" />
                </svg>
              </div>
              <div class="flex-auto">
                <p class="block font-semibold text-gray-900">Daily News for TmaxCloud <span class="absolute inset-0"></span></p>
                <p class="mt-1 text-gray-600">빠르고 정확한 뉴스레터 작성</p>
              </div>
            </a>
            <a href="/products/insights" class="group relative flex items-center gap-x-4 sm:gap-x-6 rounded-md sm:rounded-lg p-3 sm:p-4 text-sm leading-5 sm:leading-6 hover:bg-gray-50">
              <div class="flex h-10 w-10 sm:h-11 sm:w-11 flex-none items-center justify-center rounded-md sm:rounded-lg bg-gray-50 group-hover:bg-white">
                <svg class="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                </svg>
              </div>
              <div class="flex-auto">
                <p class="block font-semibold text-gray-900">Insights <span class="absolute inset-0"></span></p>
                <p class="mt-1 text-gray-600">수집한 데이터, 새로운 통찰로 </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      -->

      <!-- Resume 링크 -->
      <a href="/resume" class="text-sm sm:text-base font-semibold leading-6 text-gray-900">Resume</a>
    </div>

    <!-- Contact 버튼을 클릭하면 드로어 열림 -->
    <div class="flex flex-1 justify-end">
      <button type="button" on:click={() => isDrawerOpen = true} class="text-sm sm:text-base font-semibold leading-6 text-gray-900">
        Contact <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  </nav>
</header>

<slot />

<!-- 하단의 추가 Contact 버튼 (오른쪽 정렬) -->
<div class="flex justify-end mt-8 mr-4 sm:mr-6 lg:mr-8 mb-8">
  <button type="button" on:click={() => isDrawerOpen = true} class="text-sm sm:text-base font-semibold leading-6 text-gray-900">
    Contact <span aria-hidden="true">&rarr;</span>
  </button>
</div>

{#if isDrawerOpen}
  <!-- 드로어 코드 -->
  <div class="fixed inset-0 z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <!-- 배경 오버레이 - 클릭하면 드로어 닫힘 -->
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 cursor-pointer"
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

            <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
              <div class="px-4 sm:px-6">
                <h2 class="text-base font-semibold text-gray-900" id="slide-over-title">Contact</h2>
              </div>
              <div class="relative mt-6 flex-1 px-4 sm:px-6">
                <!-- 연락처 정보 -->
                <div class="flex flex-col space-y-4">
                  <!-- 이메일 -->
                  <a href="mailto:{contactEmail}" class="text-sm text-gray-600 hover:text-indigo-600">{contactEmail}</a>
                  
                  <!-- LinkedIn 프로필 -->
                  <a href={`https://${contactLinkedIn}`} target="_blank" class="text-sm text-gray-600 hover:text-indigo-600">LinkedIn Profile</a>

                  <!-- 파일 다운로드 버튼 -->
                  <a href="/path/to/file.pdf" download class="text-sm text-gray-600 hover:text-indigo-600">이진우_resume(not uploaded).pdf</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
