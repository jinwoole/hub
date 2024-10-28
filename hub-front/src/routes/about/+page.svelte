<script>
    let applicantInfoTitle = "Applicant Information";
    let applicantInfoDescription = "Personal details and application.";
    let fullNameLabel = "Full name";
    let fullName = "이진우";
    let applicationForLabel = "Application for";
    let applicationFor = "미생";
    let emailLabel = "Email address";
    let email = "jinwoolee42@outlook.com";
    let salaryLabel = "Salary expectation";
    let salary = "4200만원";
    let aboutLabel = "About";
    let aboutText =
      "내용 채워넣을 예정";
    let attachmentsLabel = "Attachments";
    let resumeFileName = "이것도 작성해야지 휴.pdf";
    let resumeFileSize = "2.4mb";
    let coverLetterFileName = "coverletter_back_end_developer.pdf";
    let coverLetterFileSize = "4.5mb";
    let downloadText = "Download";
  </script>
  
  <div class="p-6 sm:p-8 lg:p-10">
    <div class="bg-white shadow-2xl rounded-lg overflow-hidden">
      <div class="p-6 sm:p-8">
        <h3 class="text-base font-semibold leading-7 text-gray-900">{applicantInfoTitle}</h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{applicantInfoDescription}</p>
      </div>
      <div class="border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="p-6 sm:p-8 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-medium leading-6 text-gray-900">{fullNameLabel}</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{fullName}</dd>
          </div>
          <div class="p-6 sm:p-8 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-medium leading-6 text-gray-900">{applicationForLabel}</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{applicationFor}</dd>
          </div>
          <div class="p-6 sm:p-8 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-medium leading-6 text-gray-900">{emailLabel}</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{email}</dd>
          </div>
          <div class="p-6 sm:p-8 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-medium leading-6 text-gray-900">{salaryLabel}</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{salary}</dd>
          </div>
          <div class="p-6 sm:p-8 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-medium leading-6 text-gray-900">{aboutLabel}</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{aboutText}</dd>
          </div>
          <div class="p-6 sm:p-8 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-medium leading-6 text-gray-900">{attachmentsLabel}</dt>
            <dd class="mt-2 text-sm text-gray-900 sm:col-span-2">
              <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div class="flex w-0 flex-1 items-center">
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z" clip-rule="evenodd" />
                    </svg>
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                      <span class="truncate font-medium">{resumeFileName}</span>
                      <span class="flex-shrink-0 text-gray-400">{resumeFileSize}</span>
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">{downloadText}</a>
                  </div>
                </li>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div class="flex w-0 flex-1 items-center">
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z" clip-rule="evenodd" />
                    </svg>
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                      <span class="truncate font-medium">{coverLetterFileName}</span>
                      <span class="flex-shrink-0 text-gray-400">{coverLetterFileSize}</span>
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">{downloadText}</a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  