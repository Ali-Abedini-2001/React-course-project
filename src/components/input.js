const Input = ({type="text", name, value, label, onChange, placeholder }) => {
    return (
    <>
        <label htmlFor={name}>{label}</label>
        <input placeholder={placeholder}
            value={value}
            type={type}
            name={name}
            onChange={onChange} />
    </>
    );
}

export default Input;