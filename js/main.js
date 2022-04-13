function navBar(){
    const barraNav = document.createElement('header')
    const div = document.createElement('div')
    const h3= document.createElement('h3')
    const nav = document.createElement('nav')
    const aHome = document.createElement('a')
    const aProyectos = document.createElement('a')
    const aContacto = document.createElement('a')
    const divMain = document.getElementById('divMain')

    
    barraNav.classList.add('mb-auto')
    h3.classList.add('float-md-start','mb-0')
    nav.classList.add('nav','nav-masthead','justify-content-center','float-md-end')
    aHome.classList.add('nav-link','active')
    aProyectos.classList.add('nav-link')
    aContacto.classList.add('nav-link')
    
    barraNav.append(div)
    div.append(h3)
    div.append(nav)
    nav.append(aHome)
    nav.append(aProyectos)
    nav.append(aContacto)

    h3.innerText='PORTAFOLIO'
    aHome.innerText='Home'
    aProyectos.innerText='Proyectos'
    aContacto.innerText='Contacto'
    divMain.append(barraNav)
}

function card(txt,imgLink,indexLink){
    const contenedor=document.getElementById('contenedor')
    const divCol = document.createElement('div')
    const divCardSha = document.createElement('section')
    const divBody = document.createElement('article')
    const pCard= document.createElement('p')
    const divFlex= document.createElement('div')
    const divBtn = document.createElement('div')
    const botonCard = document.createElement('button')
    const botonView = document.createElement('a')
    const txtMuted = document.createElement('small')
    const imgCard = document.createElement('img')
    const aImg = document.createElement('a')

    divCol.classList.add('col')
    divCardSha.classList.add('card','shadow-sm','bg-dark')
    divCardSha.style='height: 550px;'
    divBody.classList.add('card-body')
    pCard.classList.add('card-text','text-white')
    divFlex.classList.add('d-flex','justify-content-between','align-items-center')
    divBtn.classList.add('btn-group')
    botonCard.classList.add('btn','btn-sm','btn-outline-secondary')
    botonView.classList.add('btn','btn-sm','btn-outline-secondary')
    txtMuted.classList.add('text-muted')
    imgCard.src=imgLink
    imgCard.classList.add('img-fluid','w-75','m-5')
    aImg.href=indexLink
    aImg.append(imgCard)
    divCol.append(divCardSha)
    divCardSha.append(aImg)
    divCardSha.append(divBody)
    divBody.append(pCard)
    divBody.append(divFlex)
    divFlex.append(divBtn)
    divBtn.append(botonView)
    botonView.innerText='View'
    botonView.href=indexLink
    divFlex.append(txtMuted)
    txtMuted.innerText='9 mins'
    pCard.innerText=txt
    contenedor.append(divCol)
    //body.append(divCol)
}

card('Clon de DevTo hecho en css y Boostrap','./img/devToClon.jpg','./html/devToClon/devTo.html')
card('Clon de static','./img/static Clon.jpg','./html/static-job-clon/static.html')
card('Clon de Google','./img/clonGoogle.jpg','./html/googleClon/google.html')
card('Biblioteca Pokemon hecha en Bootstrap javascript y animate css','','./html/pokes/pokedex.html')
card('Clon de Netflix de la pantalla de seleccion de usuario','./img/netflixClon.jpg','./html/neflixClon/netflix.html')
card('Clon de NFT','./img/nft.jpg','./html/nftClon/nft.html')
card('Cartas pokemon con su respectivos colores shinys','./img/cardsPoke.jpg','./html/pokeCards/pokemonCartas.html')
card('Banderas hechas en CSS','./img/flags.jpg','./html/flags/banderas.html')




