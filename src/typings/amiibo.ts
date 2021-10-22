export interface IAmiibo {
  readonly amiiboSeries: string;
  readonly character: string;
  readonly gameSeries: string;
  readonly head: string;
  readonly image: string;
  readonly name: string;
  readonly release?: IAmiiboRelease | null;
  readonly tail: string;
  readonly type: 'Card' | 'Figure' | 'Yarn';
}

export interface IAmiiboRelease {
  readonly au?: string | null;
  readonly eu?: string | null;
  readonly jp?: string | null;
  readonly na?: string | null;
}

export interface IAmiiboAPIResponse {
  readonly amiibo: IAmiibo[];
}
