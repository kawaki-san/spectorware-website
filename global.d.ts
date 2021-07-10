import { IconName } from "@fortawesome/fontawesome-svg-core";

interface FeaturedTLD {
  name: string;
  cost: number;
  featured: boolean;
}

interface TLDList {
  domains: FeaturedTLD[];
}

interface HostingPackage {
  name: string;
  cost_mon: number;
  cost_ann: number;
  databases: number;
  domains: number;
  mailboxes: number;
  subdomains: number;
  popular: boolean;
  storage: number;
  toggleCycle: boolean;
  quote: string;
}

interface BehindTheScenesFeature{
  app_name: string;
  description:string;
  feature_name:string;
  app_logo?:string;
  alt_logo?:string;
}

interface PackageList {
  plan: HostingPackage[];
}

interface AppList{
  icon: IconName;
  title: string;
  description: string;
}