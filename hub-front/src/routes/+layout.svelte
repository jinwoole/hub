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
