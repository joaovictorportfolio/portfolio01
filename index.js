




// =================================== COMPONENTES =============================================== //

import * as componenteHeader from './components/header.js'
import * as componenteHero from './components/hero.js'
import * as componenteSection from './components/section.js'
import * as componenteCards from './components/cards.js'
import * as componenteDropdown from './components/dropdown.js'
import * as componenteFooter from './components/footer.js'






// =================================== FUNCOES =============================================== //


import * as funcoesSkeleton from './functions/skeleton.js'
import * as funcoesObservador from './functions/observador.js'





// =================================== EXECUTAR =============================================== //

// -- Adicionar skeleton as tags -- //

const bodySections = document.querySelectorAll("body, section, header, footer");
const otherElements = document.querySelectorAll("li, p, h1, h2, h3, h4, a, span");

funcoesSkeleton.adicionarSkeleton(bodySections,otherElements)


//-- observador section -- //

funcoesObservador.controlarObservadorSection()


// -- Animacao scroll -- //

AOS.init();




  

  



















  