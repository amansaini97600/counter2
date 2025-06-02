import {useRef} from 'react';

function useSound() {
    return(type) => {
        const audio = new Audio(`/sound/${type}.mp3`)
    }
}