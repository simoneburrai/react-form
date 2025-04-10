function Form({ input, setInputTitle, onSubmit }) {

    const handleInputEvent = (e) => {
        setInputTitle(e.target.value);
    }

    return <>
        <input type="text" value={input} onChange={handleInputEvent} />
        <button ><i className="fa-solid fa-circle-plus"></i></button>
    </>
}

export default Form;