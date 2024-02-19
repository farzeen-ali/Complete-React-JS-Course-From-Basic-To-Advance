import React, { useState } from 'react';

const HOC = (OldComponent) => {
    const NewComponent = () => {
       const [value, setValue] = useState(0);
       const increment = () => {
        setValue(value + 1)
    } 
    return <OldComponent value={value} increment={increment} />
    }
    return NewComponent;
}

export default HOC;
