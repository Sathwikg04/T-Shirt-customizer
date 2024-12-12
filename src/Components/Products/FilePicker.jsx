import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="filepicker-input">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className='filepicker-text'>
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <div className="button-container">
        <CustomButton 
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="{font-size: 12px;}"
        />
        <CustomButton 
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
          customStyles="{font-size: 12px;}"
        />
      </div>
    </div>
  )
}

export default FilePicker
