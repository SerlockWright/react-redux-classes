import React from 'react';
import { useSelector } from 'react-redux';

import { classItem } from '../mockData/classItem';

function FieldName() {
  const classesItem = useSelector(state => state.classes.classesItem);
  const fields = classItem.data.class_id === classesItem?.class_id ? classItem.data.fields : [];

  // getd dat
  console.log('FieldName: ', {
    fields,
  })
  return (
    <div className='fieldName_container sticky left-0 z-10'>
      <div className='idfObject_header'>
        <div className='w-[50px] mr-2'>&nbsp;</div>
        <div className='w-[200px] mr-2'>Field Name</div>
        <div className='w-[100px] mr-2'>Units</div>
        <div className='w-[80px]'>IDD</div>
      </div>

      <div className="idfObject_row border-l-[1px] border-r-[1px] bg-white">
        <div className=" w-[50px] text-center mr-2">
          <span className="inline-block w-[10px]">
            <span className="text-[#f00]">!</span>
          </span>
          <span>1</span>
        </div>
        <div className="w-[200px] mr-2">Name</div>
        <div className="w-[100px] mr-2 uppercase">N/A</div>
        <div className="w-[80px]">A1</div>
      </div>
      <div className="idfObject_row border-l-[1px] border-r-[1px] border-b-[1px] bg-white">
        <div className=" w-[50px] text-center mr-2">
          <span className="inline-block w-[10px]">
            <span className="text-[#f00]">!</span>
          </span>
          <span>1</span>
        </div>
        <div className="w-[200px] mr-2">Name</div>
        <div className="w-[100px] mr-2 uppercase">N/A</div>
        <div className="w-[80px]">A1</div>
      </div>
    </div>
  )
}

export default FieldName