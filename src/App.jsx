import { useState } from 'react'

import { ClassesSideBar } from './components/ClassesSideBar'
import Toolbar from './components/Toolbar/Toolbar'
import FieldName from './components/FieldName';
import IdfObject from './components/IdfObject';

function App() {
  return (
    <>
      <div className='flex w-full h-full'>
        <ClassesSideBar />


       <div className='workSpace_container overflow-x-auto grow pr-2'>
          <div className="flex items-center justify-between mb-2 h-[45px]">
            <div className="text-lg font-medium dark:text-[#fff]">Simulator</div>
          </div>

          <Toolbar />
          
          <div className='flex overflow-auto h-[calc(100vh-120px)]'>
            <FieldName />
            
            <IdfObject />
            <IdfObject />
            <IdfObject />
            <IdfObject />

          </div>

       </div>
      </div>
    </>
  )
}

export default App
