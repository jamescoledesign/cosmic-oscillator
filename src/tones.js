import * as Tone from 'tone'
import json from './json/example.json'

let data = json.data
var sliced = data.slice(400, 700); // selected pixels from JSON

function getColors() {
    let increment = 0;
    const now = Tone.now()

    // get RGB values for each row in JSON 
    let colorVals = sliced.map(function(element){
        let rgbArr = [element.Blue, element.Green, element.Red]

        // make tone for each color in arr
        const poly = new Tone.PolySynth(Tone.MembraneSynth).toDestination();

        // adjust attack and release for each new tone
        poly.triggerAttack(rgbArr, now + increment);
        poly.triggerRelease(rgbArr, now + increment + 0.1);
        poly.volume.value = -10

        increment = increment + 0.1
    })
}

export function synthTone(){
    getColors() 
    Tone.Transport.start();
}