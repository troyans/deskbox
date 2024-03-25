import {
  MdOutlineRssFeed,
  MdRocketLaunch,
  MdOutlineShield,
} from "react-icons/md";
import { BsGlobeAmericas } from "react-icons/bs";

type Why = {
  Icon: React.ElementType;
  title: string;
  description: string;
};

const why: Why[] = [
  {
    Icon: MdOutlineRssFeed,
    title: "Why 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    Icon: MdRocketLaunch,
    title: "Why 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    Icon: BsGlobeAmericas,
    title: "Why 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    Icon: MdOutlineShield,
    title: "Why 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

export default why;
