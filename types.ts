export type ResponseType =
  | {
      items: Array<any>;
      pageInfo: { totalResults: number };
    }
  | any;
