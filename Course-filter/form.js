import React, { useState } from "react";
import './App.css';

export default function FormWithDropdown() {
  // Function to generate random IELTS overall scores for universities
  const generateUniversityData = () => {
    const universities = [];
    const universityNames = ["Harvard University", "Stanford University", "Massachusetts Institute of Technology", "California Institute of Technology", "University of Oxford", "University of Cambridge", "ETH Zurich", "University of Chicago", "Princeton University", "Yale University"];
    
    for (let i = 0; i < 10; i++) {
      universities.push({
        name: universityNames[i],
        ieltsOverallScore: Math.floor(Math.random() * 9) + 1 // Random score between 1 and 9
      });
    }
    return universities;
  }

  const countries = [
    {
      name: "India",
      states: ["Tamil Nadu", "Maharashtra", "Kerala"]
    },
    {
      name: "Pakistan",
      states: ["Balochistan", "Khyber Pakhtunkhwa", "Sindh"]
    },
    {
      name: "Singapore",
      states: ["Bukit Batok", "Lim Chu Kang", "Bishan"]
    }
  ];

  const gradingSystems = ["Out of 100", "Out of 10"];
  const qualificationLevels = ["Undergraduate", "Postgraduate", "Grade 12 or equivalent", "Grade 10 or equivalent"];

  const initialState = {
    country: "",
    selectedCountryStates: [],
    selectedState: "",
    selectedGradingSystem: "",
    selectedQualification: "",
    score: "",
    selectedEnglishExam: "Select",
    backlogs: "",
    workExperience: "",
    listening: "",
    writing: "",
    overall: "",
    reading: "",
    speaking: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [universities, setUniversities] = useState(generateUniversityData());
  const [activeTab, setActiveTab] = useState('');

  // Count the number of universities in eligible and non-eligible lists
  const eligibleCount = universities.filter(university => university.ieltsOverallScore > parseFloat(formData.overall)).length;
  const nonEligibleCount = universities.filter(university => university.ieltsOverallScore <= parseFloat(formData.overall)).length;

  const changeCountry = (e) => {
    const selectedCountry = e.target.value;
    const selectedCountryStates = countries.find((ctr) => ctr.name === selectedCountry)?.states || [];
    setFormData({
      ...formData,
      country: selectedCountry,
      selectedCountryStates: selectedCountryStates,
      selectedState: ""
    });
  };

  const changeState = (e) => {
    const selectedState = e.target.value;
    setFormData({
      ...formData,
      selectedState: selectedState
    });
  };

  const changeGradingSystem = (e) => {
    const selectedGradingSystem = e.target.value;
    setFormData({
      ...formData,
      selectedGradingSystem: selectedGradingSystem
    });
  };

  const changeQualification = (e) => {
    const selectedQualification = e.target.value;
    setFormData({
      ...formData,
      selectedQualification: selectedQualification,
      selectedGradingSystem: "",
      score: ""
    });
  };

  const changeScore = (e) => {
    const score = e.target.value;
    setFormData({
      ...formData,
      score: score
    });
  };

  const changeEnglishExam = (e) => {
    const selectedEnglishExam = e.target.value;
    setFormData({
      ...formData,
      selectedEnglishExam: selectedEnglishExam
    });
  };

  const resetForm = () => {
    setFormData(initialState);
    setFormSubmitted(false);
    setActiveTab('');
  };

  const applyForm = () => {
    setFormSubmitted(true);
    setActiveTab('eligible');
  };

  // Filter universities based on IELTS overall score and user's input
  const eligibleUniversities = universities.filter(university => university.ieltsOverallScore > parseFloat(formData.overall));
  const nonEligibleUniversities = universities.filter(university => university.ieltsOverallScore <= parseFloat(formData.overall));

  return (
    <div className="container">
      <div className="form-container">
        <form>
          {/* Form fields here */}
          <label htmlFor="country">Country</label>
          <select id="country" value={formData.country} onChange={changeCountry}>
            <option value="" disabled>--Select Country--</option>
            {countries.map((ctr) => (
              <option key={ctr.name} value={ctr.name}>
                {ctr.name}
              </option>
            ))}
          </select>

          <label htmlFor="state">State</label>
          <select id="state" value={formData.selectedState} onChange={changeState}>
            <option value="" disabled>--Select State--</option>
            {formData.selectedCountryStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>

          <label htmlFor="highestQualification">Highest Qualification Studied *</label>
          <select id="highestQualification" value={formData.selectedQualification} onChange={changeQualification}>
            <option value="" disabled>--Select Qualification--</option>
            {qualificationLevels.map((qualification, index) => (
              <option key={index} value={qualification}>
                {qualification}
              </option>
            ))}
          </select>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="gradingSystem">{formData.selectedQualification.includes("Grade") ? `Grading System (${formData.selectedQualification.includes("12") ? "12" : "10"}) *` : "Grading System *"}</label>
              <select id="gradingSystem" value={formData.selectedGradingSystem} onChange={changeGradingSystem} required>
                <option value="" disabled>--Select--</option>
                {gradingSystems.map((system, index) => (
                  <option key={index} value={system}>
                    {system}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-column">
              <label htmlFor="score">{formData.selectedQualification.includes("Grade") ? `Score (${formData.selectedQualification.includes("12") ? "12" : "10"}) *` : "Score *"}</label>
              <input type="number" id="score" value={formData.score} onChange={changeScore} required />
            </div>
          </div>

          <label htmlFor="backlogs">Backlogs</label>
          <input type="number" id="backlogs" value={formData.backlogs} onChange={(e) => setFormData({ ...formData, backlogs: e.target.value })} />

          <label htmlFor="workExperience">Work Experience (Years)</label>
          <input type="number" id="workExperience" value={formData.workExperience} onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })} />

          <label htmlFor="englishProficiency">English Proficiency Exam *</label>
          <select id="englishProficiency" value={formData.selectedEnglishExam} onChange={changeEnglishExam} required>
            <option value="Select" disabled>--Select--</option>
            <option value="IELTS">IELTS</option>
            <option value="TOEFL">TOEFL</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="listening">Listening *</label>
          <input type="number" id="listening" value={formData.listening} onChange={(e) => setFormData({ ...formData, listening: e.target.value })} required />

          <label htmlFor="writing">Writing *</label>
          <input type="number" id="writing" value={formData.writing} onChange={(e) => setFormData({ ...formData, writing: e.target.value })} required />

          <label htmlFor="overall">Overall *</label>
          <input type="number" id="overall" value={formData.overall} onChange={(e) => setFormData({ ...formData, overall: e.target.value })} required />

          <label htmlFor="reading">Reading *</label>
          <input type="number" id="reading" value={formData.reading} onChange={(e) => setFormData({ ...formData, reading: e.target.value })} required />

          <label htmlFor="speaking">Speaking *</label>
          <input type="number" id="speaking" value={formData.speaking} onChange={(e) => setFormData({ ...formData, speaking: e.target.value })} required />
          
          <div className="form-buttons">
            <button type="button" onClick={resetForm} className="resetbut">Reset</button>
            <button type="button" onClick={applyForm} className="resetbut">Apply</button>
          </div>
        </form>
      </div>

      <div className="tabslists">
        <div className="tab-content">
          <div className="tab">
      
            <button className={activeTab === 'eligible' ? 'active' : ''} onClick={() => setActiveTab('eligible')}>
              Eligible
            </button>
            <button className={activeTab === 'non-eligible' ? 'active' : ''} onClick={() => setActiveTab('non-eligible')}>
              Non-Eligible
            </button>
          

            {activeTab === 'eligible' && (
              <span className="oneside">({eligibleCount} Results Found)</span>
            )}
            {activeTab === 'non-eligible' && (
              <span className="oneside">({nonEligibleCount} Results Found)</span>
            )}
          
          </div>
          {formSubmitted && (
            <>
              {activeTab === 'eligible' ? (
                <div>
                  <h2>Eligible Universities:</h2>
                  <ul>
                    {eligibleUniversities.map(university => (
                      <li key={university.name}>{university.name}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <h2>Non-Eligible Universities:</h2>
                  <ul>
                    {nonEligibleUniversities.map(university => (
                      <li key={university.name}>{university.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
  