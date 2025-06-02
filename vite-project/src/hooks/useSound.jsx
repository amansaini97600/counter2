import {useRef} from 'react';

function useSound() {
    const playingRef = useRef(false);

    return(type) => {
        if(playingRef.current) return;

        playingRef.current = true;
        const audio = new Audio(`/sounds/${type}.mp3`);
        audio.play();

        setTimeout(() => {
            playingRef.current = false;
        }, 200);
        
    }
}

export default useSound;