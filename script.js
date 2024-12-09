// Variaveis para o input file e para o Img
let inputFile = document.querySelector("input#profileImg");
let profileImg = document.querySelector("img#profileImg");

//event listener que ao alterar o "file" proca a função
inputFile.addEventListener('change', function(event){

    // cria a variavel que recebe o arquivo selecionado em files
    const file = event.target.files[0];

    //checa se a variavel possui valor verdadeiro
    if(file){

        //The FileReader interface lets web applications asynchronously read the contents of files
        //File Reader checa os arquivos, e o instancia 
        const reader = new FileReader();

        //Ao carregar, proca a função anom que atribui o valor do evento para o source da img, alterando-a
        reader.onload = function(e){
            profileImg.src = e.target.result;
        }   

        reader.readAsDataURL(file);
        }
})

