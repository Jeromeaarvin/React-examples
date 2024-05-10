import React, { useState } from 'react';
import './Select.css';
import add from './Assets/addimg.png';
import clock from './Assets/clock.png';
import money from './Assets/money.png';
import profit from './Assets/profit.png';
import universityimg from './Assets/universityimg.png';
import worldImage from './Assets/worldImage.png';
import delet from './Assets/delete.png';



function ErrorPopup({ message, onClose }) {
  return (
    <div className="popup-background">
      <div className="popup">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
}

function ReplacePopup({ message, onReplace, onClose }) {
  return (
    <div className="popup-background">
      <div className="replacepopup">
      <div className="replace-header">
            <p className="popssele1">Hey, Heads Up!</p>
            <button className="can1" onClick={onClose}>×</button>
          
          </div>
          <hr className="horiline"></hr>'
          <div className='repacemeaaseg'>
        <p className="popssele2">You already have a program selected from this university. Do you want to replace this program with another?</p>
        <button onClick={onReplace} className='replace-button'>Replacing With Existing Course</button>
        </div>
      </div>
    </div>
  );
}
function DropdownValidation() {
  // const location = useLocation();
// const { universityName, countryName } = location.state;
  const [year, setYear] = useState('');
  const [intake, setIntake] = useState('');
  const [course, setCourse] = useState('');
  const [university, setUniversity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [addedItems, setAddedItems] = useState([]);
  const [showReplacePopup, setShowReplacePopup] = useState(false);
  const [existingUniversityItem, setExistingUniversityItem] = useState(null);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [priority, setPriority] = useState('Select Priority');
  const [showUploadPopup, setShowUploadPopup] = useState(false);

  const handlePayFeeClick = () => {
    setShowUploadPopup(true);
  };

  const handleCloseUploadPopup = () => {
    setShowUploadPopup(false);
  };

  const validateAndAdd = () => {
    const incompleteFields = [];

    if (year === '') {
      incompleteFields.push('Year');
    }

    if (intake === '') {
      incompleteFields.push('Intake');
    }

    if (course === '') {
      incompleteFields.push('Course');
    }

    if (university === '') {
      incompleteFields.push('University');
    }

    if (incompleteFields.length > 0) {
      setErrorMessage(`Please select ${incompleteFields.join(', ')}.`);
      setShowErrorPopup(true);
    } else {
      const newItem = { year, intake, course, university };

      // Check if the university already exists
      const existingUniversityIndex = addedItems.findIndex(item => item.university === university);

      if (existingUniversityIndex !== -1) {
        // University already exists, check if course is different
        const existingItem = addedItems[existingUniversityIndex];
        if (existingItem.course !== course) {
          // Different course, show popup
          setExistingUniversityItem(existingItem);
          setShowReplacePopup(true);
        } else {
          // Same course, do not add and show error
          setErrorMessage(`University '${university}' with the same course '${course}' already exists.`);
          setShowErrorPopup(true);
        }
      } else {
        // Proceed with adding the item
        setAddedItems([...addedItems, newItem]);
        // Reset dropdowns
        setYear('');
        setIntake('');
        setCourse('');
        setUniversity('');
      }
    }
  };

  const handleReplace = () => {
    // Replace existing data with new one
    const newItem = { year, intake, course, university };
    const updatedItems = addedItems.map(item =>
      item.university === existingUniversityItem.university ? newItem : item
    );
    setAddedItems(updatedItems);
    // Reset dropdowns
    setYear('');
    setIntake('');
    setCourse('');
    setUniversity('');
    // Close popup
    setShowReplacePopup(false);
  };

  const handleRemoveItem = (index) => {
    const newItems = [...addedItems];
    newItems.splice(index, 1);
    setAddedItems(newItems);
  };

  const handlePriorityChange = (e) => {
    const inputValue = e.target.value;
    let priorityValue = '';
  
    if (inputValue === '1') {
      priorityValue = '1st';
    } else if (inputValue === '2') {
      priorityValue = '2nd';
    } else if (inputValue === '3') {
      priorityValue = '3rd';
    } else if (!isNaN(inputValue)) {
      priorityValue = inputValue + 'th';
    } else {
      priorityValue = ''; // Reset if not a valid number
    }
  
    // Set the input field value
    const inputField = document.querySelector('.onebyone1 input[type="text"]');
    if (inputField) {
      inputField.value = priorityValue;
    }
  
    // Set the priority state
    setPriority(inputValue);
  };

  // const navigate = useNavigate();
  const handleNavigation = () => {
    // Pass the addedItems array in the state object when navigating
    // navigate('/Documents', { state: { addedItems: addedItems } });
  };

  return (

    <div className='full'>
      <div className='quick'>
        <p>Quick Add Program</p>
        <button className='programbtn'>Search Program</button>
      </div>
      
      <div className="form-fields">
        <p>We only show eligible courses for this student for the selected intake,
          year and university. To understand why certain courses are not eligible for 
          this student, please go to Search Program.</p>
        
        <div className='alldrop'>
        <div className='labely'>
        <label>Year</label>
          <select className='onesele' value={year} onChange={e => setYear(e.target.value)}>
            <option value="">Select Year</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
          </div>

          <div className='labely'>
          <label>Intake</label>
          <select className='onesele' value={intake} onChange={e => setIntake(e.target.value)}>
            <option value="">Select Intake</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
          </div>

          <div className='labely'>
          <label>University Name</label>
          <select className='onesele1' value={course} onChange={e => setCourse(e.target.value)}>
            <option value="">Select Course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
          </select>
          </div>

          <div className='labely'>
          <label className='onesele1' >Course Name</label>
          <select value={university} onChange={e => setUniversity(e.target.value)}>
            <option value="">Select University</option>
            <option value="Harvard">Harvard</option>
            <option value="MIT">MIT</option>
            <option value="Stanford">Stanford</option>
          </select>
          </div>

          <button onClick={validateAndAdd} className='addbut'>Add</button>
        </div>
      </div>

      {errorMessage && showErrorPopup && (
        <ErrorPopup
          message={errorMessage}
          onClose={() => setShowErrorPopup(false)}
          onAdd={validateAndAdd}
        />
      )}

      {showReplacePopup && (
        <ReplacePopup
          message={`University '${university}' with a different course '${existingUniversityItem.course}' is already selected. Do you want to replace it?`}
          onClose={() => setShowReplacePopup(false)}
          onReplace={handleReplace}
        />
      )}

      <div>
      <p className='selecte'>Selected Programs</p>
      </div>
      
      {addedItems.length === 0 && (
        <div className='form-fields'>
        <p>Search for courses relevant to the student's profile from more than 80,000+ courses 
        across 700+ Universities, using our dynamic 'Search Program' functionality. 
        After searching the relevant courses you can associate courses to the student's profile 
        by clicking on 'Associate Shortlisted Courses'.</p>
        </div>
      )}

      {addedItems.map((item, index) => (
        <div key={index} className="added-info">
          <div className='viewdeta'>
            <p1>{item.course}</p1>
          </div>
          <div className='allfeilds'>
            <div className='column11'>
              <div className='onebyone'>
                <img src={universityimg} alt="University" className="icon" />
                <span className="spanclass">University: </span>
                <span className="spanclass2">{item.university}</span>
              </div>
              <div className='onebyone'>
                <img src={worldImage} alt="World" className="iconcoun" />
                <span className="spanclass">Intakes</span>
                <button className="intakebutton1">Jan</button>
              </div>
              <div className='onebyone'>
                <img src={clock} alt="Clock" className="iconclock"/>
                <span className="spanclass">Duration: </span>
                <span className="spanclass2">48 Month(s)</span>
              </div>
            </div>
            <div className='column21'>
              <div className='onebyone'>
                <img src={add} alt="Man" className="icon" />
                <span className="spanclass">Country:</span>
                <span className="spanclass2">Canada</span>
              </div>
              <div className='onebyone'>
                <img src={money} alt="Money" className="icon" />
                <span className="spanclass">Commission:</span>
                <span className="spanclass2">Can$ 20231</span>
              </div>
              <div className='onebyone'>
                <img src={money} alt="Money" className="icon" />
                <span className="spanclass">Tuition Fee:</span>
                <span className="spanclass2">Can$ 125</span>
              </div>
            </div>
            <div className='column31'>
            <div className='removeanddeta'>
            <p2>View Course details</p2>
            <button className='removebut' onClick={() => handleRemoveItem(index) }><img src={delet} alt="Delete" className="icondelete" ></img>Remove</button>
            </div>
              <div className='onebyone1'>
                <span className="spanclass">Selected Intake: Sep-</span>
                <span className="spanclass3">{item.year}</span>
              </div>
              <div className='onebyone1'>
                <span className="spanclass">Application Fee:</span>
                <span className="spanclass2">Can$ 125</span>
              </div>
              <div className='onebyone1'>
                <span className="spanclass4">Select Priority:</span>
                <input type="number" onChange={handlePriorityChange} />
              </div>
            </div>
          </div>
          <div className="rankbox1">
            <div className="lines">
              <p className="ranknumber">24</p>
              <p className="rankdes">in Webometrics Canada National Ranking</p>
            </div>
          </div>
        </div>
      ))}

      {addedItems.length > 0 && (
        <div className="document-field">
        <div className="documentsreq">
          <p>Documents required:</p>
          <span >Std. 10th Marksheet, Std. 12th Marksheet, Copy of Passport, IELTS, Std 12th Admit Card</span>
          </div>
          <div className="button-container">
            <button className="pay-fee-button" onClick={handlePayFeeClick}>Pay Application Fee</button>
            <button className="upload-documents-button" onClick={handleNavigation}>Upload Documents</button>
          </div>
        </div>
      )}
      {showUploadPopup && (
        <div className="popup-background">
          <div className="popup">
            <span className="close" onClick={handleCloseUploadPopup}>
              &times;
            </span>
            <p>Please upload all your documents.</p>
            {/* Add form fields or buttons to upload documents */}
          </div>
        </div>
      )}
    </div>
  );
}


export default DropdownValidation;
