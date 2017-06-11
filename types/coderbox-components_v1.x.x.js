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

  declare type ListItem = {
    id: number,
    title: string,
    subtitle: string,
    image: string,
    tags: Tag[],
    startDate: Date,
    endDate: Date,
    icon: string,
    description: string
  }
}
