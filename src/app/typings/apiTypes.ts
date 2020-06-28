export interface PaginatedResponse<T> {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T[];
  };
}

export interface ImageResource {
  path: string;
  extension: string;
}
