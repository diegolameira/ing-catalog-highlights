interface Window {
  loadHighlights?: (selector: string, props?: MainProps) => void,
  trackProductClick: (listName: string, movie: Movie, index: number) => void,
  trackProductList: (movies: Movie[], listName: string) => void,
}

interface Swiper {
  destroyed: boolean;
  realIndex: number;
}

interface MainProps {
  movies?: Movie[];
  cityId?: number;
  partnership?: string;
  limit?: number;
  tag?: string;
  initialIndex?: number;
  setCurrent?: (current: number) => void;
}

interface Date {
  localDate?: string;
  isToday?: boolean;
  dayOfWeek?: string;
  dayAndMonth?: string;
  hour?: string;
  year?: number;
}

interface SessionDate extends Date { }

interface SessionType {
  id?: string;
  name?: string;
  alias?: string;
  display?: boolean;
}

interface Session {
  id?: string;
  price?: number;
  type?: string[];
  types?: string[];
  date?: SessionDate;
  realDate?: SessionDate;
  time?: string;
  defaultSector?: string;
  siteURL?: string;
  hasSeatSelection?: boolean;
  enabled?: boolean;
  blockMessage?: string;
}

interface Room {
  name?: string;
  sessions: Session[];
}

interface Properties {
  hasBomboniere?: boolean;
}

interface Showtime {
  id?: string;
  name?: string;
  address?: string;
  addressComplement?: string;
  number?: string;
  urlKey?: string;
  neighborhood?: string;
  properties?: Properties;
  deliveryType?: string[];
  siteURL?: string;
  enabled?: boolean;
  blockMessage?: string;
  rooms?: Room[];
}

interface Trailer {
  type?: string;
  url?: string;
  embeddedUrl?: string;
}

interface Tag {
  name?: string;
  background?: string;
  color?: string;
}

interface Image {
  url?: string;
  type?: string;
}

interface PremiereDate extends Date { }

interface Movie {
  id: string;
  title: string;
  originalTitle?: string;
  ancineId?: string;
  countryOrigin?: string;
  priority?: number;
  contentRating?: string;
  duration?: string;
  rating?: number;
  synopsis?: string;
  cast?: string;
  director?: string;
  distributor?: string;
  inPreSale?: boolean;
  urlKey?: string;
  isPlaying?: boolean;
  countIsPlaying?: number;
  premiereDate?: PremiereDate;
  creationDate?: string;
  city?: string;
  siteURL: string;
  images?: Image[];
  genres?: string[];
  completeTags?: Tag[];
  tags?: string[];
  trailers?: Trailer[];
  boxOfficeId?: string;
  showtimes?: Showtime[];
}

interface Classification {
  value?: string;
  category: string;
}

interface Highlight {
  event?: Movie;
}

interface ItemModel {
  event?: Movie;
  hide?: boolean;
}
