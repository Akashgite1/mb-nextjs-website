/* --- types & dummy data (keep your existing data if preferred) --- */
type PodcastRow = {
  title?: string
  youtubeId: string // can be either raw id or a full URL (we handle both)
  link?: string
}

type PodcastSectionType = {
  mainHeader: string
  externalLinks?: { href?: string; icon?: string }[]
  rowData: PodcastRow[]
}

export const podcastsData: PodcastSectionType[] = [
  {
    mainHeader: "Product Based Companies",
    rowData: [
      {
        youtubeId: "kQ-7jTU_h00",
        link: "https://youtu.be/kQ-7jTU_h00?si=1Szai0sfcFrFYKaa",
      },
      {
        youtubeId: "JweC6Rg8s4U",
        link: "https://youtu.be/JweC6Rg8s4U?si=QbOFxQki9Fq0gHfr",
      },
      {
        youtubeId: "jCbO8UrALU8",
        link: "https://youtu.be/jCbO8UrALU8?si=IvYPWN9xxKwyltoM"
      },
      {
        youtubeId: "t2gduV_KLew",
        link: "https://youtu.be/t2gduV_KLew?si=EK_-BY78MCz0ncRU",
      }
    ],
  },
  {
    mainHeader: "Full Stack",
    rowData: [
      {
        youtubeId: "9hd34sAB-jQ",
        link: "https://youtu.be/9hd34sAB-jQ?si=msj3GexMJYElmS3m",
      },
      {
        youtubeId: "STy0LcUKA8M",
        link: "https://youtu.be/STy0LcUKA8M?si=p216ngoPOhirlVXj",
      },
      {
        youtubeId: "TstctXzKFpg",
        link: "https://youtu.be/TstctXzKFpg?si=k0QvLCYvYdKmiRbl",
      },
    ],
  },
  {
    mainHeader: "Testing",
    rowData: [
      {
        youtubeId: "muOoLbAEGwI",
        link: "https://youtu.be/muOoLbAEGwI?si=nl1wrIqlBFmeo_QU",
      },
    ],
  },
  {
    mainHeader: "Data",
    rowData: [
      {
        youtubeId: "TzvxmrxTOXo",
        link: "https://youtu.be/TzvxmrxTOXo?si=lomEY0Xagd1-xgSO",
      },
      {
        youtubeId: "F_untHUPz2Q",
        link: "https://youtu.be/F_untHUPz2Q?si=_ztXNJURohbmd6wO",
      },
      {
        youtubeId: "axhdyEs1WR4",
        link: "https://youtu.be/axhdyEs1WR4?si=SJM51jVlRkTP0EPA",
      },
      {
        youtubeId: "emPzBKKDxQQ",
        link: "https://youtu.be/emPzBKKDxQQ?si=SGk9ThLRTymIB2AR",
      },
    ],
  },
  {
    mainHeader: "Salesforce",
    rowData: [
      {
        youtubeId: "5XtUOTemB3s",
        link: "https://youtu.be/5XtUOTemB3s?si=kVxQCB3bGGYAcbqr",
      },
      {
        youtubeId: "K_lbAwgwzsc",
        link: "https://youtu.be/K_lbAwgwzsc?si=4_x_8igeFsiR6-NA",
      },
    ],
  },
  {
    mainHeader: "UI/UX Designer",
    rowData: [
      {
        youtubeId: "mGTFtfRjO6U",
        link: "https://youtu.be/mGTFtfRjO6U?si=WylVQ4vX1LIXDlUq",
      },
    ],
  },
  {
    mainHeader: "DevOps & Cloud",
    rowData: [
      {
        youtubeId: "aBVgkwmuZ1s",
        link: "https://youtu.be/aBVgkwmuZ1s?si=2fcIc1AWU0CSYwg0",
      },
    ],
  },
]
