<script>
    // 텍스트 변수 정의
    let sectionTitle = "Proper Insights";
    let sectionSubtitle = "어느 정도의 사실을 제공합니다";
    let sectionDescription = "100% 정확하지는 않지만, 충분히 그럴듯한 이론을 제공합니다. 신뢰할 수 있는 데이터와 분석을 통한 로직 도출로 귀하의 비즈니스 결정을 지원합니다.";
    let buttonText = "Try It!";
    let buttonLink = "#service";

    // 기능 목록 데이터 배열
    let features = [
        {
            title: "Under Construction",
            description: "This feature is currently under construction. Please check back later for updates.",
            icon: "push"
        },
        {
            title: "Under Construction",
            description: "This feature is currently under construction. Please check back later for updates.",
            icon: "ssl"
        },
        {
            title: "Under Construction",
            description: "This feature is currently under construction. Please check back later for updates.",
            icon: "queue"
        },
        {
            title: "Under Construction",
            description: "This feature is currently under construction. Please check back later for updates.",
            icon: "security"
        }
    ];
</script>

<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <!-- 섹션 제목 -->
        <h2 class="text-base/7 font-semibold text-indigo-600">{sectionTitle}</h2>
        
        <!-- 섹션 부제목 -->
        <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">{sectionSubtitle}</p>
        
        <!-- 섹션 설명 -->
        <p class="mt-6 text-lg/8 text-gray-600">{sectionDescription}</p>
      </div>

      <!-- 서비스로 이동하는 버튼 -->
      <div class="mt-8 flex justify-center">
          <a href={buttonLink} class="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105">
              {buttonText}
          </a>
      </div>

      <!-- 기능 목록 -->
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {#each features as feature}
            <div class="relative pl-16">
              <dt class="text-base/7 font-semibold text-gray-900">
                <!-- 아이콘 -->
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    {#if feature.icon === 'push'}
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                        </svg>
                    {/if}
                    {#if feature.icon === 'ssl'}
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    {/if}
                    {#if feature.icon === 'queue'}
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    {/if}
                    {#if feature.icon === 'security'}
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
                        </svg>
                    {/if}
                </div>
                <!-- 제목 -->
                {feature.title}
              </dt>
              <!-- 설명 -->
              <dd class="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
            </div>
          {/each}
        </dl>
      </div>
    </div>
</div>

<!-- 서비스 섹션 -->
<div id="service" class="py-24 sm:py-32 bg-gray-100">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base/7 font-semibold text-indigo-600">Our Services</h2>
            <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">제 Needs에 맞는 통합 솔루션</p>
            <p class="mt-6 text-lg/8 text-gray-600">일단 제가 만족한 다음에야 세상을 만족시킬 수 있겠죠.</p>
            <!-- 추가적인 서비스 내용은 여기에 작성 -->
        </div>
    </div>
</div>
