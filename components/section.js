

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'


// =================================== COMPONENTES =============================================== //


class sectionsobremim extends HTMLElement {
    constructor() {
      super();

  
      this.innerHTML = `

    
  <!-- Codigo -->
  
 
  <section id="sectionsobremim" class="py-0  bg-white h-screen flex items-center justify-center"


  
  >

    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10 "

    
    
    >

        <div class="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center "
        

        
        >

            <h2 class="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl lg:leading-tight">

                Dando Vida a Ideias 

                <span class="relative inline-block">

                    <span class="absolute inline-block w-full h-2 bg-primary-600/80 -bottom-0"></span>
                    <span class="relative"> com Criatividade e Código </span>

                </span>

            </h2>

        </div>

        <div class="grid grid-cols-1 mt-20 max-lg:mt-10  gap-y-6 md:grid-cols-2 gap-x-10">


            <span>

                <img class=" w-[60%] rounded-md max-lg:w-1/2 mx-auto sm:max-w-xs" src="https://i.ibb.co/CthJqky/image.png" alt="" />

            </span>
    

            <div>

                <p class="text-lg font-semibold text-gray-900">Um pouco sobre mim</p>

                <p class="mt-4 text-lg max-lg:text-base text-gray-700"><font class="font-semibold text-primary-600">Minha jornada</font> é sobre <font class="font-semibold text-primary-600">transformar visões em realidade</font>. Cada linha de código que escrevo é uma expressão da minha <font class="font-semibold text-primary-600">paixão</font> por criar <font class="font-semibold text-primary-600">experiências digitais únicas</font>. Através de uma combinação de <font class="font-semibold text-primary-600">habilidades técnicas</font> e <font class="font-semibold text-primary-600">criatividade</font>, transformo <font class="font-semibold text-primary-600">conceitos de design</font> em <font class="font-semibold text-primary-600">interfaces interativas</font> e <font class="font-semibold text-primary-600">funcionais</font>. Meu compromisso é garantir que o código não seja apenas eficaz, mas também elegante e otimizado para <font class="font-semibold text-primary-600">proporcionar</font> a <font class="font-semibold text-primary-600">melhor experiência ao usuário.</font></p>
                


            </div>

        </div>

    </div>

</section>

    
    
  
            
            
  <!-- Codigo -->
          
  
        `;




  }}
  
  customElements.define("section-sobremim", sectionsobremim);



  class sectioncomotrabalho extends HTMLElement {
    constructor() {
      super();

  
      this.innerHTML = `

    
  <!-- Codigo -->
  
 
  <section id="sectionmetodologia" class="py-10 bg-white sm:py-16 lg:py-24 h-screen flex items-center max-lg:items-start justify-center ">

    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 max-lg:translate-y-20">
      
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">Como trabalho?</h2>
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Meu Processo <font class="font-semibold text-primary-600">Criativo</font> e Orientado para <font class="font-semibold text-primary-600">Resultados</font></p>
        </div>


        <div class="relative mt-12 lg:mt-20 swiper max-w-7xl overflow-y-visible max-lg:translate-y-10  h-full">

            <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div class="relative flex  text-center swiper-wrapper max-md:max-w-xs  h-full">

                <div class="swiper-slide group/card  h-full max-lg:flex-col max-lg:flex">

                    <div class="group flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow hover:-translate-y-2 hover:bg-primary-600/70 ">

                        <span class="text-xl font-semibold text-gray-700 group-hover:text-white"> 1 </span>

                    </div>

                    <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Entendimento do Negócio</h3>

                    <p class="absolute max-lg:relative  left-0 right-0 hidden max-lg:block group-hover/card:block animate__animated  animate__fadeIn mt-4 text-base text-gray-600 mx-auto max-w-xs"> Inicio projetos com análise minuciosa dos objetivos e necessidades do negócio. Isso inclui imersão na estratégia da empresa e definição de uma base sólida que guiará todas as decisões de design e desenvolvimento.</p>

                </div>

                <div class="swiper-slide group/card">

                    <div class="group flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow hover:-translate-y-2 hover:bg-primary-600/70 ">

                        <span class="text-xl font-semibold text-gray-700 group-hover:text-white"> 2 </span>

                    </div>

                    <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Experiência do Usuário</h3>

                    <p class="absolute max-lg:relative left-0 right-0 hidden max-lg:block group-hover/card:block animate__animated  animate__fadeIn mt-4 text-base text-gray-600 mx-auto max-w-xs">Nesta etapa, foco em criar interfaces excepcionais usando design centrado no usuário, pesquisa e prototipagem para soluções intuitivas. Meu objetivo é garantir alta usabilidade e atender às necessidades do público-alvo.</p>
                </div>

                <div class="swiper-slide group/card">

                    <div class="group flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow hover:-translate-y-2 hover:bg-primary-600/70 ">

                        <span class="text-xl font-semibold text-gray-700 group-hover:text-white"> 3 </span>

                    </div>

                    <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Desenvolvimento</h3>

                    <p class="absolute max-lg:relative left-0 right-0 hidden max-lg:block group-hover/card:block animate__animated  animate__fadeIn mt-4 text-base text-gray-600 mx-auto max-w-xs">Traduzo UX em código com precisão, alto desempenho e inovação, mantendo compromisso com excelência técnica. Resultam soluções digitais funcionais, usáveis e esteticamente cativantes.</p>

                </div>

            </div>

        </div>

    </div>

</section>
    
  
            
            
  <!-- Codigo -->
          
  
        `;

        var swiper = new Swiper(".swiper", {
            slidesPerView: 1.2,
            spaceBetween: 30,
            speed:1000,

            autoplay:{
                delay:2000,
                disableOnInteraction:true,
                waitForTransition:true,
            },
           

            breakpoints: {

                300: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },

              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },

            },

            
            
            
          });


  }}
  
  customElements.define("section-comotrabalho", sectioncomotrabalho);



