export interface CardShow {
  id: string;
  name: string;
  date: string; // ISO format date
  endDate?: string; // For multi-day events
  location: string;
  address: string;
  description?: string;
  url?: string; // Link to event website or ticket page
  image?: string; // Optional image path
  confirmed?: boolean; // Optional unconfirmed shows
  imageMode?: "contain" | "cover";
}

export const cardShows: CardShow[] = [
  {
    id: "card-expo-leeds-2025",
    name: "The Card Expo x Leeds Tattoo Expo",
    date: "2025-06-07",
    location: "First Direct Arena",
    address: "Leeds LS2 8BY",
    description: "Cards, collectibles, tattoos and entertainment!",
    url: "https://thecardexpo.co.uk/",
    image: "/the-card-expo.jpg",
  },
  {
    id: "pokemania-leeds-2025",
    name: "Pokemania Leeds",
    date: "2025-09-21",
    location: "The Edge",
    address: "Leeds LS2 9JT",
    description: "Pokemanias first time in Leeds, 40+ vendors.",
    url: "https://www.pokemania.co.uk/event/leeds",
    image: "/pokemania.png",
    confirmed: false,
    imageMode: "contain",
  },
  {
    id: "wolverhampton-card-show-2025",
    name: "Wolverhampton Card Show 2",
    date: "2025-08-30",
    endDate: "2025-08-31",
    location: "Mander Center",
    address: "Wolverhampton WV1 3NH",
    description: "Free entry all weekend, over 40 tables over 2 days.",
    url: "https://www.eventbrite.co.uk/e/the-second-wolverhampton-card-show-30th-31st-august-tickets-1277512045919",
    image: "/wolverhampton-card-show.jpg",
  },
];

/**
 * Returns only upcoming card shows based on current date
 */
export function getUpcomingShows(): CardShow[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day

  return cardShows
    .filter((show) => {
      const showDate = new Date(show.endDate || show.date);
      return showDate >= today && show.confirmed !== false;
    })
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
}

/**
 * Returns the next upcoming show
 */
export function getNextShow(): CardShow | null {
  const upcoming = getUpcomingShows();
  return upcoming.length > 0 ? upcoming[0] : null;
}
