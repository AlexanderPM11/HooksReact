import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHooks = () => {

    const { counter, increment } = useCounter();

    return (
        <>
            <div>
                <h1>Custom Hooks</h1>
                <button
                    className='btn btn-primary'
                    onClick={() => increment(2)} >
                    {counter}
                </button>
            </div>

        </>
    )

}