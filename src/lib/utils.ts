import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { faker } from "@faker-js/faker";
import {
  ChartsProps,
  CustomerData,
  CustomerStatisticProps,
  ExchangeRateType,
  NotificationData,
  OrderData,
  OrderStatisticProps,
  RevenueStatisticProps,
  SalesStatisticProps,
  Status,
  generateCardData,
} from "@/types";
import millify from "millify";
import { IconProps } from "@/components/Icon";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// array of 12 months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",

];

// random number generator between max and min numbers
export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// random data generator for charts
export const GenerateChartData = async (): Promise<ChartsProps[]> => {
  const data: ChartsProps[] = [];
  for (let i = 0; i < 12; i++) {
    data.push({
      label: months[i],
      products: randomNumber(1000, 3000),
      revenue: randomNumber(1000, 5000),
    });
  }
  return data;
};

// random data generator for sales statistics
export const GenerateSalesStatistics = async (): Promise<
  SalesStatisticProps[]
> => {
  const data: SalesStatisticProps[] = [];
  for (let i = 0; i < 12; i++) {
    data.push({
      label: months[i],
      products: randomNumber(1000, 3000),
      revenue: randomNumber(1000, 5000),
    });
  }
  return data;
};

// random data generator for order statistics
export const GenerateOrderStatistics = async (): Promise<
  OrderStatisticProps[]
> => {
  const data: OrderStatisticProps[] = [];
  for (let i = 0; i < 12; i++) {
    data.push({
      label: months[i],
      orders: randomNumber(800, 3000),
      revenue: randomNumber(1000, 5000),
    });
  }
  return data;
};

// random data generator for revenue statistics
export const GenerateRevenueStatistics = async (change: boolean): Promise<
  RevenueStatisticProps[]
> => {
  const data: RevenueStatisticProps[] = [];
  for (let i = 0; i < 12; i++) {
    data.push({
      label: change ? monthsShort[i] : months[i],
      loss: randomNumber(100, 800),
      revenue: randomNumber(1000, 5000),
    });
  }
  return data;
};

// random data generator for customer statistics
export const GenerateCustomerStatistics = async (): Promise<
  CustomerStatisticProps[]
> => {
  const data: CustomerStatisticProps[] = [];
  for (let i = 0; i < 12; i++) {
    data.push({
      label: months[i],
      inComing: randomNumber(500, 1500),
      outGoing: randomNumber(100, 150),
    });
  }
  return data;
};

// fake customer data generator
export const GenerateCustomerData = async (): Promise<CustomerData[]> => {
  const data: CustomerData[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      isbn: faker.commerce.isbn(),
      avatar: faker.image.avatar(),
      name: faker.person.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.imei(),
      location: faker.location.city(),
      totalOrders: millify(randomNumber(1, 100)),
      totalSpent: randomNumber(1000, 10000).toLocaleString(),
    });
  }
  return data;
};

// fake Order data generator
export const GenerateOrderData = async (): Promise<OrderData[]> => {
  const data: OrderData[] = [];
  const Status: Status[] = ["pending", "processing", "completed", "cancelled"];

  for (let i = 0; i < 100; i++) {
    data.push({
      name: faker.person.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.imei(),
      isbn: faker.commerce.isbn(),
      date: faker.date.recent().toString(),
      productName: faker.commerce.productName(),
      quantity: randomNumber(1, 10),
      price: Number(faker.commerce.price({ min: 10, max: 200 })),
      status: Status[Math.floor(Math.random() * Status.length)],
      city: faker.location.city(),
      country: faker.location.country(),
      streetAddress: faker.location.streetAddress({ useFullAddress: true }),
    });
  }
  return data;
};

// fake notification data generator
export const GenerateNotificationData = async (): Promise<
  NotificationData[]
> => {
  const data: NotificationData[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      avatar: faker.image.avatar(),
      name: faker.person.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.imei(),
      date: faker.date.recent().toString(),
      paragraph: faker.lorem.paragraph(),
    });
  }
  return data;
};

// fake revenue data generator
export const GenerateCardData = async (
  min: number,
  max: number
): Promise<generateCardData[]> => {
  const data: generateCardData[] = [];
  const header: string[] = ["Total Revenue", "Total Orders", "Total Customers"];
  const iconNames: IconProps["name"][] = [
    "dollar-sign",
    "shopping-cart",
    "users",
  ];

  for (let i = 0; i < 3; i++) {
    data.push({
      header: header[i],
      iconName: iconNames[i],
      newAmount: millify(randomNumber(min, max)),
      previousAmount: millify(randomNumber(min, max)),
    });
  }
  return data;
};

// fake exchange rate data generator
export const GenerateExchangeRate = async (): Promise<ExchangeRateType[]> => {
  const labels = ["USD/CAD", "USD/GBP", "USD/EUR", "USD/JPY", "USD/CNY"];
  const subLabels = ["Canadian Dollars", "Pound Sterling", "Euro", "Japanese Yen", "Chinese Yuan"];
  const data: ExchangeRateType[] = []

  for (let i = 0; i < 5; i++) {
    data.push({
      label: labels[i],
      subLabel: subLabels[i],
      exchangeRate: parseFloat((Math.random()).toFixed(2)),
      previousExchangeRate: parseFloat((Math.random()).toFixed(2)),
      currentPrice: randomNumber(10, 100),
    });
  }

  return data;
}

// time function that returns the current time and continuously updates
export function getTime() {
  let time = new Date().toLocaleTimeString();
  setTimeout(() => {
    time = new Date().toLocaleTimeString();
  }, 1000)
  return time;
}


