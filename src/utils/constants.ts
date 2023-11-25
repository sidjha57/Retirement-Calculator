import { MenuType, UserType } from "../types/userDefinedTypes"
import shortid from "shortid"

export const MENUS: MenuType[] = [
  { id: shortid.generate(), title: "Dashboard", icon: "home", link: "/home" },
  {
    id: shortid.generate(),
    title: "Retirement Planner",
    link: "/retirement-plan",
    icon: "crop_square",
    gap: true,
    textColor: "text-[#4c8495]", // blue
  },
  {
    id: shortid.generate(),
    title: "Objective Mapping ",
    icon: "crop_square",
    textColor: "text-[#d18c70]", // orange
  },
  {
    id: shortid.generate(),
    title: "Solution Finder",
    icon: "crop_square",
    textColor: "text-[#daab4d]", // yellow
  },
  {
    id: shortid.generate(),
    title: "Risk Profiler",
    icon: "crop_square",
    textColor: "text-[#a094a0]", // purple
  },
  {
    id: shortid.generate(),
    title: "Investment Selection",
    icon: "crop_square",
    textColor: "text-[#aec8c5]", // sky-blue
  },
  {
    id: shortid.generate(),
    title: "Recommendation",
    icon: "crop_square",
    textColor: "text-[#519152]", // green
  },
  {
    id: shortid.generate(),
    title: "Settings",
    icon: "settings",
    gap: true,
  },
]

export const USER: UserType = {
  name: "John Smith",
  profile: "Financial Advisor",
}
