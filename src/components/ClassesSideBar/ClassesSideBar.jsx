import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import IconSimple from '../IconSimple';

// mock data
import { idfClasses as mockIdfClasses } from "../../mockData/idfClasses";

// utils
import { getClassListByGroup } from '../../utils/getClassListByGroup';

// actions
import * as classesAction from '../../redux/classes.action';

function ClassesSideBar() {
  const dispatch = useDispatch();
  const idfClasses = getClassListByGroup(mockIdfClasses.data);

  console.log('ClassesSideBar: ', { idfClasses })

  function handleActive(classItem) {
    dispatch(classesAction.setClassesSelected(classItem))
  }

  return (
    <aside
      className="transition-all shadow-[0_15px_30px_0_rgba(85,150,230,0.3)] mr-4 shrink-0 bg-gray-50  w-[320px]"
    >
      {/* class top */}
      <div className="flex items-center justify-end p-2 h-[45px] shadow-[0_0_5px_0_rgba(85,150,230,0.3)]">
        <IconSimple
          icon="ic:baseline-close"
        />
      </div>

      {/* class menu */}
      <div className="px-1 py-3 overflow-y-auto h-[calc(100vh-45px)]">
        <ul className="font-medium">
          {idfClasses.map(classes => {
            return (
              <li key={classes.group_id} className="cursor-pointer relative">
                {/* checkbox to show/hide sub menu */}
                <input
                  data-tooltip-target={`tooltip-123`}
                  type="checkbox"
                  className="absolute top-0 left-0 z-1 w-full h-[42px] cursor-pointer opacity-0 classChildren_checkbox"
                />

                <div className="class_header flex p-2 cursor-pointer text-gray-900 rounded-lg ">
                  <IconSimple
                    icon="uil:angle-right-b"
                    className="icon_arrow dark:text-[#fff]"
                  />
                  <span className="flex-1 mx-2 truncate ">
                    {classes.group_name}
                  </span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 mt-[2px] text-[12px] text-blue-800 bg-blue-100 rounded-full ">
                    {classes.items.length}
                  </span>
                </div>

                {/* sub item */}
                <ul className="class_item hidden">
                  {classes.items.map(sub => (
                    <li
                      key={sub.class_id}
                      className="cursor-pointer relative pl-5"
                      onClick={() => {
                        // const classItem = {
                        //   group_id: classes.group_id,
                        //   group_name: classes.group_name,
                        //   ...sub
                        // }
                        handleActive(sub)
                      }}
                    >
                      <div
                        className={clsx(
                          "class_header flex p-2 cursor-pointer text-gray-900 rounded-lg  px-2 items-center hover:bg-gray-200 dark:hover:bg-gray-700",
                        )}
                      >
                        <span className="flex-1 mx-2 truncate ">
                          {sub.class_name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </li> 
            )
          })}
          
        </ul>
      </div>
    </aside>
  )
}

export default ClassesSideBar