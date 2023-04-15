

export const InputField = ({
    labelText,
    type,
    name,
    placeholder,
    value,
    onChange,
    isSurpriseMe,
    onSurprise
}) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <label htmlFor={name}>{labelText}</label>
                {
                    isSurpriseMe && (
                        <button
                            type="button"
                            onClick={onSurprise}
                            className="px-2 py-1 text-xs font-semibold bg-gray-200 outline-none rounded-[5px]"
                        >
                            Surprise Me
                        </button>
                    )}
            </div>
            <input
                id={name}
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required
            />
        </>
    )
}