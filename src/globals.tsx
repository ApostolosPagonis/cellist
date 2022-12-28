// trim off `<owner>/` because process.env.GITHUB_REPOSITORY will be `<owner>/<repo>`
let repo_name = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || "";

try {
  if (window.location.hostname !== "localhost") {
    const path = window.location.pathname.split("/");
    repo_name = path[0] || path[1] || "";
  } else {
    repo_name = "";
  }
} catch {}

const globals = {
  constants: {
    repo_name,
    public_prefix: "/" + repo_name
  } as const,
  functions: {
    /** Prepends reponame to links so they work in github deploy */
    prependPublicPrefix(src?: string | {src: string}) {
      if (src === undefined) return undefined;
      if (typeof src === "object") return src.src;
      if (
        globals.constants.repo_name === "" ||
        src[0] !== "/" ||
        src.includes("://")
      ) return src;
      return "/" + globals.constants.repo_name + src;
    }
  } as const
}

export default globals;