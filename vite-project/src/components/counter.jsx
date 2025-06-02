import { use, useState } from 'react';
import useSound from '../hooks/useSound'


function Counter() {
    const [count, setCount] = useState(0);
    const [error, setError] = useState("");
    const playSound = useSound();

    const increase = () => {
        if (count < 200) {
            setCount(count + 1);
            setError("");
            playSound("increase");
        } else {
            setError("Max limit reached (200)")
        }
    }
    
    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
            setError("");
            playSound("decrease");
        } else {
            setError("count cnanot be less than 0");
        }
    }
    
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
                        disabled={count <= 0}>
                        Decrease-
                    </button>
                    <button
                        onClick={reset}
                        disabled={count <= 0}>
                        Reset
                    </button>
                    <button
                        onClick={increase}
                        disabled={count >= 200}>
                        Increase+
                    </button>
                </div>
            </div>
        </>
    )
}

export default Counter;