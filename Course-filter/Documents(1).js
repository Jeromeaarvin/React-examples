import React, { useState } from 'react';
import './Documents.css';

import exchange from './Assets/exchange.png';
import upload from './Assets/upload-button.png';

const Documents = () => {
  const [activeTab, setActiveTab] = useState('yourDocuments');
  const [uploadedFiles1, setUploadedFiles1] = useState([]);
  const [fileCount1, setFileCount1] = useState(0);

  const [uploadedFiles2, setUploadedFiles2] = useState([]);
  const [fileCount2, setFileCount2] = useState(0);
  const [fileUploadedInList2, setFileUploadedInList2] = useState(false);

 

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFileChange1 = (event) => {
    const newFile = event.target.files[0];
    setUploadedFiles1([newFile]);
    setFileCount1(1);
  };

  const handleFileChange2 = (event) => {
    const newFile = event.target.files[0];
    if (uploadedFiles2.length < 3) {
      setUploadedFiles2(prevFiles => [...prevFiles, newFile]);
      setFileCount2(prevCount => prevCount + 1);
      if (uploadedFiles2.length === 0) {
        setFileUploadedInList2(true);
      }
    }
  };

  
  
  return (
    <div className='full'>
    <div className="tab-buttons">
      <button
        className={activeTab === 'yourDocuments' ? 'active' : ''}
        onClick={() => handleTabChange('yourDocuments')}
      >
        Your Documents
      </button>
      <button
        className={activeTab === 'saioDocuments' ? 'active' : ''}
        onClick={() => handleTabChange('saioDocuments')}
      >
        SAIO Documents
      </button>
    </div>
    <div className="tab-content">
      {activeTab === 'yourDocuments' && (
        <div className='filescontainer'>
          <p className='documentname'>Mandatory documents</p>
          <div className='listscontainer'>
            <div className='uploadandheading'>
              <p className='documentname1'>Individual Marksheets*</p>
              {/* Custom-styled upload button */}
              <label htmlFor="file-upload-1" className="upload-button">
                <img src={exchange} alt="upload" className="icon10" />
                {uploadedFiles1.length > 0 ? 'Replace File' : 'Upload'}
              </label>
              <input id="file-upload-1" type='file' onChange={handleFileChange1} />
            </div>
            <div className='coureserequired'>
              <p className='coursesname2'>Course(s) Required For:</p>
              <p className='coursesname3'>M.S in Artificial Intelligence - University Of Harvard</p>
            </div>
            <div className='documentuplodedname'>
              <div className='felxallfiles'>
                {uploadedFiles1.map((file, index) => (
                  <div key={index} className='uplaodedlabel'>
                    <p className='labelnameofulpod'>Uploaded Document({index + 1}):</p> 
                    <div className='filenamewithdiv'>
                      <p className='labelnameoffile'>{file.name}</p>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
          </div>
          <div className='listscontainer'>
          {/* Rendering uploaded files for uploadedFiles2 */}
          <div className='uploadandheading'>
            <p className='documentname1'>Individual Marksheets*</p>
            {/* Custom-styled upload button */}
            <label htmlFor="file-upload-2" className="upload-button">
              <img src={upload} alt="upload" className="icon10" />
              {fileUploadedInList2 ? 'Upload Another File' : 'Upload'}
            </label>
            <input id="file-upload-2" type='file' onChange={handleFileChange2} />
          </div>
          <div className='coureserequired'>
            <p className='coursesname2'>Course(s) Required For:</p>
            <p className='coursesname3'>M.S in Artificial Intelligence - University Of Harvard</p>
          </div>
          <div className='documentuplodedname'>
            
            {uploadedFiles2.length > 0 && (
              <div className='uplaodedlabel'>
                <p className='labelnameofulpod'>Uploaded Document ({uploadedFiles2.length}):</p>
              </div>
            )}
            <div className='felxallfiles'>
            {uploadedFiles2.map((file, index) => (
              <div key={index} className='uplaodedlabel'>
                <div className='filenamewithdiv'>
                  <p className='labelnameoffile'>{file.name}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
          
        </div>
      )}
      {activeTab === 'saioDocuments' && (
        <div>
          {/* SAIO Documents content */}
          <p>Please upload SAIO documents here.</p>
        </div>
      )}
    </div>
    <div className="sticky-button-container">
      <button className="pay-application-fee-button">Pay Application Fee</button>
    </div>
  </div>
);
};
  
  

export default Documents;
