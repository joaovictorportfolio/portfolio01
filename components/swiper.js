

 // ================================== IMPORTAR BIBLIOTECA DE CARROSSEL ================================================ //


 import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'



// =================================== COMPONENTES =============================================== //



class swiperpropostavalor extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->


  <div class="swiper mySwiper2 overflow-y-visible max-lg:overflow-x-visible max-lg:max-w-xs p-2 max-lg:p-0"
    
  data-aos="fade-left"
  data-aos-duration="800"
  data-aos-easing="linear"
  data-aos-mirror="true"
  
  >

      <div class="swiper-wrapper">

      <proposta-valor 

      imagemCard = "https://i.ibb.co/KGHkKxT/Group-542.png"
      tituloCard = "Desempenho"
      textoCard = "Auxiliar os jogadores a melhorarem seu desempenho por meio do acompanhamento de estatísticas individuais e identificação de áreas de melhoria."
      
      class="swiper-slide"></proposta-valor>

      <proposta-valor 
      
      imagemCard = "https://i.ibb.co/Wc0ZwL4/Group-541.png"
      tituloCard = "Competição"
      textoCard = "Promover uma competição saudável entre os jogadores, oferecendo rankings, pontuações e desafios para motivá-los a se superarem e alcançarem novos níveis de habilidade."
      
      class="swiper-slide"></proposta-valor>

      <proposta-valor 
      
      imagemCard = "https://i.ibb.co/gTHq6L4/Group-544.png"
      tituloCard = "Estatísticas"
      textoCard = "Fornecer estatísticas detalhadas sobre o desempenho dos jogadores, como gols, assistências, cartões e participações, permitindo uma análise profunda do seu progresso e histórico de jogos."
      
      class="swiper-slide"></proposta-valor>

      <proposta-valor 
      
      imagemCard = "https://i.ibb.co/C0X2Fpk/Group-547.png"
      tituloCard = "Organização"
      textoCard = "Simplificar a organização de partidas, permitindo agendamentos, confirmações de presença, controle de times e posicionamento dos jogadores, facilitando o gerenciamento geral dos jogos."
      
      class="swiper-slide"></proposta-valor>

      <proposta-valor 
      
      imagemCard = "https://i.ibb.co/Cbt4CdW/Group-548.png"
      tituloCard = "Conectividade"
      textoCard = "Facilitar a conexão entre os jogadores, permitindo a troca de mensagens, comentários e interações sociais dentro da plataforma, fortalecendo o senso de comunidade e colaboração."
      
      class="swiper-slide"></proposta-valor>

          
          

      </div>

  </div>



<!-- Codigo -->
        

      `;

      var swiper = new Swiper(".mySwiper2", {

          slidesPerView: 1,

          speed: 700,

          spaceBetween: 10,

          grabCursor: true,

        //freeMode:true,
          
          breakpoints: {

              300: {
                  slidesPerView: 1.2,
                  spaceBetween: 15,
                },

            640: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },

          },

        });


  }
}

customElements.define("swiper-propostavalor", swiperpropostavalor);





class swiperavaliacao extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->


<div class="swiper mySwiper4 max-w-xl max-lg:max-w-xs "

data-aos="fade-left"
data-aos-duration="800"
data-aos-easing="linear"
data-aos-mirror="true"

>

    <div class="swiper-wrapper  ">

      <testimonial-01 
      imagem = "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"
      nome = "Carlos Pereira"
      profissao = "Empreendedor"
      texto = "Para mim, o futebol é uma paixão, e 'Nossa Pelada' elevou o jogo a outro nível. A organização de partidas nunca foi tão fácil, e as estatísticas detalhadas ajudam a aprimorar minhas habilidades. Recomendo fortemente!"
      
      class="swiper-slide">
      </testimonial-01>

      <testimonial-01 
      imagem = "https://images.unsplash.com/photo-1536548665027-b96d34a005ae?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZSUyMHlvdW5nfGVufDB8fDB8fHww"
      nome = "André Costa"
      profissao = "Advogado"
      texto = "Eu uso o 'Nossa Pelada' para organizar partidas de futebol com meus alunos. A facilidade de uso e as estatísticas detalhadas tornaram nossas aulas mais interessantes e educativas. Excelente aplicativo!"
      
      class="swiper-slide">
      </testimonial-01>

      <testimonial-01 
      imagem = "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIweW91bmd8ZW58MHx8MHx8fDA%3D"
      nome = "Pedro Ribeiro"
      profissao = "Estudante"
      texto = "Usar 'Nossa Pelada' para organizar jogos com meus colegas é incrível. É divertido e fácil, e as estatísticas nos ajudam a melhorar. É como ter nosso próprio time profissional!"
      
      class="swiper-slide">
      </testimonial-01>

    </div>

    <div class="skeleton2 swiper-pagination"></div>

</div>


<!-- Codigo -->
        

      `;

      var swiper = new Swiper(".mySwiper4", {

          slidesPerView: 1,

          speed: 700,

          spaceBetween: 10,

          grabCursor: true,

          loop:true,

          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },

          autoplay:{
            disableOnInteraction:false,
            delay:5000,
          }

        //freeMode:true,
          

        });


  }
}

customElements.define("swiper-avaliacao", swiperavaliacao);








