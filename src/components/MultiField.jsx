import {useState} from 'react'

function MultiField({status, fieldName, children}) {

    const enhancedChildren = React.Children.map(children, child => {
        // Check if the child is a React element to avoid errors
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {"status": status});
        }
        return child;
    });

    const [fields, setFields] = useState([{...enhancedChildren}]);

    return (
        <div>
            {fields}
            <button onClick={() => setNumberOfFields(fields.splice(fields.length, 0, enhancedChildren))}>Add</button>
            <button onClick={() => setNumberOfFields(fields.splice(fields.length-1, 1))}>Remove</button>
        </div>
    )

}