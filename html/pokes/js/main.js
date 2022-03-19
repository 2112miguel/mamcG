const texto= document.querySelector('pre')
const img= document.querySelector('img')
const imgenes= document.getElementById('imagenes')
const selectPoke= document.getElementById('seleccionaPoke')
//const imgPoke= document.getElementById('imgPoke')
const url ='https://pokeapi.co/api/v2/pokemon/ditto'

//import { getPokes } from "./PokeService.js" seleccionaPoke
const hoverImgPoke=(url)=>{
    idImg= document.getElementById('imgPoke')
    idImg.src=url
}

const imgPoke =(url)=>{
    idImg= document.getElementById('imgPoke')
    idImg.src=url
}

const seleccionaPoke =async()=>{
    const url='https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
    try{
        const response= await fetch(url)
        const todosPokes= await response.json()
        
        let pivo = todosPokes.results.slice().reverse().forEach((obj)=>{
           // let pokeObje={} ${obj.name} ${obj.name} onclick="mainOp2('${obj.url}')"
            const listPoke =`<button type="button" class="list-group-item list-group-item-dark animate__delay-5s animate__slower list-group-item-info" onclick="mainOp2('${obj.url}')">${obj.name}</button>`
            selectPoke.insertAdjacentHTML('afterbegin',listPoke)
            //pokeObje[obj.name]=obj.url
            return listPoke
        })
        //console.log(pivo)
        
    }
    catch(error){
        console.log(error)
    }
}

const pokeSelecionado =()=>{

}

const mainOp2= async(url)=>{
    try{
        const cardsPoke=imgenes.children
        if(cardsPoke.length>0){
            const cards= Array.from(cardsPoke)
            cards.forEach(card => imgenes.removeChild(card))
        }
        //console.log(url)
       // const url ='https://pokeapi.co/api/v2/pokemon/ditto'
        const response= await fetch(url)
      //  console.log(response)
        const body= await response.json()
       // console.log(body.sprites)
        const contImg = `
                    <div class="card m-5 bg-secondary text-white" style="width: 18rem;">
                        <img id="imgPoke" src="${body.sprites.front_default}" class="card-img-top animate__animated animate__heartBeat animate__infinite" alt="..." onmouseout="imgPoke('${body.sprites.front_default}')"  onmouseover="hoverImgPoke('${body.sprites.front_shiny}')">
                        <div class="card-body">
                        <h5 class="card-title">${body.name}</h5>
                        <p class="card-text">Nombre ${body.name} Numero en la Pokedex ${body.id} tamaño ${body.height} movimientos </p>
                        <ul id="stat" class="list-group list-group-flush">
                        </ul>
                        
                        </div>
                    </div>
                    `
                    imgenes.insertAdjacentHTML('afterbegin', contImg)
                    imprimirStats(body)
        for(propiedad in body.sprites) {
        
            if(body.sprites[propiedad]!=null && body.sprites[propiedad]!=Object && body.sprites[propiedad]!='[object Object]'){
                
            }  
        } 
    }
    catch(error){
        console.log(error)
    }
}

const imprimirStats =(body)=>{
    const stat= document.getElementById('stat')
    let pivo =  body.stats.map(function(obj){
        return `${obj.stat.name}: ${obj.base_stat}`
    })
    /** */
    for(let i=0;i<pivo.length;i++){
        const statSpam =`<li class="list-group-item bg-secondary text-white">${pivo[i]}</li>`//
        stat.insertAdjacentHTML('afterbegin',statSpam)
    } 
    
}

seleccionaPoke()