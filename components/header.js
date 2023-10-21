

// =================================== COMPONENTES =============================================== //


class header01 extends HTMLElement {
    constructor() {
      super();

  
      this.innerHTML = `

    
  <!-- Codigo -->



  <header class="max-lg:bg-white/95  lg:py-8 fixed w-full z-10 "  x-data="{ open: false }"

  data-aos="fade-down"
  data-aos-delay="50"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out"
  data-aos-mirror="false"
  data-aos-once="true"
  
  
  
  >
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav class="relative flex items-center justify-between h-16 bg-white/95 lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
              <div class="flex-shrink-0 ">
                  <a href="#" title="" class="flex items-center gap-2 text-xl hover:text-primary-600 ">
                      <img class="w-auto h-8 lg:h-10" src="./logoPage.png" alt="" />
                      </p class="">Portfolio</p>
                  </a>
              </div>
              <button @click="open = !open" class="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                  <svg :class="{ 'hidden': open, 'block': !open }" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                  <svg :class="{ 'block': open, 'hidden': !open }" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>

              <div class="hidden ml-10 lg:flex lg:items-center lg:space-x-10">

                  <a href="#sectionInicio" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600"> Início </a>

                  <a href="#sectionsobremim" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600"> Sobre </a>

                  <a href="#sectionmetodologia" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600"> Metodologia </a>

                  <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600"> Trabalhos </a>
              </div>

              <div class="hidden lg:items-center lg:space-x-10 ">
                  <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600"> Sign up </a>
                  <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-primary-600 focus:text-primary-600"> Sign in </a>
              </div>
          </nav>
          <!-- xs to lg -->
          <nav :class="{ 'flex': open, 'hidden': !open }" class="flex-col py-4 space-y-2">

              <a @click="open = !open" href="#sectionInicio" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-primary-600"> Início </a>

              <a @click="open = !open" href="#sectionsobremim" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-primary-600"> Sobre </a>

              <a @click="open = !open" href="#sectionmetodologia" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-primary-600"> Metodologia </a>

              <a @click="open = !open" href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-primary-600"> Pricing </a>

          </nav>
      </div>
  </header>



            
            
  <!-- Codigo -->
          
  
        `;


  }}
  
  customElements.define("header-01", header01);



