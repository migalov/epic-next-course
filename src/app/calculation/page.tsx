"use client"

import React, { useEffect } from 'react';
import { useCalculationData } from '@/store';

export default function Calculation() {

    const calculationOptions = useCalculationData((state) => state.parameters);
    const title = useCalculationData((state) => state.title);
    const filteredOptions = useCalculationData((state) => state.filteredOptions)
    //const getOption = useCalculationData((state) => state)
    return <>
        <form action="">
            <h1>{title}</h1>
            <div className='flex flex-col gap-4'>
                {
                    calculationOptions?.map( parameter =>
                        <div key={parameter.id} className='flex items-start gap-4'>
                            <h3>{parameter.title}</h3>
                            <div className='flex items-center gap-4'>
                                {
                                    parameter?.options?.map( option =>
                                        <input
                                            key={option.id}
                                            className='
                                                appearance-none
                                                before:content-[attr(value)]
                                                p-2
                                                bg-gray-300
                                                hover:bg-gray-100
                                                checked:bg-green-200
                                                disabled:bg-red-200
                                                rounded-xl
                                                cursor-pointer
                                            '
                                            value={option.value}
                                            type="radio"
                                            name={parameter.name}
                                            onClick={filteredOptions}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    )
                }
                <h3>
                    
                </h3>
            </div>
        </form>
    </>
}


// // const logCount = () => {
// //     // const count = useCounterStore.getState().count;
// //     useCounterStore.setState({ count: 1 });

// //     // console.log(`Count: ${count}`);
    
// // }

// const setCount = () => {
//     useCounterStore.setState({ count: 1 });
// }

// const Calculation = () => {

//     const count = useCounterStore((state) => state.count);

//     return (
//         <div className='container py-4'>
//             <OtherComponent count={count} />
//         </div>
//     )
// }

// const OtherComponent = ({ count }: { count: number }) => {

//     const incrementAsync = useCounterStore((state) => state.incrementAsync);
//     const decrement = useCounterStore((state) => state.decrement);
//     useEffect(() => {
//         // logCount();
//         setCount();
//     }, []);

//     return <>
//         <div className='bg-violet-100 p-4 inline-block'>
//             {count}
//         </div>
//         <div className='flex gap-4'>
//             <button onClick={incrementAsync}>+</button>
//             <button onClick={decrement}>-</button>
//         </div>
//     </>
// }

// export default Calculation
