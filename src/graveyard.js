//play a middle 'C' for the duration of an 8th note
// one part
export function synthTone(){
    const synth = new Tone.Synth().toDestination();
    // use an array of objects as long as the object has a "time" attribute
    const part1 = new Tone.Part(((time, value) => {
        // the value is an object which contains both the note and the velocity
        synth.triggerAttackRelease(value.note, "8n", time, value.velocity);
    }), [{ time: 0, note: {}, velocity: 0.9 },
        { time: "0:2", note: "C4", velocity: 0.5 },
        { time: "0:4", note: "C3", velocity: 0.9 },
        { time: "0:6", note: "C4", velocity: 0.5 }
    ]).start(0);
    Tone.Transport.start();
}

// let values = Object.values(colors).forEach(val => console.log(val));
// const plucky = new Tone.PluckSynth().toDestination();


export function synthTone(){
    const poly = new Tone.PolySynth(Tone.AMSynth).toDestination();

    const seq = new Tone.Sequence((time, note) => {
        poly.triggerAttackRelease(note, 0.1, time);
        // subdivisions are given as subarrays
    }, [[207, 206, 199],[30, 34, 46],[65, 54, 72],[19, 21, 23]]).start(0);
    Tone.Transport.start();

    
    // Set tempo in BPM
    Tone.Transport.bpm.value = 80
    
}

export function synthTone(){

    makeSequence()


    const poly = new Tone.PolySynth(Tone.AMSynth).toDestination();

    poly.triggerAttackRelease([207, 206, 199], 1);
    Tone.Transport.start();
    
    // Set tempo in BPM
    Tone.Transport.bpm.value = 80
    
}


// this works 

import * as Tone from 'tone'
import json from './json/example.json'

let colors = {
    "CFCEC7": [207, 206, 199],
    "1E222E": [30, 34, 46],
    "3C3648": [65, 54, 72],
    "5D4C4C": [93, 76, 82],
    "131517": [19, 21, 23],
}

let data = json.data
var sliced = data.slice(0, 10); 

function getColors() {
    for(let i = 0; i < sliced.length; i++) {
        console.log(sliced[i])
    }
        // get RGB values for each row in JSON 
        let colorVals = sliced.map(function(element){
            let rgbArr = [element.Blue, element.Green, element.Red]
            return rgbArr;
        })
        
        console.log(colorVals);
}

let arr = []

function makeSequence() {
    // for each row, pass color to colors array
    arr.push(Object.values(colors))
    console.log(arr)
}


export function synthTone(){

    makeSequence()

    const now = Tone.now()
    const poly = new Tone.PolySynth(Tone.AMSynth).toDestination();

    getColors() 
    
    // this makes a sequence of notes
    poly.triggerAttack(arr[0][0], now);
    poly.triggerRelease(arr[0][0], now + 1);

    poly.triggerAttack(arr[0][1], now + 1);
    poly.triggerRelease(arr[0][1], now + 2);

    poly.triggerAttack(arr[0][2], now + 2);
    poly.triggerRelease(arr[0][2], now + 3);

    poly.triggerAttack(arr[0][3], now + 3);
    poly.triggerRelease(arr[0][3], now + 4);

    poly.triggerAttack(arr[0][4], now + 4);
    poly.triggerRelease(arr[0][4], now + 5);

    Tone.Transport.start();
}

let colors = {
    "CFCEC7": [207, 206, 199],
    "1E222E": [30, 34, 46],
    "3C3648": [65, 54, 72],
    "5D4C4C": [93, 76, 82],
    "131517": [19, 21, 23],
}

let arr = []

function makeSequence() {
    // for each row, pass color to colors array
    arr.push(Object.values(colors))
    console.log(arr)
}