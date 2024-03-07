import { IconProps } from "@/components/Icon";

import { z } from "zod";

export const formSchema = z
  .object({
    name: z
      .string()
      .min(2)
      .max(10, { message: "Name must be between 2 and 10 characters" }),
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(4, { message: "Password must be at least 4 characters" })
      .max(12, { message: "Password must be less 12 characters" }),
    confirmPassword: z
      .string()
      .min(4, { message: "Password must be at least 4 characters" })
      .max(12, { message: "Password must be less 12 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" })
    .max(12, { message: "Password must be less 12 characters" }),
});

export type UserSchema = z.infer<typeof formSchema>;

export type User = Omit<UserSchema, "confirmPassword"> & {
    avatar: string;
};

export type loginUser = Omit<User, 'name'| 'avatar'>
export type registerUser = Omit<UserSchema, "confirmPassword">

export type CardData = {
  title: string;
  iconName: IconProps["name"];
  amount: number;
};

export type DashboardNavProps = {
  pathName: string;
  iconName: IconProps["name"];
  path: string;
};

export type ChartsProps = {
  label: string;
  products: number;
  revenue: number;
};

export type SalesStatisticProps = ChartsProps;

export type OrderStatisticProps = {
  label: string;
  orders: number;
  revenue: number;
};

export type CustomerStatisticProps = {
  label: string;
  inComing: number;
  outGoing: number;
};

export type RevenueStatisticProps = {
  label: string;
  revenue: number;
  loss: number;
};

export type CustomerData = {
  isbn: string;
  avatar: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  totalOrders: string;
  totalSpent: string;
};

export type Status = "pending" | "processing" | "completed" | "cancelled";

export type StatisticDataType = "revenue" | "orders" | "customers" | "sales";

export type OrderData = Omit<
  CustomerData,
  "totalOrders" | "totalSpent" | "avatar" | "location"
> & {
  isbn: string;
  date: string;
  productName: string;
  quantity: number;
  price: number;
  status: Status;
  city: string;
  country: string;
  streetAddress: string;
};

export type NotificationData = {
  avatar: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  paragraph: string;
};

export type generateCardData = {
  header: string;
  iconName: IconProps["name"];
  newAmount: string;
  previousAmount: string;
};

export type ExchangeRateType = {
  label: string;
  subLabel: string;
  exchangeRate: number;
  previousExchangeRate: number;
  currentPrice: number;
};
