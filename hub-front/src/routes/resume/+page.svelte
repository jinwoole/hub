<!-- Resume Page -->
<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { language } from '$lib/stores/language';
  import { t } from '$lib/translations';
  
  $: profile = {
    name: t($language, 'resume.profile.name'),
    title: t($language, 'resume.profile.title'),
    location: t($language, 'resume.profile.location'),
    email: t($language, 'contact.email'),
    linkedin: "https://www.linkedin.com/in/jinwoo-lee-profile/"
  };

  $: experiences = t($language, 'resume.experiences').map((exp, index) => ({
    ...exp,
    current: index === 0
  }));

  $: education = t($language, 'resume.education');

  $: certifications = t($language, 'resume.certifications');

  $: skills = t($language, 'resume.skills');
  
  let isVisible = false;
  
  onMount(() => {
    isVisible = true;
  });
</script>

<section class="min-h-screen py-20 bg-white">
  <div class="container mx-auto max-w-5xl px-6 lg:px-8">
    
    <!-- Header Section -->
    {#if isVisible}
      <div class="text-center mb-20" in:fade={{ duration: 800 }}>
        <h1 class="text-5xl md:text-7xl font-thin tracking-wider text-primary-black mb-4">
          {profile.name}
        </h1>
        <p class="text-lg text-primary-gray font-light tracking-wide mb-2">{profile.title}</p>
        <p class="text-sm text-primary-gray tracking-wide">{profile.location}</p>
        
        <div class="mt-6 flex justify-center gap-8">
          <a 
            href="mailto:{profile.email}" 
            class="group text-sm text-primary-gray hover:text-accent-blue transition-colors duration-300 flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span class="relative">
              {profile.email}
              <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-blue group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>
          
          <a 
            href="{profile.linkedin}" 
            target="_blank" 
            class="group text-sm text-primary-gray hover:text-accent-blue transition-colors duration-300 flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span class="relative">
              {t($language, 'contact.linkedin')}
              <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-blue group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>
        </div>
      </div>
    {/if}

    <!-- Experience Timeline Section -->
    {#if isVisible}
      <div class="mb-24" in:fly={{ y: 20, duration: 800, delay: 200 }}>
        <h2 class="text-xs uppercase tracking-super-wide text-primary-gray mb-12">{t($language, 'resume.sections.experienceTimeline')}</h2>
        
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-[100px] top-0 bottom-0 w-[1px] bg-gray-200"></div>
          
          {#each experiences as experience, i}
            <div 
              class="relative flex items-start mb-12 group"
              in:fly={{ x: -20, duration: 600, delay: 300 + i * 100 }}
            >
              <!-- Date -->
              <div class="w-[80px] text-right pr-8">
                <p class="text-xs text-primary-gray tracking-wide">{experience.duration}</p>
                <p class="text-xs text-primary-gray">—</p>
                <p class="text-xs text-primary-gray tracking-wide">{experience.endDate}</p>
              </div>
              
              <!-- Dot -->
              <div class="absolute left-[96px] w-2 h-2 rounded-full bg-primary-black group-hover:scale-150 transition-transform duration-300 {experience.current ? 'animate-pulse' : ''}"></div>
              
              <!-- Content -->
              <div class="pl-12 flex-1">
                <h3 class="text-xl font-light text-primary-black mb-1 tracking-wide">
                  {experience.company}
                  {#if experience.current}
                    <span class="ml-2 text-xs uppercase tracking-wider text-accent-blue">{t($language, 'resume.sections.current')}</span>
                  {/if}
                </h3>
                <p class="text-sm text-primary-gray mb-1">{experience.position} · {experience.team}</p>
                
                <ul class="mt-4 space-y-2">
                  {#each experience.details as detail}
                    <li class="flex items-start gap-2 text-sm text-primary-gray">
                      <span class="w-1 h-1 rounded-full bg-primary-gray mt-2 flex-shrink-0"></span>
                      <span class="leading-relaxed">{detail}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Education Timeline -->
    {#if isVisible}
      <div class="mb-24" in:fly={{ y: 20, duration: 800, delay: 400 }}>
        <h2 class="text-xs uppercase tracking-super-wide text-primary-gray mb-12">{t($language, 'resume.sections.education')}</h2>
        
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-[100px] top-0 bottom-0 w-[1px] bg-gray-200"></div>
          
          {#each education as edu, i}
            <div 
              class="relative flex items-start mb-10 group"
              in:fly={{ x: -20, duration: 600, delay: 500 + i * 100 }}
            >
              <!-- Date -->
              <div class="w-[80px] text-right pr-8">
                <p class="text-xs text-primary-gray tracking-wide">{edu.year}</p>
                <p class="text-xs text-primary-gray">—</p>
                <p class="text-xs text-primary-gray tracking-wide">{edu.endYear}</p>
              </div>
              
              <!-- Dot -->
              <div class="absolute left-[96px] w-2 h-2 rounded-full bg-primary-black group-hover:scale-150 transition-transform duration-300"></div>
              
              <!-- Content -->
              <div class="pl-12 flex-1">
                <h3 class="text-xl font-light text-primary-black mb-1 tracking-wide">{edu.school}</h3>
                <p class="text-sm text-primary-gray">{edu.degree} · {edu.field}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Certifications Grid -->
    {#if isVisible}
      <div class="mb-24" in:fly={{ y: 20, duration: 800, delay: 600 }}>
        <h2 class="text-xs uppercase tracking-super-wide text-primary-gray mb-12">{t($language, 'resume.sections.certifications')}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {#each certifications as cert, i}
            <div 
              class="group p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
              in:fade={{ duration: 600, delay: 700 + i * 100 }}
            >
              <div class="text-2xl mb-3">{cert.badge}</div>
              <h3 class="text-lg font-light text-primary-black mb-1">{cert.title}</h3>
              <p class="text-sm text-primary-gray">{cert.institution}</p>
              <p class="text-xs text-primary-gray mt-2 tracking-wide">{cert.year}</p>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Skills Matrix -->
    {#if isVisible}
      <div class="mb-24" in:fly={{ y: 20, duration: 800, delay: 800 }}>
        <h2 class="text-xs uppercase tracking-super-wide text-primary-gray mb-12">{t($language, 'resume.sections.skillsExpertise')}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          {#each Object.entries(skills) as [category, items], i}
            <div in:fade={{ duration: 600, delay: 900 + i * 100 }}>
              <h3 class="text-sm uppercase tracking-wider text-primary-gray mb-4">{category}</h3>
              <div class="space-y-3">
                {#each items as skill}
                  <div class="group flex items-center gap-3">
                    <div class="w-1 h-1 rounded-full bg-primary-gray group-hover:bg-accent-blue transition-colors"></div>
                    <span class="text-sm text-primary-black font-light">{skill}</span>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    
    
  </div>
</section>

<style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  
  :global(::selection) {
    background-color: rgba(0, 102, 255, 0.1);
    color: #0066FF;
  }
</style>