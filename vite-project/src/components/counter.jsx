import { use, useState } from 'react';


function Counter() {
    const [count, setCount] = useState(0);
    const [error, setError] = useState("Error");

    const increase = () => {
        if(count<200){
            setCount(count + 1);
            setError("");
        }else{
            setError("Max limit reached (200)")
        }
    }

    const decrease = () => {
        if(count>0){
            setCount(count - 1);
            setError("");
        }else{
            setError("count cnanot be less than 0");
        }
    }

    return (
        <>
            <div className="mainContenair">
                <h1>Counter App</h1>
                <h2>Click To Button</h2>
                {error && <p style={{color: "red", margin: "0px"}}>{error}</p>}
                <h2>{count}</h2>
                <div>
                    <button
                        onClick={decrease}>
                    Decrease
                    </button>
                    <button>Reset</button>
                    <button onClick={increase}>Increase</button>
                </div>
            </div>
        </>
    )
}

export default Counter;