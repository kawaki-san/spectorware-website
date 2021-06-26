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

interface PackageList {
  plan: HostingPackage[];
}
