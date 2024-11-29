import React, {useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { snapshot, useSnapshot } from 'valtio'
import './Customizer.css'

import config from '../config/config.js'
import state from '../store'
import download from '../assets/download.png'
import {downloadCanvasToImage, reader} from '../config/helpers.js'
import {EditorTabs, FilterTabs, DecalTypes} from '../config/constants.js'
import { fadeAnimation,slideAnimation } from '../config/motion'
import ColorPicker from '../Components/Products/ColorPicker.jsx'
import CustomButton from '../Components/CustomButton/CustomButton.jsx'
import FilePicker from '../Components/Products/FilePicker.jsx'
import Tab from '../Components/Products/Tab.jsx'


const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] =useState('');

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  })

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
        />
      default:
        return null;
    }
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if(!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
          state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
          state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
          key="custom"
          className='side-tab' 
          {...slideAnimation('left')}>
            <div className="editor-tab">
              {EditorTabs.map((tab)=>(
                <Tab 
                key={tab.name}
                tab={tab}
                handleClick={()=>setActiveEditorTab(tab.name)}/>
              ))}

              {generateTabContent()}
            </div>
          </motion.div>
          
          <motion.div 
          className='back-tab' 
          {...fadeAnimation}>
            <CustomButton type="filled" title="Go Back"
            handleClick={() => state.intro = true}/> 
          </motion.div>

          <motion.div className='filtertabs-container' {...slideAnimation('up')}>
            {FilterTabs.map((tab) => (
              <Tab 
              key={tab.name}
              tab={tab}
              isFilterTab
              isActiveTab={activeFilterTab[tab.name]}
              handleClick={()=> handleActiveFilterTab(tab.name)}/>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer
