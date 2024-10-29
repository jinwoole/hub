<!-- +page.svelte -->
<script>
    // Pretendard 폰트 설정
    const profile = {
      name: "이진우",
      title: "임금체불을 맞이해 실존적 고민 하는 중",
      location: "서울, 대한민국",
      email: "jinwoolee42@outlook.com",
      linkedin: "https://www.linkedin.com/in/jinwoo-lee-profile/"
    };
  
    const experiences = [
      {
        position: "경영전략팀",
        company: "티맥스클라우드",
        duration: "2023.12 - 현재",
        details: [
          "시장 리서치",
          "글로벌 파트너십"
        ]
      }
    ];
  
    const education = [
      { school: "중앙대학교", degree: "사회학", year: "2016.3 - 2022.8" },
      { school: "42 서울", degree: "컴퓨터 공학", year: "2021.9 - 2023.9" },
    ];

    const certifications = [
      { institution: "AWS", title: "AWS Cloud Practitioner", year: "2023.7" },
      { institution: "AWS", title: "AWS Solutions Architect Associate", year: "2024.9" },
      { institution: "English", title: "OPIc IH", year: "2023.9" },
    ];
  
    const skills = ["C", "AWS", "Svelte", "Powerpoint", "Word"];
  
    const projects = [
      {
        name: "실무 프로젝트 경험 없음",
        description: "멍청한 위기가 발생하지 않았다면, 놀라운 일을 많이 이뤘을텐데",
        link: "/projects/profile-website"
      }
    ];
</script>

<section class="py-12 font-pretendard">
  <div class="container mx-auto max-w-2xl px-4 text-left">
    <!-- Profile Section -->
    <div class="text-center mb-10">
      <h1 class="text-4xl font-bold text-gray-900">{profile.name}</h1>
      <p class="text-lg text-gray-600 mt-2">{profile.title}</p>
      <p class="text-sm text-gray-500">{profile.location}</p>
      <div class="mt-2 flex justify-center space-x-4">
        <a href="mailto:{profile.email}" class="text-blue-600 hover:underline">{profile.email}</a>
        <a href="{profile.linkedin}" target="_blank" class="text-blue-600 hover:underline">LinkedIn</a>
      </div>
    </div>

    <!-- Experience Section -->
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">
        <span class="bg-yellow-200 px-1 rounded">Experiences</span>
      </h2>
      {#each experiences as experience}
        <div class="mb-4">
          <h3 class="text-lg font-semibold text-gray-900">{experience.position}</h3>
          <p class="text-sm text-gray-500">{experience.company} | {experience.duration}</p>
          <ul class="mt-2 ml-4 list-disc text-gray-700">
            {#each experience.details as detail}
              <li>{detail}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- Education Section -->
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">
        <span class="bg-yellow-200 px-1 rounded">Educations</span>
      </h2>
      {#each education as edu}
        <div class="mb-4">
          <h3 class="text-lg font-semibold text-gray-900">{edu.degree}</h3>
          <p class="text-sm text-gray-500">{edu.school} | {edu.year}</p>
        </div>
      {/each}
    </div>

    <!-- Certifications Section -->
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">
        <span class="bg-yellow-200 px-1 rounded">Certifications</span>
      </h2>
      {#each certifications as cert}
        <div class="mb-4">
          <h3 class="text-lg font-semibold text-gray-900">{cert.title}</h3>
          <p class="text-sm text-gray-500">{cert.institution} | {cert.year}</p>
        </div>
      {/each}
    </div>

    <!-- Skills Section -->
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">
        <span class="bg-yellow-200 px-1 rounded">기술 스택</span>
      </h2>
      <div class="flex flex-wrap gap-2">
        {#each skills as skill}
          <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">{skill}</span>
        {/each}
      </div>
    </div>

    <!-- Projects Section -->
    <div>
      <h2 class="text-2xl font-semibold mb-4">
        <span class="bg-yellow-200 px-1 rounded">프로젝트</span>
      </h2>
      {#each projects as project}
        <div class="mb-4">
          <h3 class="text-lg font-semibold text-gray-900">
            <a href="{project.link}" class="hover:underline text-indigo-600">{project.name}</a>
          </h3>
          <p class="text-gray-700">{project.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Pretendard 폰트를 Tailwind 기본 폰트로 설정 */
  .font-pretendard {
    font-family: 'Pretendard', sans-serif;
  }
</style>
