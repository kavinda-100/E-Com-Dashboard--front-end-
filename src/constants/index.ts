import { CardData, DashboardNavProps } from "@/types";


export const cardData: CardData[] = [
    {
        title: "Visitors",
        iconName: "user",
        amount: 100450,
    },
    {
        title: "Sales",
        iconName: "trending-up",
        amount: 510526,
    },
    {
        title: "Orders",
        iconName: "shopping-cart",
        amount: 508635,
    },
    {
        title: "Subscriptions",
        iconName: "credit-card",
        amount: 10005,
    },
];

export const dashboardNavData: DashboardNavProps[] = [
    {
        pathName: "Overview",
        iconName: "layout-dashboard",
        path: "/dashboard",
    },
    {
        pathName: "Orders",
        iconName: "clipboard",
        path: "/dashboard/orders",
    },
    {
        pathName: "Customers",
        iconName: "users",
        path: "/dashboard/customers",
    },
    {
        pathName: "Sales",
        iconName: "shopping-cart",
        path: "/dashboard/sales",
    },
    {
        pathName: "Statistics",
        iconName: "bar-chart",
        path: "/dashboard/statistics",
    },
    {
        pathName: "Notifications",
        iconName: "bell-ring",
        path: "/dashboard/notification",
    },
    {
        pathName: "settings",
        iconName: "settings",
        path: "/dashboard/settings",
    }
];

export const items = [
    {
      id: "recants",
      label: "Recants",
    },
    {
      id: "followers",
      label: "Followers",
    },
    {
      id: "mentions",
      label: "Mentions",
    },
    {
      id: "agents",
      label: "Agents",
    },
    {
      id: "orders",
      label: "Orders",
    },
    {
      id: "documents",
      label: "Documents",
    },
  ] as const