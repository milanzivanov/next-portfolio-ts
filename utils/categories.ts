import { IconType } from "react-icons";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";

import { MdSettingsApplications } from "react-icons/md";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel = "websites" | "UI design" | "apps";

export const categories: Category[] = [
  {
    label: "websites",
    icon: CgWebsite
  },
  {
    label: "apps",
    icon: MdSettingsApplications
  },
  {
    label: "UI design",
    icon: MdOutlineDesignServices
  }
];
