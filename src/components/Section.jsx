import React,{useState} from 'react'

function Section({sectionName, children }) {
    // editing or sIsubmitted
    const [status, setStatus] = useState('editing');

    const enhancedChildren = React.Children.map(children, child => {
        // Check if the child is a React element to avoid errors
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {"status": status});
        }
        return child;
    });
    
    

    return (
        <div className="cv-section">
            <h3>{sectionName}</h3>
            {enhancedChildren}
            <button onClick={() => setStatus('editing')}>Edit</button>
            <button onClick={() => setStatus('submitted')}>Submit</button>
        </div>
    )
}

export default Section