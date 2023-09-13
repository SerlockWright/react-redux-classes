import React from 'react'

// components
import IconSimple from '../IconSimple';
import SimpleButton from '../Button/SimpleButton';

function Toolbar() {
  return (
    <div className='w-full mb-4'>
      <div className='hidden w-full flex items-center justify-between bg-blue-700 py-4 px-6'>
        <div className='flex'>
          <div className='flex text-white cursor-pointer'>
            Duplicate
            <IconSimple icon="heroicons:document-duplicate" className="text-white" />
          </div>
          <div className='flex text-white cursor-pointer px-4'>
            Export
            <IconSimple icon="carbon:export" className="text-white" />
          </div>
          <div className='flex text-white cursor-pointer' onClick={() => {}}>
            Delete
            <IconSimple icon="ic:outline-delete" className="text-white" />
          </div>
        </div>

        <div className='flex'>
          <div className='text-white pr-4'>
            10 {' '}
            items  {' '}
            selected
            </div>
          <div className='text-white cursor-pointer' onClick={() => {}}>Cancel</div>
        </div>
      </div>

      <div className='w-full flex items-center justify-between'>
        <form className="flex items-center mr-4">   
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <IconSimple icon="ic:baseline-search" />
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
          </div>
        </form>

        <div className='flex items-center shrink-0'>
          <IconSimple icon="uil:setting" width={24}  />
          <SimpleButton 
            text="Add new" 
            classNames="ml-2" 
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  )
}

export default Toolbar