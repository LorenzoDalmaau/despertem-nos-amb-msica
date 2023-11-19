loops.everyInterval(1000, function () {
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("A F E F D G E F ", 133), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("G F G A - F E D ", 81), music.PlaybackMode.UntilDone)
    }
})
