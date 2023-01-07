class Format {
    // Método recebe os ids existentes no html cria um elemento <div>
    // Após criar o elemento com um dataset recebendo os ids, é retornado a div com seu primeiro nó
    // com todas as chaves utilizando o Object.keys para pegalas do elemento;
    static getCamelCase(text){

        let div = document.createElement('div');

        div.innerHTML = `<div data-${text}="id"></div>`;

        return Object.keys(div.firstChild.dataset)[0];

    }

    static toTime(duration){

        let seconds = parseInt((duration / 1000) % 60);
        let minutes = parseInt((duration / (1000 * 60)) % 60);
        let hours = parseInt((duration / (1000 * 60 * 60)) % 24);

        if(hours > 0){
            return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }else{
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

    }

}