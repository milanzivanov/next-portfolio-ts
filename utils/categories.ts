import { IconType } from "react-icons";
import { CgWebsite } from "react-icons/cg";

import { MdSettingsApplications } from "react-icons/md";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel = "websites" | "graphic design" | "apps";

export const categories: Category[] = [
  {
    label: "websites",
    icon: CgWebsite
  },
  {
    label: "apps",
    icon: MdSettingsApplications
  }
];
