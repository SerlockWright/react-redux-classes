import clsx from 'clsx';
import IconSimple from '../IconSimple';

// mock data
import { idfClasses as mockIdfClasses } from "../../mockData/idfClasses"

function ClassesSideBar() {

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
      <div
        className="px-1 py-3 overflow-y-auto h-[calc(100vh-45px)]"
      >
        <ul className="font-medium">
          <li className="cursor-pointer relative ">
            {/* checkbox to show/hide sub menu */}
            <input
              data-tooltip-target={`tooltip-123`}
              type="checkbox"
              className="absolute top-0 left-0 z-1 w-full h-[42px] cursor-pointer opacity-0 classChildren_checkbox"
            />

            <div className="class_header flex p-2 cursor-pointer text-gray-900 rounded-lg ">
              <IconSimple
                icon=""
                className="icon_arrow rotate-90  dark:text-[#fff]"
              />
              <span className="flex-1 mx-2 truncate ">
                Simulation Parameters
              </span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 mt-[2px] text-[12px] text-blue-800 bg-blue-100 rounded-full ">
                12
              </span>
            </div>

            {/* sub item */}
            <ul className="class_item">
              <li
                className="cursor-pointer relative pl-5"
              >
                <div
                  className={clsx(
                    "class_header flex p-2 cursor-pointer text-gray-900 rounded-lg  px-2 items-center hover:bg-gray-200 dark:hover:bg-gray-700",
                  )}
                >
                  <span className="flex-1 mx-2 truncate ">
                    Version
                  </span>
                </div>
              </li>
              <li
                className="cursor-pointer relative pl-5"
              >
                <div
                  className={clsx(
                    "class_header flex p-2 cursor-pointer text-gray-900 rounded-lg  px-2 items-center hover:bg-gray-200 dark:hover:bg-gray-700",
                  )}
                >
                  <span className="flex-1 mx-2 truncate ">
                    Control
                  </span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default ClassesSideBar