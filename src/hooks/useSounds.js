import { useEffect, useRef } from "react";
import * as Tone from 'tone';

const useSounds = () =>{
    
    const mySampler = useRef(null);

    useEffect(()=>{
        const sampler = new Tone.Sampler({
            urls: { 
                "A1" : "kick.mp3",
                "B1" : "snare.mp3",
                "C1" : "hihat.mp3",
                "D1" : "tom1.mp3",
                "E1" : "tom2.mp3",
                "F1" : "tom3.mp3",
        },
        release: 1,
        baseUrl: "https://tonejs.github.io/audio/drum-samples/TheCheebacabra1/",
        }).toDestination();

        Tone.loaded()
        .then(()=> mySampler.current = sampler); 
    },[]);

    const soundPlay = (note) => { mySampler.current.triggerAttackRelease([note], 4) };

    function handleKey ({key}){
        switch(key){
            case "a" : soundPlay('A1'); break;
            case "z" : soundPlay('B1'); break;
            case "e" : soundPlay('C1'); break;
            case "q" : soundPlay('D1'); break;
            case "s" : soundPlay('E1'); break;
            case "d" : soundPlay('F1'); break;
            default: break;
        }
    };

    useEffect(()=>{
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    },[])

    const ButtonsList = [
        { 
            soundPlay : () => soundPlay('A1'),
            name : "A"
        },{ 
            soundPlay : () => soundPlay('B1'),
            name : "Z"
        },{ 
            soundPlay : () => soundPlay('C1'),
            name : "E"
        },{ 
            soundPlay : ()=>soundPlay('D1'),
            name : "Q"
        },{ 
            soundPlay : () => soundPlay('E1'),
            name : "S"
        },{ 
            soundPlay : () => soundPlay('F1'),
            name : "D"
        }/*,{ 
            soundPlay : () => mySampler.current.triggerAttackRelease(["B5"], 4),
            keyCode: 87,
            name : "W"
        },{ 
            soundPlay : () => mySampler.current.triggerAttackRelease(["C5"], 4),
            keyCode: 88,
            name : "X"
        },{ 
            soundPlay : () => mySampler.current.triggerAttackRelease(["D5"], 4),
            keyCode: 67,
            name : "C"
        } */
    ]

    return {ButtonsList};
}

export default useSounds;