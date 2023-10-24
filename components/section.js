

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
    

            <div
            
            
            
            >

                <p class="text-xl font-semibold text-gray-900">Um pouco sobre mim</p>

                <p class="mt-4 text-lg max-lg:text-base text-gray-700"><font class="font-semibold text-primary-600">Minha jornada</font> é sobre <font class="font-semibold text-primary-600">transformar visões em realidade</font>. Cada linha de código que escrevo é uma expressão da minha <font class="font-semibold text-primary-600">paixão</font> por criar <font class="font-semibold text-primary-600">experiências digitais únicas</font>. Através de uma combinação de <font class="font-semibold text-primary-600">habilidades técnicas</font> e <font class="font-semibold text-primary-600">criatividade</font>, transformo <font class="font-semibold text-primary-600">conceitos de design</font> em <font class="font-semibold text-primary-600">interfaces interativas</font> e <font class="font-semibold text-primary-600">funcionais</font>.<br><br> Meu compromisso é garantir que o código não seja apenas eficaz, mas também elegante e otimizado para <font class="font-semibold text-primary-600">proporcionar</font> a <font class="font-semibold text-primary-600">melhor experiência ao usuário.</font></p>
                


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
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Meu processo <font class="font-semibold text-primary-600">criativo</font> e orientado para <font class="font-semibold text-primary-600">resultados</font></p>
        </div>


        <div class="relative mt-12 lg:mt-20 swiper swiper1 max-w-7xl overflow-y-visible max-lg:translate-y-10  h-full">

            <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div class="relative flex  text-center swiper-wrapper max-md:max-w-xs  h-full">

                <div class="swiper-slide group/card  h-full max-lg:flex-col max-lg:flex">

                    <div class="group flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow group-hover/card:-translate-y-2 group-hover/card:bg-primary-600/70 ">

                        <span class="text-xl font-semibold text-gray-700 group-hover/card:text-white"> 1 </span>

                    </div>

                    <p class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Entendimento do Negócio</p>

                    <p class="absolute max-lg:relative  left-0 right-0 hidden max-lg:block group-hover/card:block animate__animated  animate__fadeIn mt-4 text-base text-gray-600 mx-auto max-w-xs"> Inicio projetos com análise minuciosa dos objetivos e necessidades do negócio. Isso inclui imersão na estratégia da empresa e definição de uma base sólida que guiará todas as decisões de design e desenvolvimento.</p>

                </div>

                <div class="swiper-slide group/card">

                    <div class="group flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow group-hover/card:-translate-y-2 group-hover/card:bg-primary-600/70 ">

                        <span class="text-xl font-semibold text-gray-700 group-hover/card:text-white"> 2 </span>

                    </div>

                    <p class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Experiência do Usuário</p>

                    <p class="absolute max-lg:relative left-0 right-0 hidden max-lg:block group-hover/card:block animate__animated  animate__fadeIn mt-4 text-base text-gray-600 mx-auto max-w-xs">Nesta etapa, foco em criar interfaces excepcionais usando design centrado no usuário, pesquisa e prototipagem para soluções intuitivas. Meu objetivo é garantir alta usabilidade e atender às necessidades dos usuários.</p>
                </div>

                <div class="swiper-slide group/card">

                    <div class="group flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow group-hover/card:-translate-y-2 group-hover/card:bg-primary-600/70 ">

                        <span class="text-xl font-semibold text-gray-700 group-hover/card:text-white"> 3 </span>

                    </div>

                    <p class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Desenvolvimento</p>

                    <p class="absolute max-lg:relative left-0 right-0 hidden max-lg:block group-hover/card:block animate__animated  animate__fadeIn mt-4 text-base text-gray-600 mx-auto max-w-xs">Traduzo o design em código com precisão, alto desempenho e inovação, mantendo compromisso com excelência técnica. Resultando em soluções digitais funcionais, usáveis e esteticamente cativantes.</p>

                </div>

            </div>

        </div>

    </div>


</section>
    
  
            
            
  <!-- Codigo -->
          
  
        `;

        var swiper = new Swiper(".swiper1", {
            slidesPerView: 1.2,
            spaceBetween: 30,
            speed:1000,

            autoplay:{
                delay:2000,
                disableOnInteraction:false,
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


class sectiontrabalhos extends HTMLElement {
    constructor() {
      super();

  
      this.innerHTML = `

    
  <!-- Codigo -->
  
 
  <section id="sectiontrabalhos" class="py-10 bg-white sm:py-16 lg:py-24 flex h-screen flex items-center justify-center overflow-hidden">

    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-col gap-10  lg:translate-y-20">

        <div class="max-w-2xl mx-auto text-center ">

            <h2 class="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">Meus trabalhos</h2>

            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Aqui você pode dar uma olhada em alguns dos <font class="font-semibold text-primary-600">projetos em que trabalhei.</font></p>

            

        </div>

        <div class="swiper swiper2 w-full max-lg:max-w-xs lg:scale-[0.85]">

        <div class="swiper-wrapper">

        <card-trabalho 

        imagem = "https://i.ibb.co/CVxvR8Z/Group-431.png"
        categoria="Front End"
        titulo = "E-commerce de alimentos orgânicos"
        texto = "Este projeto envolve a criação de um ecommerce de produtos orgânicos, podendo realizar pagamento via pix"

        item03 = "https://github.com/jvdesigner/ecommerce"

        link = "https://jvdesigner.github.io/ecommerce/index.html"


    class="swiper-slide"
    ></card-trabalho>

    <card-trabalho 

        imagem = "https://i.ibb.co/Fbv5hHY/Group-432-1.png"
        categoria="Front End"
        titulo = "Sistema de gerenciamento de estoque"
        texto = "Este projeto envolve a criação de um sistema de controle de estoque geral, onde é possível analisar o desempenho do seu estoque."

        item03 = "https://github.com/jvdesigner/controle-de-estoque-02"

        link = "https://jvdesigner.github.io/controle-de-estoque-02/"


    class="swiper-slide"
    ></card-trabalho>

        <card-trabalho 

            imagem = "https://i.ibb.co/9TSngc8/solnascente.png"
            categoria="UX/UI Design"
            titulo = "Site de venda de alimentos orgânicos"
            texto = "Este projeto envolve a criação de um site para uma empresa de agropecuária que cultiva e vende produtos orgânicos."

            item01 = "https://www.figma.com/file/EryVDBzW3BKqbYKaZN8AQY/Sol-Nascente?type=design&node-id=2%3A184&mode=design&t=OLi1W5gPgoDOs9D1-1"

            item02 = "https://www.figma.com/proto/EryVDBzW3BKqbYKaZN8AQY/Sol-Nascente?type=design&node-id=198-4390&t=nm00r7jqsMqwR6tY-1&scaling=scale-down&page-id=198%3A31&starting-point-node-id=198%3A4390&mode=design"

            link = "https://www.behance.net/gallery/177787457/Site-de-venda-de-produtos-organicos"


        class="swiper-slide"
        ></card-trabalho>

        <card-trabalho 

            imagem = "https://i.ibb.co/89dc50n/pelada.png"
            categoria="UX/UI Design"
            titulo = "Aplicativo de partidas de futebol"
            texto = "Este projeto envolve a criação de um aplicativo que permite gerenciar e ver estatísticas de partidas de futebol"

            item01 = "https://www.figma.com/file/lGjcQJ3zfYYsrMpklu643N/Aplicativo-de-gerenciamento-de-jogos?type=design&node-id=0%3A1&mode=design&t=w2DpnogiySh25eJK-1"

            item02 = "https://www.figma.com/proto/lGjcQJ3zfYYsrMpklu643N/Aplicativo-de-gerenciamento-de-jogos?type=design&node-id=152-69&t=yKKxOOq2WhPWDgFO-1&scaling=scale-down&page-id=123%3A11&starting-point-node-id=141%3A3&mode=design"

            link = "https://www.behance.net/gallery/170533765/Aplicativo-de-gerenciamento-de-jogos"


        class="swiper-slide"
        ></card-trabalho>

        <card-trabalho 

            imagem = "https://i.ibb.co/b6f1khR/Frame-132.png"
            categoria="UX/UI Design"
            titulo = "Aplicativo de controle de produção"
            texto = "Este projeto envolve a criação de um aplicativo para melhorar a qualidade dos processos produtivos em uma indústria farmacêutica."

            item01 = "https://www.figma.com/file/NsKMKyazaRBMzBmyy2x0cZ/Metodologia-5S?type=design&node-id=481%3A1111&mode=design&t=TAY9wbv3aXHiX4zd-1"

            item02 = "https://www.figma.com/proto/NsKMKyazaRBMzBmyy2x0cZ/Metodologia-5S?type=design&node-id=470-2980&t=Bycz0R8Bgc9hRgwW-1&scaling=contain&page-id=444%3A7861&starting-point-node-id=444%3A9935&mode=design"

            link = "https://www.behance.net/gallery/169938077/Lean-5s"


        class="swiper-slide"
        ></card-trabalho>



        

           

        </div>

        </div>

    </div>
    
</section>
    
  
            
            
  <!-- Codigo -->
          
  
        `;

        var swiper = new Swiper(".swiper2", {
            slidesPerView: 1.2,
            spaceBetween: 30,
            speed:700,

            pauseOnMouseEnter:true,

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
                slidesPerView: 3.2,
                spaceBetween: 30,
              },

            },

            
            
            
          });


  }}
  
  customElements.define("section-trabalhos", sectiontrabalhos);



  class sectionhabilidades extends HTMLElement {
    constructor() {
      super();

  
      this.innerHTML = `

    
  <!-- Codigo -->
  
 
  <section id="sectionhabilidades" class="py-10 bg-white sm:py-16 lg:py-24 flex h-screen flex items-center justify-center overflow-hidden">

    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-col gap-10  lg:translate-y-20">

        <div class="max-w-2xl mx-auto text-center ">

            <h2 class="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">Minhas Habilidades</h2>

            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"><font class="font-semibold text-primary-600">Minhas habilidades</font> abrangem uma variedade de <font class="font-semibold text-primary-600">áreas</font>, incluindo <font class="font-semibold text-primary-600">desenvolvimento web</font>, <font class="font-semibold text-primary-600">web design</font> e <font class="font-semibold text-primary-600">ux/ui design.</font></font></p>

            

        </div>

        <div class="swiper swiper3 w-full max-lg:max-w-xs lg:scale-[0.9] overflow-y-visible">

        <div class="swiper-wrapper">

            <card-habilidades 

            imagem = "https://i.ibb.co/JBbMNJG/image.png"
            titulo = "HTML, CSS, JavaScript"
            texto  = "Domino as linguagens fundamentais da web para criar interfaces e experiências interativas. Minha experiência em HTML, CSS e JavaScript me permite desenvolver sites e aplicativos que funcionam perfeitamente em diferentes plataformas."
            
            class="swiper-slide">
            </card-habilidades>

            <card-habilidades 

            imagem = "https://i.ibb.co/cc1HM2t/image.png"
            titulo = "Framework CSS - Tailwind"
            texto  = "Sou proficiente no uso do framework CSS Tailwind, que acelera o desenvolvimento front-end. Com o Tailwind, posso criar interfaces atraentes e altamente responsivas de maneira eficiente."
            
            class="swiper-slide">
            </card-habilidades>

            <card-habilidades 

            imagem = "https://i.ibb.co/GCNf0Sr/image.png"
            titulo = "Web Components"
            texto  = "Tenho experiência na criação de Web Components personalizados, o que permite o desenvolvimento de elementos reutilizáveis e modulares para interfaces web, melhorando a escalabilidade e a manutenção de projetos."
            
            class="swiper-slide">
            </card-habilidades>

            <card-habilidades 

            imagem = "https://i.ibb.co/G0QLjjF/image.png"
            titulo = "Web Design"
            texto  = "Minhas habilidades em web design envolvem a criação de interfaces visualmente atraentes e intuitivas. Foco na usabilidade e na harmonia visual para proporcionar experiências de usuário envolventes."
            
            class="swiper-slide">
            </card-habilidades>

            <card-habilidades 

            imagem = "https://i.ibb.co/g969f21/image.png"
            titulo = "Pesquisa com Usuários"
            texto  = "Realizo pesquisas com usuários para entender suas necessidades e preferências. Isso me ajuda a criar designs que atendem às expectativas do público-alvo, melhorando a satisfação do usuário."
            
            class="swiper-slide">
            </card-habilidades>

            <card-habilidades 

            imagem = "https://i.ibb.co/q1q7MDC/image.png"
            titulo = "Prototipagem - Figma"
            texto  = "Utilizo o Figma para criar protótipos interativos que ajudam na visualização e teste de conceitos de design. Isso agiliza o processo de design e colaboração com a equipe."
            
            class="swiper-slide">
            </card-habilidades>

            <card-habilidades 

            imagem = "https://i.ibb.co/SJsKbQx/image.png"
            titulo = "Teste de Usabilidade"
            texto  = "Conduzo testes de usabilidade para avaliar a eficácia das interfaces que crio. Isso me permite identificar melhorias e garantir que os produtos atendam às necessidades dos usuários."
            
            class="swiper-slide">
            </card-habilidades>
            
        </div>

        </div>

        
    </div>
    
</section>
    
  
            
            
  <!-- Codigo -->
          
  
        `;

        var swiper = new Swiper(".swiper3", {
            slidesPerView: 1.2,
            spaceBetween: 30,
            speed:700,
            grabCursor:true,

            pauseOnMouseEnter:true,

            

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
                slidesPerView: 3.2,
                spaceBetween: 30,
              },

            },

            
            
            
          });


  }}
  
  customElements.define("section-habilidades", sectionhabilidades);











