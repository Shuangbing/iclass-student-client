const playSounds = (soundName) => {
    var audio = new Audio(require(`../static/audio/${soundName}.mp3`))
    audio.play()
}

export default playSounds
