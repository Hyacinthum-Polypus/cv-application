import React,{useState} from 'react'
import '../styles/MultiField.css'

function MultiField({status, fieldName, children}) {

    const enhancedChildren = React.Children.map(children, child => React.cloneElement(child, {"status": status}));

    const [fields, setFields] = useState([[React.Children.map(enhancedChildren, child => React.cloneElement(child))]]);

    return (
        <div>
            {fields.map((group, index) => {
                return(
                    <div key={index} className="field-group">
                        {group}
                    </div>
                )
            })}
            <button onClick={() => setFields([...fields, [React.Children.map(enhancedChildren, child => React.cloneElement(child))]])}>Add</button>
            <button onClick={() => {if(fields.length > 0) setFields(fields.slice(0, -1))}}>Remove</button>
        </div>
    )

}

export default MultiField;