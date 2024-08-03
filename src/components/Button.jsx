const Button = ({
    children,
    customClassnames,
    bg,
    ...rest
}) => {
    return (
        <button
            className={`${bg ? bg : "bg-primaryLight"} hover:bg-primaryLightHovered text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring focus:ring-blue-300 ${customClassnames}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;