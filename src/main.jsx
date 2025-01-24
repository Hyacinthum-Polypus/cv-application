import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Section from './components/Section.jsx'
import Field from './components/Field.jsx'
import MultiField from './components/MultiField.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>CV/Resume</h1>
    <Section sectionName="Personal Details">
      <Field fieldName="First Name"/>
      <Field fieldName="Last Name"/>
      <Field fieldName="Age"/>
    </Section>
    <Section sectionName="Education">
      <MultiField>
        <Field fieldName="School"/>
        <Field fieldName="From"/>
        <Field fieldName="To"/>
        <Field fieldName="Degree" />
      </MultiField>
    </Section>
    <Section sectionName="Work" >
      <MultiField>
        <Field fieldName="Name of Employer" />
        <Field fieldName="From" />
        <Field fieldName="To" />
        <Field fieldName="Responsibilities" />
      </MultiField>
    </Section>

  </StrictMode>
)
