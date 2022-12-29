import { useRouter } from "next/router";
import usePage from "./usePage"

const usePath = () => {
  const router = useRouter();
  const page = usePage();

  if (page === null) return null;

  const path = router.asPath;
  const i = path.indexOf(page);

  if (i === -1) return null;

  return "/" + path.slice(i);
}

export default usePath