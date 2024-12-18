const Input = ({ type, label, placeholder, name, value, onChange, divClassNames, customClassnames, error }) => {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className={`${divClassNames} flex flex-col gap-1`}>
            {label ? <label className="block  text-sm font-bold">{label}</label> : ""}
            <input
                className={`bg-primaryLight rounded w-full py-3 px-4 text-sm placeholder-gray-400 font-medium leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ring-gray-50 transition duration-200 ${customClassnames}`}
                type={type ? type : "text"}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleChange}
            />
            <span className="text-red-500">{error ? error : ""}</span>
        </div>
    );
};

export default Input;