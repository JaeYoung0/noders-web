export type CategoryType = keyof typeof WorksByCategory

export const WorksByCategory = {
  ALL: {
    works: [
      {
        id: 'petit',
        imgCount: 9,
        title: 'Petit Cafe',
      },
      {
        id: 'lomme',
        imgCount: 3,
        title: 'Lomme Mask',
      },
      {
        id: 'dearpet',
        imgCount: 8,
        title: 'Dear Pet Application',
      },
      {
        id: 'mgd',
        imgCount: 9,
        title: 'My Guardians Diagram',
      },
      {
        id: 'petit',
        imgCount: 9,
        title: 'Petit Cafe',
      },
      {
        id: 'lomme',
        imgCount: 3,
        title: 'Lomme Mask',
      },
      {
        id: 'dearpet',
        imgCount: 8,
        title: 'Dear Pet Application',
      },
      {
        id: 'mgd',
        imgCount: 9,
        title: 'My Guardians Diagram',
      },
    ],
  },
  PACKAGE: {
    works: [],
  },
  WEB: {
    works: [],
  },
}

export const WorksById = WorksByCategory.ALL.works.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.id]: {
      id: cur.id,
      title: cur.title,
      imgCount: cur.imgCount,
    },
  }),
  {}
)
