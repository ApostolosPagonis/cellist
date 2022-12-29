import { runInAction } from "mobx";
import { useRouter } from "next/router"
import { useCallback } from "react";
import store from "../store/store";
import usePath from "./usePath";

const useInternalNavigate = () => {
  const router = useRouter();
  const path = usePath();

  return useCallback(({
    locale, href
  }: {
    locale?: string,
    href?: string
  }) => {
    const l = locale ?? store.lang;
    const url = `/${l}${href ?? path ?? ""}`;
    runInAction(() => {
      store.lang = l;
    });
    document.documentElement.lang = l;
    router.push(url)
  }, [path, router]);
}

export default useInternalNavigate