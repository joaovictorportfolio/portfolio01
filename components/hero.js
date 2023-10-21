

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

              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Olá 👋<br> Eu sou o João</h2>

              <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Como um profissional de <font class="font-semibold text-primary-600">UX/UI Design</font> e <font class="font-semibold text-primary-600">Desenvolvimento front-end</font>, foco em tornar a web <font class="font-semibold text-primary-600">mais bonita</font> e <font class="font-semibold text-primary-600">fácil de usar</font>.<br><br> Vamos criar algo <font class="font-semibold text-primary-600">incrível juntos!🚀👊</font></p>

              <p  class="mt-4 text-xl text-primary-600 md:mt-8 font-bold hover:opacity-[0.8]">

                  <a href="#sectionsobremim" class="relative inline-block ">

                      <span class="absolute inline-block w-full -bottom-2 h-2 bg-primary-500/70  text-black"></span>

                      <span class="relative"> Saiba mais </span>
                  </a>
                  
              </p>

          </div>

          <span class="relative lg:translate-x-16 max-lg:mt-10"
          
          data-aos="fade-left"
          data-aos-delay="2000"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
          
          >
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


