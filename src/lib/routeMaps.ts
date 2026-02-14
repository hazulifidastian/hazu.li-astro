export type Locale = "id" | "en";

type RoutePair = Record<Locale, string>;

const HOME_PATHS: RoutePair = {
  id: "/",
  en: "/en",
};

const ROUTE_PAIRS: RoutePair[] = [
  HOME_PATHS,
  {
    id: "/proyek",
    en: "/en/projects",
  },
  {
    id: "/kontak",
    en: "/en/contact",
  },
];

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function getAlternateLocalePath(
  pathname: string,
  targetLocale: Locale,
): string {
  const normalizedPathname = normalizePathname(pathname);
  const matchedPair = ROUTE_PAIRS.find(
    (routePair) =>
      routePair.id === normalizedPathname || routePair.en === normalizedPathname,
  );

  return matchedPair?.[targetLocale] ?? HOME_PATHS[targetLocale];
}
