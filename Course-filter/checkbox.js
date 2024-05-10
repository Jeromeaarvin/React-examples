import React, { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './Assets/search.png';
import CancelIcon from './Assets/cancel.png';
import add from './Assets/addimg.png';
import clock from './Assets/clock.png';
import money from './Assets/money.png';
import profit from './Assets/profit.png';
import universityimg from './Assets/universityimg.png';
import worldImage from './Assets/worldImage.png';
import bar from './Assets/bar.png';
// import { useNavigate } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';
// const history = useHistory();
export default function FormWithDropdown() {

  // const navigate = useNavigate();

  
  const generateUniversityData = () => {
    const universities = [
      { name: "Harvard University", ieltsOverallScore: 8.5 },
      { name: "Stanford University", ieltsOverallScore: 8.0 },
      { name: "Massachusetts Institute of Technology", ieltsOverallScore: 7.8 },
      { name: "California Institute of Technology", ieltsOverallScore: 7.9 },
      { name: "University of Oxford", ieltsOverallScore: 8.2 },
      { name: "University of Cambridge", ieltsOverallScore: 8.3 },
      { name: "ETH Zurich", ieltsOverallScore: 7.7 },
      { name: "University of Chicago", ieltsOverallScore: 8.1 },
      { name: "Princeton University", ieltsOverallScore: 8.4 },
      { name: "Yale University", ieltsOverallScore: 8.6 },
      { name: "Indian Institutes of Technology (IITs)", ieltsOverallScore: 7.3 },
      { name: "Indian Institutes of Management (IIMs)", ieltsOverallScore: 7.2 },
      { name: "University of Delhi", ieltsOverallScore: 7.4 },
      { name: "University of British Columbia (UBC)", ieltsOverallScore: 7.6 },
      { name: "McGill University", ieltsOverallScore: 7.5 }
    ];
    
    return universities;
  }

  const universitiesData = generateUniversityData();

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
  const [activeTab, setActiveTab] = useState('');
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

 const handleSearchIconClick = () => {
  setIsSearchOpen(true);
};

const handleCancelIconClick = () => {
  setIsSearchOpen(false);
};
  

  useEffect(() => {
    setSelectedUniversities([]);
  }, [formData]);

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

  const resetForm = () => {
    setFormData(initialState);
    setFormSubmitted(false);
    setActiveTab('');
  };

  const applyForm = () => {
    setFormSubmitted(true);
    setActiveTab('eligible');
  };

  const englishProficiencyLevels = ["IELTS", "TOEFL", "PTE"]; // Define English proficiency levels

  const [selectedEnglishProficiency, setSelectedEnglishProficiency] = useState("");

  const changeEnglishProficiency = (e) => {
    const selectedProficiency = e.target.value;
    setSelectedEnglishProficiency(selectedProficiency);
  };

  const handleCheckboxChange = (e) => {
    const universityName = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      // Add the university to the selected universities
      setSelectedUniversities(prevSelected => [...prevSelected, universityName]);
    } else {
      // Remove the university from the selected universities
      setSelectedUniversities(prevSelected => prevSelected.filter(u => u !== universityName));
    }
  };

  const filteredUniversities = universitiesData.filter(university =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeTab === 'eligible' ? university.ieltsOverallScore > parseFloat(formData.overall) : university.ieltsOverallScore <= parseFloat(formData.overall)) &&
    (selectedUniversities.length === 0 || selectedUniversities.includes(university.name))
  );

  const [year, setYear] = useState('');
  const [intake, setIntake] = useState('');
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedUniversityInfo, setSelectedUniversityInfo] = useState(null);

const handleUniversitySelection = (universityName, countryName) => {
  setSelectedUniversityInfo({ universityName, countryName });
};

const handleApplyButtonClick = () => {

  setShowErrorPopup(true);
};

  const handleCloseErrorPopup = () => {
    setShowErrorPopup(false);
  };
  const [showSelectErrorPopup, setShowSelectErrorPopup] = useState(false);
  const ErrorPopup = ({ message, onClose }) => {
    const { universityName, countryName } = selectedUniversityInfo || {};
    const [showSelectErrorPopup, setShowSelectErrorPopup] = useState(false);



// const handleCloseSelectErrorPopup = () => {
//   setShowSelectErrorPopup(false);
// };
const handleRedirect = () => {
  
  // if (!formData.intake || !formData.year) {
  //   // Show error message for missing intake and year
  //   setErrorMessage('Please select intake and year.');
  //   setShowSelectErrorPopup(true);
  // }
    
};





    
    return (
      <div className="error-popup-overlay">
        <div className="error-popup">
          <div className="error-popup-header">
            <p className="popssele">Select Intake and Year</p>
            <button className="error-popup-close-btn" onClick={onClose}>×</button>
          </div>
          <hr className="horiline"></hr>
          <div className="error-popup-content">
            <div className="rowcon1">
            <div className="popuptakes"> 
            <p className="coursepos">Bachelor of Science in Computer Science</p>
            </div>
            <div className="popuptakes1">
            <div className='labely1'>
          <label>Intake</label>
          <select className='onesele'  >
            <option value="">Select Intake</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
          </div>
          <div className='labely1'>
        <label>Year</label>
          <select className='onesele' >
            <option value="">Select Year</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
          </div>
          </div>
            </div>
            <div>
            <img src={universityimg} alt="University" className="icon" />
            <span className="spanclass">University: {universityName || '-'}</span>
               
                </div>
                <div className="countryspans">
                <img src={worldImage} alt="World" className="iconcoun" />
                <span className="spanclass">Country: {countryName || '-'}</span>
                </div>
                <hr className="secondhari"></hr>
                <button className="popsbtn" onClick={handleRedirect} >Apply</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
    
      
      <div className="form-container">
      <div className="tittle" >
        <h1 className="heading1">Eligibility</h1>
      </div>
        <form>
        <label htmlFor="studentName">Student Name *</label>
    <select id="studentName" value={formData.studentName} onChange={(e) => setFormData({ ...formData, studentName: e.target.value })} required>
      <option value="">--Select Student Name--</option>
      <option value="John Doe">John Doe</option>
      <option value="Jane Smith">Jane Smith</option>
      <option value="Alice Johnson">Alice Johnson</option>
      {/* Add more options as needed */}
    </select>
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
            <option value="" abled>--Select State--</option>
            {formData.selectedCountryStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>

          <label htmlFor="highestQualification">Highest Qualification Studied *</label>
          <select id="highestQualification" value={formData.selectedQualification} onChange={changeQualification}>
            <option value="" abled>--Select Qualification--</option>
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
                <option value="" abled>--Select--</option>
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
<input type="number" id="backlogs" value={formData.backlogs} onChange={(e) => setFormData({ ...formData, backlogs: e.target.value })} required />

<label htmlFor="workExperience">Work Experience (Years)</label>
<input type="number" id="workExperience" value={formData.workExperience} onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })} required />

<label htmlFor="englishProficiency">English Proficiency *</label>
<select id="englishProficiency" value={selectedEnglishProficiency} onChange={changeEnglishProficiency}>
  <option value="" abled>--Select English Proficiency--</option>
  {englishProficiencyLevels.map((level, index) => (
    <option key={index} value={level}>
      {level}
    </option>
  ))}
</select>

<div className="form-row">
<div className="form-column">
<label htmlFor="writing">Listening*</label>
<input type="number" id="listening"  onChange={(e) => setFormData({ ...formData, writing: e.target.value })} required />
</div>
<div className="form-column">
<label htmlFor="speaking">Reading*</label>
<input type="number" id="reading" onChange={(e) => setFormData({ ...formData, speaking: e.target.value })} required />
</div>
</div>
<div className="form-row">
<div className="form-column">
<label htmlFor="writing">Writing*</label>
<input type="number" id="writing" value={formData.writing} onChange={(e) => setFormData({ ...formData, writing: e.target.value })} required />
</div>
<div className="form-column">
<label htmlFor="speaking">Speaking*</label>
<input type="number" id="speaking" value={formData.speaking} onChange={(e) => setFormData({ ...formData, speaking: e.target.value })} required />
</div>
</div>
<label htmlFor="overall">Overall*</label>
<input type="number" id="overall" value={formData.overall} onChange={(e) => setFormData({ ...formData, overall: e.target.value })} required />

          <div className="form-buttons">
            <button type="button" onClick={resetForm} className="resetbut">Reset</button>
            <button type="button" onClick={applyForm} className="resetbut">Apply</button>
          </div>
        </form>
        
        
        <div className="tittle1" >
        <div className="tittle1">
  {isSearchOpen ? (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      <img src={CancelIcon} alt="Cancel" className="cancel-icon" onClick={handleCancelIconClick} />
    </div>
  ) : (
    <h1 className="heading1">Universities</h1>
  )}
  {!isSearchOpen && (
    <img src={SearchIcon} alt="Searchbar" className="iconsearch" onClick={handleSearchIconClick} />
  )}
</div>
</div>

<div className="scrollable-list">
  <ul className="Checkbox-options-dropdown">
    {universitiesData
      .filter(university =>
        university.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((university, index) => (
        <li key={index} className="checkcombine">
          <input 
            type="checkbox" 
            id={university.name} 
            name={university.name} 
            value={university.name} 
            checked={selectedUniversities.includes(university.name)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={university.name}>{university.name}</label>
        </li>
      ))}
  </ul>
</div>

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
  <span className="oneside" style={{marginTop:'25px'}}>({filteredUniversities.filter(university => university.ieltsOverallScore > parseFloat(formData.overall)).length} Results Found)</span>
)}
{activeTab === 'non-eligible' && (
  <span className="oneside">({filteredUniversities.filter(university => university.ieltsOverallScore <= parseFloat(formData.overall)).length} Results Found)</span>
)}
    </div>
    {showErrorPopup && (
      <ErrorPopup message={errorMessage} onClose={handleCloseErrorPopup} />
    )}
    
    {formSubmitted && (
  <div className="university-grid">

    {activeTab === 'eligible' ? (
      <div>
        <div className="university-grid">
          {filteredUniversities.map((university, index) => (
            <div className="university-box" key={index}>
              {/* Row 1: Course Name */}
              <column className="column1">
                <div className="topcontent">
              <div className="course-name">Bachelor of Computer Science </div>
              <div className="movemenu">
              <img src={bar} alt="" className="iconmenu"/>
                <span className="spanclass2">View Details</span>
                
               
                </div>
                
                </div>

              {/* Row 2: University Name */}
              
              <div className="belowmove">
                <img src={universityimg} alt="University" className="icon" />
                <span className="spanclass">University: </span>
                <span className="spanclass2">{university.name}</span>
              </div>

              {/* Row 3: Country */}
              <div className="info-row">
                <div>
                <img src={worldImage} alt="World" className="iconcoun" />
                <span className="spanclass">Country:</span>
                <span className="spanclass2">Canada</span><br></br>
                {/* <span><button className="nowbutton">Apply now</button></span> */}
                </div>
                <div className="sepdivide">
                  <img src={clock} alt="Clock" className="iconclock"/>
                  <span className="spanclass">Duration: </span>
                  <span className="spanclass2">48 Month(s)</span>
                  <button className="nowbutton"  onClick={handleApplyButtonClick}>Apply Now</button>
                </div>
              </div>

              {/* Row 4: Intakes */}
              <div className="info-row">
                <img src={add} alt="Man" className="icon" />
                <span className="spanclass">Intakes:</span>
                <button className="intakebutton">Open</button>
                <button className="intakemonth">Jan</button>
               </div>
              {/* Row 5: Yearly Tuition Fee */}
              <div className="info-row">
                <div>
                <img src={money} alt="Money" className="icon" />
                <span className="spanclass">Yearly Tuition Fee:</span>
                <span className="spanclass2">Can$ 20231</span>
                </div>
                <div className="sepdivide1">
                  <img src={money} alt="Money" className="icon" />
                  <span className="spanclass">Application Fee:</span>
                  <span className="spanclass2">Can$ 125</span>
                </div>
              </div>

              {/* Row 6: Commission Fee */}
              <div className="info-row">
                <div className="lastrow">
                  <div>
                <img src={profit} alt="Commission" className="icon" />
                <span className="spanclass">Expected Commission:</span>
                <span className="spanclass3">Can$ 1960.00</span>
                </div>
                <p className="lastline">Something doesn't look right?</p>
                </div>
                
              </div>
              {/* <div></div> */}
              <div className="rankbox">
                <div className="lines">
                <p className="ranknumber">24</p>
                  <p className="rankdes">in Webometrics Canada National Ranking</p>
                {/* <span>in Webometrics Canada National Ranking</span> */}
                </div>
            </div>
              
              </column>
            </div>
            
            
          ))}
          
        </div>
      </div>
    ) : (
      <div>
        {/* <h2>Non-Eligible Universities:</h2> */}
        <div>
        <div className="university-grid">
          {filteredUniversities.map((university, index) => (
            <div className="university-box" key={index}>
              {/* Row 1: Course Name */}
              <column className="column1">
                <div className="topcontent">
              <div className="course-name">Bachelor of Computer Science </div>
              <div className="movemenu">
              <img src={bar} alt="" className="iconmenu"/>
                <span className="spanclass2">View Details</span>
                
               
                </div>
                
                </div>
                <div className="button-wrapper" onMouseEnter={() => setShowPopup(index)} onMouseLeave={() => setShowPopup(null)}>
  <button className="noelebutton">Non - Eligible</button>
  {showPopup === index && (
    <div className="popup">
      <p>You do not meet the eligibility criteria for this university.</p>
    </div>
  )}
</div>         {/* Row 2: University Name */}
              
              <div className="belowmove">
                <img src={universityimg} alt="University" className="icon" />
                <span className="spanclass">University: </span>
                <span className="spanclass2">{university.name}</span>
              </div>

              {/* Row 3: Country */}
              <div className="info-row">
                <div>
                <img src={worldImage} alt="World" className="iconcoun" />
                <span className="spanclass">Country:</span>
                <span className="spanclass2">Canada</span><br></br>
                {/* <span><button className="nowbutton">Apply now</button></span> */}
                </div>
                <div className="sepdivide">
                  <img src={clock} alt="Clock" className="iconclock"/>
                  <span className="spanclass">Duration: </span>
                  <span className="spanclass2">48 Month(s)</span>
                  {/* <button className="nowbutton">Apply Now</button> */}
                </div>
              </div>

              {/* Row 4: Intakes */}
              <div className="info-row">
                <img src={add} alt="Man" className="icon" />
                <span className="spanclass">Intakes:</span>
                <button className="intakebutton">Open</button>
                <button className="intakemonth">Jan</button>
              </div>

              {/* Row 5: Yearly Tuition Fee */}
              <div className="info-row">
                <div>
                <img src={money} alt="Money" className="icon" />
                <span className="spanclass">Yearly Tuition Fee:</span>
                <span className="spanclass2">Can$ 19148</span>
                </div>
                <div className="sepdivide1">
                  <img src={money} alt="Money" className="icon" />
                  <span className="spanclass">Application Fee:</span>
                  <span className="spanclass2">Can$ 125</span>
                </div>
              </div>

              {/* Row 6: Commission Fee */}
              <div className="info-row">
                <div className="lastrow">
                  <div>
                <img src={profit} alt="Commission" className="icon" />
                <span className="spanclass">Expected Commission:</span>
                <span className="spanclass3">Can$ 1960.00</span>
                {/* <img src={money} alt="Money" className="icon" /> */}
                </div>
                <p className="lastline">Something doesn't look right?</p>
                </div>
                
              </div>
              <div className="rankbox">
                <div className="lines">
                <p className="ranknumber">24</p>
                  <p className="rankdes">in Webometrics Canada National Ranking</p>
                {/* <span>in Webometrics Canada National Ranking</span> */}
                </div>
            </div>
              {/* <div className="rankbox">
            </div> */}
              </column>
            </div>
            
          ))}
          
        </div>
      </div>
      </div>
    )}
  </div>
)}
  </div>
</div>

    </div>
  );
}
