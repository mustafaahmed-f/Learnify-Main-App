import CustomerTracking from "@/_icons/CustomerTracking";
import OnlineBilling from "@/_icons/OnlineBilling";
import Scheduling from "@/_icons/Scheduling";
import { ReactNode } from "react";

type ServiceIcons = {
  billing: ReactNode;
  customer: ReactNode;
  scheduling: ReactNode;
};

export const ServicesIcons: ServiceIcons = {
  billing: <OnlineBilling />,
  customer: <CustomerTracking />,
  scheduling: <Scheduling />,
};
