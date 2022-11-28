// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
  {
    icon: UilPackage,
    heading: 'Products'
  }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "DAA",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "Design Analysis Algorithm",
    cid:"21CS2214AA",
    png: UilUsdSquare,
    series: [
      {
        name: "DAA",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "OS",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    cid:"21CS2109AA",
    value: "Operating System",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "CNS",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "Computer Network Security",
    cid:"21CS2212RA",
    png: UilClipboardAlt,
    series: [
      {
        name: "CNS",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  }, {
    title: "DBMS",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0f8f5",
    },
    barValue: 70,
    value: "Data Base Managment System",
    cid:"21CS2110RA",
    png: UilUsdSquare,
    series: [
      {
        name: "DBMS",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  }, {
    title: "DBMS",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0f8f5",
    },
    barValue: 70,
    value: "Data Base Managment System",
    cid:"21CS2110RA",
    png: UilUsdSquare,
    series: [
      {
        name: "DBMS",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  }, {
    title: "DBMS",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0f8f5",
    },
    barValue: 70,
    value: "Data Base Managment System",
    cid:"21CS2110RA",
    png: UilUsdSquare,
    series: [
      {
        name: "DBMS",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  }, 
];

// Recent Update Card Data
export const UpdatesData = [
  {
    
    name: "Notification",
    noti: "Quiz.",
    time: "25 seconds ago",
  },
  {
   
    name: "Notification",
    noti: "ALM",
    time: "30 minutes ago",
  },
  {
   
    name: "Notification",
    noti: "Results",
    time: "2 hours ago",
  },
];
