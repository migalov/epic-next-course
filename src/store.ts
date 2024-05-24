import { create } from "zustand";

type CalculationStore = {
    id: number,
    title?: string,
    parameters?: {
        id: number,
        title: string,
        name: string,
        dependsOn?: {
            name: string,
            value: string
        },
        options: {
            id: number,
            label: string,
            value: string
            dependsOn?: {
                name: string,
                value: string,
            },
        }[]
        
    }[],
    filteredOptions?: any,
    showOptions?: any
};

export const useCalculationData = create<CalculationStore>((set) => ({
    id: 1,
    title: "Листовая печать",
    parameters: [
        {
            id: 1,
            title: "Формат печати",
            name: "formatPrint",
            options: [
                {
                    id: 1,
                    label: "500x700",
                    value: "500x700"
                },
                {
                    id: 2,
                    label: "5200x720",
                    value: "520x720"
                },
                {
                    id: 3,
                    label: "330x482",
                    value: "330x482"
                }
            ]
        },
        {
            id: 2,
            title: "Красочность печати",
            name: "colorful_print",
            options: [
                {
                    id: 1,
                    label: "4+4",
                    value: "4+4"
                },
                {
                    id: 2,
                    label: "4+0",
                    value: "4+0"
                },
                {
                    id: 3,
                    label: "1+1",
                    value: "1+1"
                },
                {
                    id: 4,
                    label: "1+0",
                    value: "1+0"
                }
            ]
        },
        {
            id: 3,
            title: "Очередность печати",
            name: "formatPrint",
            options: [
                {
                    id: 1,
                    label: "В подбор",
                    value: "В подбор"
                },
                {
                    id: 2,
                    label: "Не в подбор",
                    value: "Не в подбор"
                }
            ]
        },
        {
            id: 4,
            title: "Материал",
            name: "material",
            options: [
                {
                    id: 1,
                    label: "Офсетная",
                    value: "Офсетная"
                },
                {
                    id: 2,
                    label: "Мелованная",
                    value: "Мелованная"
                },
                {
                    id: 3,
                    label: "Картон",
                    value: "Картон"
                },
                {
                    id: 4,
                    label: "Самоклейка",
                    value: "Самоклейка"
                }
            ]
        },
        {
            id: 5,
            title: "Поверхность материала",
            name: "materialSurface",
            options: [
                {
                    id: 1,
                    label: "Глянцевая",
                    value: "Глянцевая",
                    dependsOn: {
                        name: "material",
                        value: "Мелованная"
                    }
                },
                {
                    id: 2,
                    label: "Матовая",
                    value: "Матовая",
                    dependsOn: {
                        name: "material",
                        value: "Мелованная"
                    }
                },
                {
                    id: 3,
                    label: "Односторонний",
                    value: "Односторонний",
                    dependsOn: {
                        name: "material",
                        value: "Картон"
                    }
                },
                {
                    id: 4,
                    label: "Двухсторонний",
                    value: "Двухсторонний",
                    dependsOn: {
                        name: "material",
                        value: "Картон"
                    }
                }
            ]
        }
    ],
    filteredOptions: () => (e: any) => {
        console.log(e);
        
        // set(
        // (state) => ({
        //     parameters: state.parameters?.filter(option => (option?.dependsOn?.name === name && option?.dependsOn?.value === value))
        // }))
    }

}));

// type CounterStore = {
//     count: number;
//     increment: () => void;
//     incrementAsync: () => Promise<void>;
//     decrement: () => void;
// };

// export const useCounterStore = create<CounterStore>((set) => ({
//     count: 0,
//     increment: () => {
//         set({ count: 1 });
//     },
//     decrement: () => {
//         set({ count: -1 });
//     }
// }));

// export const useCounterStore = create<CounterStore>((set) => ({
//     count: 0,
//     increment: () => {
//         set((state) => ({ count: state.count + 1 }));
//     },
//     incrementAsync: async () => {
//         // await new Promise((resolve) => setTimeout(resolve, 1000));
//         const response = await new Promise((resolve) => setTimeout(resolve, 1000));
//         set((state) => ({ count: state.count + 1 }));
//     },
//     decrement: () => {
//         set((state) => ({ count: state.count - 1 }));
//     }
// }));