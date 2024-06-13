async function listaVideos() {
    const res = await fetch('http://localhost:3000/videos')
    const videos = await res.json()

    return videos
}

async function criaVideo(titulo, descricao, url, imagem) {
    const res = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })    
    const videos = await res.json()

    return videos
}

async function buscaVideo(termoDeBusca) {
    const res = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const videos = res.json()

    return videos
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}