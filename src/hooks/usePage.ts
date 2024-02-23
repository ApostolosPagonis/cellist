import { useRouter } from "next/router"

export type Page = 'home'|'bio'|'photos'|'videos'|'events'|'contact'|'personal_projects';
const pageVerifier: {[key in Page]: true} = {
  home: true,
  bio: true,
  photos: true,
  videos: true,
  events: true,
  contact: true,
  personal_projects: true
}
export const isPage = (p: string): p is Page => {
  return !!pageVerifier[p as Page]
}
const usePage = () => {
  const router = useRouter();

  let p = router.pathname;

  if (p.includes("[locale]")) {
    p = p.split("[locale]")[1] || "";

    const s = p.split("/");
    p = s[0] || s[1] || "";

    if (isPage(p)) return p;

    if (p === "") return "home";

    return null;
  }

  return null;
}

export default usePage