type RadioProps = {
    name: string,
    items: {
        value: string
    }[],
    value: string | null,
    onChange: (value: string) => void
}

export default function RadioGroupCalculator({ name, items, value, onChange }: RadioProps) {
    return (
        <>
            {
                items.map( item => (
                    <input
                        key={item.value}
                        className="
                            appearance-none
                            bg-gray-200
                            checked:bg-green-200
                            disabled:bg-gray-100
                            before:content-[attr(data-value)]
                            p-2
                            rounded-md
                            cursor-pointer
                        "
                        name={name}
                        type="radio"
                        value={item.value}
                        checked={value === item.value}
                        onChange={e => onChange(e.target.value)}
                    />
                ))
            }
        </>
    )
}
