interface FeaturedTLD {
    name: string,
    cost: number,
    featured: boolean,
}

interface TLDList {
  domains: FeaturedTLD[];
}