const CustomInput = ({label,...otherProps}) => {
    return (
        <label>
           <input {...otherProps}/>
        </label>
    );
}

export default CustomInput;