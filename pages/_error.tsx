import { getRedirect } from "../src/lib/redirect"

// Not found pages redirect to home page
const ErrorPage = getRedirect("");

export default ErrorPage