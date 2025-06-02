// import {useRef} from 'react';

function useSound() {
    return(type) => {
        const audio = new Audio(`/sounds/${type}.mp3`);
        audio.play();
        
    }
}

export default useSound;