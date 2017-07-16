// @flow

declare module 'coderbox-components' {
  declare type Tag = {
    _id: number,
    name: string
  }

  declare type DateRange = {
    start: Date,
    end: ?Date
  }

  declare type Item = {
    id: number,
    title: string,
    subtitle: string,
    image: string,
    tags: Tag[],
    dateRange: DateRange,
    icon: string,
    description: string
  }

  declare type Colors = {
    palette?: string,
    isPrimary?: boolean,
    isSecondary?: boolean,
    isSuccess?: boolean,
    isDanger?: boolean,
    isBlack?: boolean,
    isGrayscale?: boolean
  }
}
