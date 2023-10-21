


// =================================== FUNCOES =============================================== //


export function adicionarSkeleton(bodySections,otherElements) {

    // Adiciona a classe "skeleton" a cada uma delas
    bodySections.forEach(element => {
      element.classList.add("skeleton");
    });
    
  
    // Adiciona a classe "skeleton2" a cada uma delas
    otherElements.forEach(element => {
      element.classList.add("skeleton2");
    });

    // adicionar o evento que remove
    window.addEventListener('load', function() {
        document.querySelectorAll('.skeleton, .skeleton2').forEach(function(element) {
            element.classList.remove('skeleton','skeleton2');
        });
    });

}

