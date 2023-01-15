let Nl = 0
let Ns = 0
let Nuit = 0
let Présence = 0
basic.forever(function () {
    Nl = input.lightLevel()
    Ns = input.soundLevel()
    if (Nl >= 80) {
        Nuit = 0
    } else {
        Nuit = 1
    }
    if (Ns >= 128) {
        Présence = 0
    } else {
        Présence = 1
        if ((Nuit && Présence) == 1) {
        	
        } else {
        	
        }
    }
})
