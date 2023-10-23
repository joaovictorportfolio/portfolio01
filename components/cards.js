

// =================================== COMPONENTES =============================================== //


class cardtrabalho extends HTMLElement {
    constructor() {
      super();

      const imagem = this.getAttribute('imagem')
      const titulo = this.getAttribute('titulo')
      const categoria = this.getAttribute('categoria')
      const texto = this.getAttribute('texto')

      const link = this.getAttribute('link')

      const item01 = this.getAttribute('item01')||''
      const item02 = this.getAttribute('item02')||''
      const item03 = this.getAttribute('item03')||''


  
      this.innerHTML = `

    
  <!-- Codigo -->
  
 
  <div class="group relative rounded-3xl  space-y-6 overflow-hidden ">
  
        <span>
        <img
          class="mx-auto h-[24rem] w-full  object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          src=${imagem}
          alt="woman"
          loading="lazy"
          width="640"
          height="805"
        />
        </span>

        <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800/95 dark:bg-white translate-y-24 max-lg:translate-y-28 transition duration-300 ease-in-out group-hover:translate-y-0 ">

          <div class="relative">

          <dropdown-trabalho 
          item01="${item01}" item02="${item02}" item03="${item03}"
          class="absolute top-0 right-0 translate-x-4 z-20"></dropdown-trabalho>

            <h4 class="text-xl max-lg:text-lg font-semibold dark:text-gray-700 text-white">${titulo}</h4>

            <span class="block text-sm text-gray-300 translate-y-2 group-hover:translate-y-0">${categoria}</span>

          </div>


          <div class="mt-2 translate-y-14 group-hover:translate-y-0 text-gray-300 dark:text-gray-600">
          
          <p class="lg:text-sm">${texto}</p>

          <a href="${link}" target="_blank" class="flex items-center px-4 py-2 mt-4 w-1/2 max-lg:w-full flex items-center justify-evenly  font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary-600 rounded-lg hover:bg-primary-500 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-opacity-80">

                <span class="mx-1">Ver mais</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>

            </a>

            </div>
          
        </div>
        
      </div>
  
            
            
  <!-- Codigo -->
          
  
        `;


  }}
  
  customElements.define("card-trabalho", cardtrabalho);



