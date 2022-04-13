const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');
const apiUrl =`https://pokeapi.co/api/v2/pokemon/${id}`
const cardPoke= document.getElementById('cardPoke')

const main= async(url)=>{
    try{
        /*
        const cardsPoke=cardPoke.children
        if(cardsPoke.length>0){
            const cards= Array.from(cardsPoke)
            cards.forEach(card => cardPoke.removeChild(card))
        }*/
        const response= await fetch(url)
        const body= await response.json()
        console.log(body)
        const contImg = `
                    <div class="card m-5 bg-secondary text-white" >
                        <div class="d-flex justify-content-center"><img id="imgPoke" src="${body.sprites.front_default}" class="card-img-top animate__animated animate__heartBeat animate__infinite w-25" alt="..." onmouseout="imgPoke('${body.sprites.front_default}')"  onmouseover="hoverImgPoke('${body.sprites.front_shiny}')"></div>
                        <div class="card-body">
                        <h5 class="card-title">${body.name}</h5>
                        <p class="card-text">Nombre ${body.name} Numero en la Pokedex ${body.id} tamaño ${body.height} movimientos </p>
                        <div class="d-flex">
                            <div><h5>Habilidad</h5><ul id="ability" class="list-group list-group-flush"></div>
                            <div><h5>Estadisticas</h5><ul id="stat" class="list-group list-group-flush"></div>
                            </ul>
                        </div>
                        </div>
                    </div>
                    `
                    cardPoke.insertAdjacentHTML('afterbegin', contImg)
                    imprimirStats(body)
                    imprimirAbility(body)
        for(propiedad in body.sprites) {
        
            if(body.sprites[propiedad]!=null && body.sprites[propiedad]!=Object && body.sprites[propiedad]!='[object Object]'){
                
            }  
        } 
    }
    catch(error){
        console.log(error)
    }
}

const hoverImgPoke=(url)=>{
    idImg= document.getElementById('imgPoke')
    idImg.src=url
}

const imgPoke =(url)=>{
    idImg= document.getElementById('imgPoke')
    idImg.src=url
}

const imprimirAbility=(body)=>{
    const abilityId= document.getElementById('ability')
    let abilitys = body.abilities.map((ability)=>{
        return `${ability.ability.name}`
    })
    for(let i=0;i<abilitys.length;i++){
        const abiliLi=`<li class="list-group-item bg-secondary text-white">${abilitys[i]}</li>`
        abilityId.insertAdjacentHTML('afterbegin',abiliLi)
    } 
}

const imprimirStats =(body)=>{
    const stat= document.getElementById('stat')
    let pivo =  body.stats.map(function(obj){
        return `${obj.stat.name}: ${obj.base_stat}`
    })
    for(let i=0;i<pivo.length;i++){
        const statSpam =`<li class="list-group-item bg-secondary text-white">${pivo[i]}</li>`//
        stat.insertAdjacentHTML('afterbegin',statSpam)
    }    
}

main(apiUrl)