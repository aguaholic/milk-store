interface Milk {
  name: string,
  type: string,
  storage: number,
  id: string,
}

interface MilkData {
  results: Milk[],
  count: number,
}