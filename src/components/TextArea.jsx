
const TextArea = ({
    label,
    placeholder,
    name,
    value,
    onChange,
    divClassNames,
    customClassnames,
    error,
    customCss
}) => {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className={`${divClassNames} flex flex-col gap-2`}>
            {label ? (
                <label className="block text-sm font-bold mb-2">
                    {label}
                </label>
            ) : (
                ""
            )}
            <textarea
                style={customCss}
                className={`bg-primaryLight placeholder-gray-400 font-medium rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ring-gray-50 transition duration-200 ${customClassnames}`}
                placeholder={placeholder}
                name={name}
                value={value}
                rows={5}
                onChange={handleChange}
            />
            <span className="text-red-500">{error ? error : ""}</span>
        </div>
    );
};

export default TextArea;