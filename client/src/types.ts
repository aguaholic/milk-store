export interface Milk {
  name: string,
  type: string,
  storage: number,
  id: string,
}

export interface MilkData {
  results: Milk[],
  count: number,
}
// export interface CheckData {
//   isChecked: boolean,
// }