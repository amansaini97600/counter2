import { use, useRef, useState } from 'react';
import useSound from '../hooks/useSound'


function Counter() {
    const [count, setCount] = useState(0);
    const [error, setError] = useState("");
    const interveRef = useRef(null);
    const playSound = useSound();
// this function for fast increase and decrease count
const handleMouseDown = (opretion) => {
    if(interveRef.current) return;

    interveRef.current = setInterval(() => {
        setCount((prev) => {
            let newValue = opretion === "add" ? prev + 1 : prev - 1;
            if(newValue >=200 || newValue <=0){
                clearInterval(interveRef.current);
                interveRef.current = null;
                return opretion === "add" ? 200 : 0; 
            }
            return newValue;
        })
    },100);
}

// this function for stop fast increase and decrease

const handleMouseUp = () => {
    clearInterval(interveRef.current);
    interveRef.current = null;
}


// this function for increase count
const increase = () => {
    if (count < 200) {
            setCount(count + 1);
            setError("");
            playSound("increase");
        } else {
            setError("Max limit reached (200)")
        }
    }
    
    // this function for decrease count
    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
            setError("");
            playSound("decrease");
        } else {
            setError("count cnanot be less than 0");
        }
    }
    
    // this function for reset count
    const reset = () => {
        setError("")
        setCount(0)
        playSound("reset");
    }

    return (
        <>
            <div className="mainContenair">
                <h1>Counter App</h1>
                <h2>Click To Button</h2>
                {error && <p style={{ color: "red", margin: "0px" }}>{error}</p>}
                <h2>{count}</h2>
                <div>
                    <button
                        onClick={decrease}
                        disabled={count <= 0}
                        onMouseDown={() => handleMouseDown("sub")}
                        onMouseLeave={handleMouseUp}
                        onMouseUp={handleMouseUp}>
                        Decrease(-)
                    </button>
                    <button
                        onClick={reset}
                        disabled={count <= 0}>
                        Reset
                    </button>
                    <button
                        onClick={increase}
                        disabled={count >= 200}
                        onMouseDown={() => handleMouseDown("add")}
                        onMouseLeave={handleMouseUp}
                        onMouseUp={handleMouseUp}>
                        Increase(+)
                    </button>
                </div>
            </div>
        </>
    )
}

export default Counter;