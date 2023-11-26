import { useState } from "react"
import { Link } from "react-router-dom"
import { GetInitialsFromName } from "@utils/getNameInitials"
import { MENUS, USER } from "@utils/constants"

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const [selectedID, setSelectedID] = useState<string>("")
  
  const initials = GetInitialsFromName(USER.name)

  return (
    <div
      className={`${
        open ? "w-72" : "w-20 "
      } bg-gradient-to-r from-[#665256] from-10% via-[#4a3c43] via-30% to-[#251b27] to-90%  p-5 pt-8 relative duration-300`}
    >
      <span
        className={`material-symbols-outlined absolute z-10 cursor-pointer -right-3 top-9 w-7 bg-[#665256] 
        text-[#251b27] border-[#857e82] border-2 rounded-full  ${
          !open && "rotate-180"
        }`}
        onClick={() => {
          setOpen(!open)
        }}
      >
        chevron_right
      </span>
      <div className="flex gap-x-4 items-center">
        <div
          className={`bg-[#a9c3c0] -ml-1 text-white font-bold rounded-full cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
        >
          <span className="flex h-12 w-12 items-center justify-center text-[#251b27]">
            {initials}
          </span>
        </div>
        <div
          className={`text-white origin-left duration-200 ${
            !open && "scale-0"
          }`}
        >
          <h1 className="font-medium text-xl">{USER.name}</h1>
          <h2 className="font-small text-xs">{USER.profile}</h2>
        </div>{" "}
      </div>
      <ul className="pt-4">
        {MENUS.map((menu) => (
          <Link className="link" to={menu.link ? menu.link : "/"} key={menu.id} onClick={() => {setSelectedID(menu.id)}}>
            <li
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${menu.gap ? "mt-9" : "mt-2"} ${menu.id === selectedID ? "bg-light-white" : ""
              } `}
            >
              <div className="flex w-full justify-between">
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menu.title}
                </span>
                <span className={`material-symbols-outlined ${menu.textColor}`}>
                  {menu.icon}
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
