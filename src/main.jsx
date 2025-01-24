import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Section from './components/Section.jsx'
import Field from './components/Field.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>CV/Resume</h1>
    <Section sectionName="Personal Details">
      <Field fieldName="First Name"/>
      <Field fieldName="Last Name"/>
      <Field fieldName="Age"/>
    </Section>
    <Section sectionName="Education">
      <Field fieldName="School"/>
      <Field fieldName="From"/>
      <Field fieldName="To"/>
      <Field fieldName="Degree" />
    </Section>
    <Section sectionName="Work" >
      <Field fieldName="Name of Employer" />
      <Field fieldName="From" />
      <Field fieldName="To" />
      <Field fieldName="Responsibilities" />
    </Section>

  </StrictMode>
)
