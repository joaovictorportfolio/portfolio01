

// =================================== COMPONENTES =============================================== //


class hero01 extends HTMLElement {
    constructor() {
      super();

  
      this.innerHTML = `

    
  <!-- Codigo -->
  
 
  <section id="sectionInicio" class="pt-56 max-lg:pt-32 overflow-hidden bg-white h-screen flex items-center justify-center">
  <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

      <div class="grid items-center grid-cols-1 md:grid-cols-2">

          <div
          
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          
          >

              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Olá 👋</h2>

              <p class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Eu sou o João</p>

              <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Como um profissional de <font class="font-semibold text-primary-600">UX/UI Design</font> e <font class="font-semibold text-primary-600">Desenvolvimento front-end</font>, <font class="font-semibold text-primary-600">foco</font> em melhorar a <font class="font-semibold text-primary-600">experiência do usuário</font> e <font class="font-semibold text-primary-600">criar soluções digitais inovadoras.</font><br><br> Vamos criar algo <font class="font-semibold text-primary-600">incrível juntos!🚀👊</font></p>

              <p  class="mt-4 text-xl text-primary-600 md:mt-8 font-bold hover:opacity-[0.8]">

                  <a href="#sectionsobremim" class="relative inline-block ">

                      <span class="absolute inline-block w-full -bottom-2 h-2 bg-primary-500/70  text-black"></span>

                      <span class="relative"> Saiba mais </span>
                  </a>
                  
              </p>

          </div>

          <span class="relative lg:translate-x-16 max-lg:mt-10 "
          
          data-aos="fade-left"
          data-aos-delay="2000"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          
          >

            <span class="absolute left-5 max-lg:left-0 top-48 z-10">
                <img class=" object-contain w-auto mx-auto h-24 floating" src="https://i.ibb.co/hWdVM1H/image.png" alt="" />
            </span>
            <span class=" absolute left-10 top-5 z-10">
                <img class="object-contain w-auto mx-auto h-16 max-lg:h-12 floating" src="https://i.ibb.co/zZNmGmm/image.png" alt="" />
            </span>
            <span class=" absolute right-10 top-64 z-10">
                <img class="object-contain w-auto mx-auto h-16 max-lg:h-12 floating" src="https://i.ibb.co/rcHwjRf/image.png" alt="" />
            </span>
            <span class="absolute right-14 top-40 z-10">
                <img class="object-contain w-auto mx-auto h-16 max-lg:h-12 floating" src="https://i.ibb.co/VqzsDwx/image.png" alt="" />
            </span>
            <span class=" absolute right-20 top-5 z-10">
                <img class="object-contain w-auto mx-auto h-16 max-lg:h-12 floating" src="https://i.ibb.co/7r9L4Z9/image.png" alt="" />
            </span>

              <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

              <img class="relative w-[90%] xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://i.ibb.co/RPGW4Qj/image.png" alt="" />




          </span>

      </div>
  </div>
 </section>

    
    
  
            
            
  <!-- Codigo -->
          
  
        `;


  }}
  
  customElements.define("hero-01", hero01);



