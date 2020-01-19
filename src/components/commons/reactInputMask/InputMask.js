import React, { forwardRef, useState } from "react";
import ReactInputMask from 'react-input-mask';



const InputMask = (props, ref) => {

    const [inputvalue, setInputvalue] = useState();

    const onChange = e => {
        setInputvalue(e.target.value)
    }

    return (
        <ReactInputMask {...props} ref={ref} mask="99999-999" maskChar={null} onChange={onChange} value={inputvalue || ""} />
    );
};



export default forwardRef(InputMask);