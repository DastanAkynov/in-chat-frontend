export interface IAppResponse  {
  total?: number;
  message?: string,
  error?: string,
}

export interface AppInitialState {
  loading?: boolean,
  error?: string | null,
}