export enum RouteNames {
  DEBIT = 'DEBIT',
  HOME = 'HOME',
  LANDING = 'LANDING',
  SPENDING_LIMIT = 'SPENDING_LIMIT',
}

export type NavigatorParamList = {
  [RouteNames.SPENDING_LIMIT]: {amount: number};
};
