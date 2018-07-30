const fs = require('fs')

let el_liste_musiques = $('#liste_musiques')

/**
 * Récupère tous les fichiers .mp3 dans le dossier passé en paramètre
 * @param {string} path le chemin absolu du dossier
 */
const fetchMusicsPaths = (path) => {

    fs.readdir(path, (err, files) => {
        files.forEach((value) => {
            let element = document.createElement('li')
            let link = document.createElement('a')
            link.href = path + value
            link.innerHTML = value
            element.appendChild(link)
            el_liste_musiques.appendChild(element)
        })
    })

}

/**
 * Change le dossier contenant les mp3 lorsque l'utilisateur le décide
 */
$('#folder').addEventListener('change', () => {
    fetchMusicsPaths($('#folder').files[0].path + '/')
})

fetchMusicsPaths("/home/florian/Musique/")