import ChatTeamDrop from "../../public/icons/ChatTeardrop.svg";
import Tag from "../../public/icons/Tag.svg";
import CheckFat from "../../public/icons/CheckFat.svg";
import Coins from "../../public/icons/Coins.svg";
import Coin from "../../public/icons/Coin.svg";
import PiggyBank from "../../public/icons/PiggyBank.svg";
import { DataItem, ForecastData, ProductData } from "@/types/indes";

export const atAGlanceArr: DataItem[] = [
  {
    icon: ChatTeamDrop,
    title: "CONSULTATIONS",
    count: 24,
    improved: true,
    percentage: 15,
    unit: null,
  },
  {
    icon: Tag,
    title: "ORDER PLACED",
    count: 12,
    improved: false,
    percentage: 15,
    unit: null,
  },
  {
    icon: CheckFat,
    title: "CONVERSION",
    count: 50,
    improved: false,
    percentage: 15,
    unit: "%",
  },
  {
    icon: Coins,
    title: "TOTAL SALES VALUE",
    count: 2400,
    improved: true,
    percentage: 15,
    unit: "$",
  },
  {
    icon: Coin,
    title: "AVERAGE ORDER VALUE",
    count: 240,
    improved: true,
    percentage: 15,
    unit: "$",
  },
  {
    icon: PiggyBank,
    title: "COMMISION PAID",
    count: 240,
    improved: true,
    percentage: 15,
    unit: "$",
  },
];

export const combinationChartData = [
  { name: "Jan", expertsOnline: 10, answered: 24, incoming: 20 },
  { name: "Feb", expertsOnline: 30, answered: 13, incoming: 22 },
  { name: "Mar", expertsOnline: 20, answered: 98, incoming: 22 },
  { name: "Apr", expertsOnline: 17, answered: 39, incoming: 20 },
  { name: "May", expertsOnline: 18, answered: 48, incoming: 21 },
  { name: "Jun", expertsOnline: 23, answered: 38, incoming: 20 },
  { name: "Jul", expertsOnline: 14, answered: 43, incoming: 21 },
];

export const barChartData = [
  { name: "This Week", consultation: 40, orderClosed: 24 },
  { name: "Last Week", consultation: 30, orderClosed: 13 },
];

export const forecastData: ForecastData[] = [
  {
    improved: true,
    percent: 15,
    description:
      "forecasted increase in your sales closed by the end of the current month",
  },
  {
    improved: true,
    percent: 20,
    description:
      "forecasted increase in your sales closed by the end of the current month",
  },
];

export const productData: ProductData[] = [
  {
    productName: "Whole",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-04-20T14:30:00",
    timeSpent: "11 hrs",
    orderValue: "$6985",
    commission: "$225",
  },
  {
    productName: "Drug",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-11-14T09:15:00",
    timeSpent: "1 hrs",
    orderValue: "$5634",
    commission: "$324",
  },
  {
    productName: "Under",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-12-16T18:45:00",
    timeSpent: "15 hrs",
    orderValue: "$7132",
    commission: "$430",
  },
  {
    productName: "Or",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-01-16T07:20:00",
    timeSpent: "13 hrs",
    orderValue: "$5702",
    commission: "$71",
  },
  {
    productName: "Guess",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-10-22T12:00:00",
    timeSpent: "5 hrs",
    orderValue: "$6223",
    commission: "$413",
  },
  {
    productName: "Rule",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-07-04T21:10:00",
    timeSpent: "20 hrs",
    orderValue: "$745",
    commission: "$322",
  },
  {
    productName: "Outside",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-05-17T16:25:00",
    timeSpent: "21 hrs",
    orderValue: "$3899",
    commission: "$111",
  },
  {
    productName: "Sky",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-03-12T10:05:00",
    timeSpent: "3 hrs",
    orderValue: "$1250",
    commission: "$98",
  },
  {
    productName: "Tech",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-02-01T14:30:00",
    timeSpent: "8 hrs",
    orderValue: "$5200",
    commission: "$207",
  },
  {
    productName: "Fiction",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-08-25T18:40:00",
    timeSpent: "2 hrs",
    orderValue: "$3000",
    commission: "$210",
  },
  {
    productName: "Beam",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-01-12T06:50:00",
    timeSpent: "12 hrs",
    orderValue: "$4567",
    commission: "$110",
  },
  {
    productName: "Cycle",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-06-22T17:15:00",
    timeSpent: "10 hrs",
    orderValue: "$4000",
    commission: "$200",
  },
  {
    productName: "Harmony",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-09-05T08:10:00",
    timeSpent: "7 hrs",
    orderValue: "$7000",
    commission: "$333",
  },
  {
    productName: "Marble",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-07-20T14:25:00",
    timeSpent: "4 hrs",
    orderValue: "$1200",
    commission: "$130",
  },
  {
    productName: "Quest",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-05-03T22:40:00",
    timeSpent: "18 hrs",
    orderValue: "$8200",
    commission: "$560",
  },
  {
    productName: "Stream",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-02-19T13:00:00",
    timeSpent: "6 hrs",
    orderValue: "$3500",
    commission: "$210",
  },
  {
    productName: "Clash",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-03-10T09:35:00",
    timeSpent: "14 hrs",
    orderValue: "$7200",
    commission: "$400",
  },
  {
    productName: "Innovation",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-04-25T07:55:00",
    timeSpent: "9 hrs",
    orderValue: "$5100",
    commission: "$150",
  },
  {
    productName: "Opal",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-06-18T16:40:00",
    timeSpent: "5 hrs",
    orderValue: "$4700",
    commission: "$210",
  },
  {
    productName: "Flare",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-11-01T12:00:00",
    timeSpent: "11 hrs",
    orderValue: "$6050",
    commission: "$295",
  },
  {
    productName: "Vibe",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-08-30T13:45:00",
    timeSpent: "16 hrs",
    orderValue: "$6800",
    commission: "$380",
  },
  {
    productName: "Rush",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-05-23T18:50:00",
    timeSpent: "8 hrs",
    orderValue: "$4400",
    commission: "$180",
  },
  {
    productName: "Leap",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-10-05T15:15:00",
    timeSpent: "12 hrs",
    orderValue: "$7600",
    commission: "$520",
  },
  {
    productName: "Echo",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-09-17T17:00:00",
    timeSpent: "6 hrs",
    orderValue: "$3900",
    commission: "$240",
  },
  {
    productName: "Bliss",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-03-08T08:45:00",
    timeSpent: "10 hrs",
    orderValue: "$7200",
    commission: "$450",
  },
  {
    productName: "Axis",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-01-23T10:10:00",
    timeSpent: "18 hrs",
    orderValue: "$8300",
    commission: "$350",
  },
  {
    productName: "Flicker",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-07-14T11:30:00",
    timeSpent: "7 hrs",
    orderValue: "$5400",
    commission: "$290",
  },
  {
    productName: "Prime",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-04-18T19:20:00",
    timeSpent: "3 hrs",
    orderValue: "$3200",
    commission: "$215",
  },
  {
    productName: "Fusion",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-11-12T21:05:00",
    timeSpent: "10 hrs",
    orderValue: "$6000",
    commission: "$420",
  },
  {
    productName: "Peak",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-10-09T12:00:00",
    timeSpent: "15 hrs",
    orderValue: "$7400",
    commission: "$330",
  },
  {
    productName: "Pulse",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-06-30T13:25:00",
    timeSpent: "17 hrs",
    orderValue: "$9000",
    commission: "$510",
  },
  {
    productName: "Quest",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-02-10T20:40:00",
    timeSpent: "4 hrs",
    orderValue: "$4200",
    commission: "$180",
  },
  {
    productName: "Wave",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-05-30T12:10:00",
    timeSpent: "12 hrs",
    orderValue: "$5800",
    commission: "$220",
  },
  {
    productName: "Summit",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-09-11T10:30:00",
    timeSpent: "14 hrs",
    orderValue: "$6900",
    commission: "$320",
  },
  {
    productName: "Mosaic",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-10-15T08:40:00",
    timeSpent: "6 hrs",
    orderValue: "$5300",
    commission: "$250",
  },
  {
    productName: "Nexus",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-04-17T17:00:00",
    timeSpent: "9 hrs",
    orderValue: "$4100",
    commission: "$180",
  },
  {
    productName: "Vortex",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-08-15T16:00:00",
    timeSpent: "13 hrs",
    orderValue: "$6500",
    commission: "$310",
  },
  {
    productName: "Frost",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-07-08T12:30:00",
    timeSpent: "5 hrs",
    orderValue: "$4000",
    commission: "$220",
  },
  {
    productName: "Comet",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-11-05T11:40:00",
    timeSpent: "11 hrs",
    orderValue: "$5200",
    commission: "$260",
  },
  {
    productName: "Omega",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-12-03T09:20:00",
    timeSpent: "10 hrs",
    orderValue: "$6100",
    commission: "$310",
  },
  {
    productName: "Fusion",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-09-08T12:45:00",
    timeSpent: "14 hrs",
    orderValue: "$7000",
    commission: "$430",
  },
  {
    productName: "Core",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-12-12T07:30:00",
    timeSpent: "5 hrs",
    orderValue: "$3200",
    commission: "$150",
  },
  {
    productName: "Zephyr",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-08-09T14:25:00",
    timeSpent: "6 hrs",
    orderValue: "$4600",
    commission: "$200",
  },
  {
    productName: "Rogue",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-07-02T19:10:00",
    timeSpent: "13 hrs",
    orderValue: "$5400",
    commission: "$240",
  },
  {
    productName: "Night",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-05-11T21:30:00",
    timeSpent: "9 hrs",
    orderValue: "$5500",
    commission: "$300",
  },
  {
    productName: "Bolt",
    productIcon:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    date: "2024-11-23T11:00:00",
    timeSpent: "7 hrs",
    orderValue: "$5300",
    commission: "$240",
  },
];
