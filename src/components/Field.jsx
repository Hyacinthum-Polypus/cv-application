import {useState} from 'react'

function Field({status, fieldName}) {

    const [fieldValue, setFieldValue] = useState("");

    return (
    <div>
        <p>{fieldName}</p>
        {
            status === 'editing' &&
            <input 
            type="text"
            value={fieldValue}
            onChange={(event) => setFieldValue(event.target.value)}
            />
        }
        {
            status === 'submitted' &&
            <p>{fieldValue}</p>
        }
    </div>
    )
}

export default Field;