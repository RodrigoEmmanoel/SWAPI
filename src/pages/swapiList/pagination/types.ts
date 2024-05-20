export interface IPagination {
  totalItems: number;
  pageSelected: (page: number) => void;
}
