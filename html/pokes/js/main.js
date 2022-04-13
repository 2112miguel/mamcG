const texto= document.querySelector('pre')
const img= document.querySelector('img')
const imgenes= document.getElementById('imagenes')
const selectPoke= document.getElementById('seleccionaPoke')
const url='https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
//const imgPoke= document.getElementById('imgPoke')
//import { getPokes } from "./PokeService.js" seleccionaPoke

const render = ()=>{
   // console.log("Entra")
    if(imgenes.children.length>0){
        const img=Array.from(imgenes.children)
        img.forEach((imgPokes)=>{
            imgenes.removeChild(imgPokes)
        })
    }
}


const seleccionaPoke =async()=>{
    
    try{
        const response= await fetch(url)
        const todosPokes= await response.json()
        
        let pivo = todosPokes.results.slice().reverse().forEach((obj)=>{
           // let pokeObje={} ${obj.name} ${obj.name} onclick="mainOp2('${obj.url}')"
            const listPoke =`<button type="button" class="list-group-item list-group-item-dark animate__delay-5s animate__slower list-group-item-info" onclick="irPoke('${obj.url}')">${obj.name}</button>`
            fetch(obj.url)
            .then((respuesta)=>respuesta.json())
            .then((body)=>{
                const cardsPokes=`
                <div class="card m-2" >
                    <img src="${body.sprites.front_default}" onclick="irPoke('${body.id}')" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${obj.name}</h5>
                    <h6>Numero ${body.id}</h6>
                    <a href="#" class="btn btn-primary" onclick="irPoke('${body.id}')">Conocer mas</a>
                    </div>
              </div>`
              selectPoke.insertAdjacentHTML('afterbegin',cardsPokes)
              
            })            
        }) 
    }
    catch(error){
        console.log(error)
    }
}

const pokeSelecionado =()=>{

}





const irPoke=(urlPoke)=>{
    const url = `/html/pokes/poke.html?id=${urlPoke}`///html/pokes/poke.html?id=${urlPoke}
    window.location=url
}

seleccionaPoke()