<script>
    // You might want to import the Pretendard fonts here if not already included in your project
</script>

<style>
    .font-pretendard {
        font-family: 'Pretendard', sans-serif;
    }
    .font-pretendard-semibold {
        font-family: 'Pretendard', sans-serif;
        font-weight: 600;
    }
    .font-pretendard-medium {
        font-family: 'Pretendard', sans-serif;
        font-weight: 500;
    }
</style>

<div class="py-24 sm:py-32 font-pretendard">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-center text-base/7 font-pretendard-semibold text-indigo-600">아침을 조금 덜 귀찮게!</h2>
        <p class="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-pretendard-semibold tracking-tight text-gray-950 sm:text-5xl">루틴한 검색의 <br />유용한 파트너</p>

        <div class="mt-8 flex justify-center">
            <a href="https://dailynews.jinwoolee.info" target="_blank" class="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-base font-pretendard-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                데일리 뉴스 바로가기
            </a>
        </div>

        <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div class="relative lg:row-span-2">
                <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[2rem+1px]">
                    <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                        <p class="mt-2 text-lg/7 font-pretendard-medium tracking-tight text-gray-950 max-lg:text-center">일단 돌아는 갑니다</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">알리익스프레스에서 산 퇴역 제온과 미심쩍은 메인보드에서 구동됩니다.</p>
                    </div>
                    <div class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                        <div class="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                            <img class="size-full object-cover object-top" src="/src/routes/products/dailynews/dailynews1.png" alt="Daily News">
                        </div>
                    </div>
                </div>
                <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div class="relative max-lg:row-start-1">
                <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                    <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                        <p class="mt-2 text-lg/7 font-pretendard-medium tracking-tight text-gray-950 max-lg:text-center">MongoDB 기반 변경 가능한 키워드</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">키워드 변경도 웹 인터페이스로 가능합니다. 소스코드 볼 일이 없습니다. SQLite 쓰면 딱 좋을 그거에 굳이 몽고DB를 사용했죠.</p>
                        <div class="mt-4 flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                            <img class="h-[min(152px,40cqw)] object-cover object-center rounded-lg" src="/src/routes/products/dailynews/dailynews2.png" alt="keyword change">
                        </div>
                    </div>
                </div>
                <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                    <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                        <p class="mt-2 text-lg/7 font-pretendard-medium tracking-tight text-gray-950 max-lg:text-center">아예 없지는 않은 보안</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">인터넷으로 포트 뚫는 위험한 짓은 안했고요, 백엔드도 비밀번호 걸어놨어요.</p>
                    </div>
                    <div class="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                        <img class="h-[min(152px,40cqw)] object-cover object-center" src="https://tailwindui.com/plus/img/component-images/bento-03-security.png" alt="">
                    </div>
                </div>
                <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>
            <div class="relative lg:row-span-2">
                <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                    <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                        <p class="mt-2 text-lg/7 font-pretendard-medium tracking-tight text-gray-950 max-lg:text-center">이젠 기억도 안나는 코드</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">상황이 변하면 사람도 변합니다. 전략업무 하면서 코드 치는법은 거의 잊어버렸고 코딩은 AI에만 의존하고 있습니다. 코딩테스트 볼 것도 아니고 일단 작동은 하니깐 괜찮겠죠.</p>
                    </div>
                    <div class="relative min-h-[30rem] w-full grow">
                        <div class="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                            <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                                <div class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                    <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">main.go</div>
                                    <div class="border-r border-gray-600/10 px-4 py-2">docker-compose.yml</div>
                                </div>
                            </div>
                            <div class="px-6 pb-14 pt-6">
                                <span class="text-white text-sm font-pretendard-medium leading-6">int main(void)<br/>잠깐만... 고랭이었던가, 파이썬이었던가?<br />약 50%의 시간 절감 효과</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
        </div>
        <div class="mt-8 flex justify-center">
            <p class="text-lg font-pretendard-medium text-gray-700">
                수집한 링크를 이메일로 바꿔주는 프로그램도 만들어서 잘 써먹고 있는 중 사실 html 포맷으로 만들어서 아웃룩에 복붙함
            </p>
        </div>
    </div>
</div>
