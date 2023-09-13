import React from 'react';


import { idfObjects } from '../mockData/idfObjects';
import { classItem } from '../mockData/classItem';

function IdfObject() {

  console.log('IdfObject: ', {
    idfObjects,
    classItem
  })
  
  return (
    <div className='fieldName_objectItem'>
      <div className='flex ml-5'>
        <div className='shrink-0 mr-2 w-[350px]'>
          <div className="idfObject_header px-2">
            <div className="flex items-center">
              <input id="457" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="457" className="ml-2 text-sm text-gray-900 dark:text-gray-300 cursor-pointer">
                Object 1 (#457)
              </label>
            </div>
          </div>

          <div className="idfObject_row border-l-[1px] border-r-[1px] border-b-[1px] bg-white">
            <input type="text" className="border-0 border-b-[1px] text-gray-900 text-sm w-full mx-2 p-2 dark:text-white" value="Zn001:Wall001" />
          </div>

          <div className="idfObject_row border-l-[1px] border-r-[1px] border-b-[1px] bg-white">
            <input type="text" className="border-0 border-b-[1px] text-gray-900 text-sm w-full mx-2 p-2 dark:text-white" value="Zn001:Wall001" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdfObject