import { Box, useTheme } from "@mui/material"
import Typography from "@mui/material/Typography"
import { observer } from "mobx-react-lite"
// import { useRouter } from "next/router"
// import RealBio from "../../src/components/real-bio"
import useIsBig from "../../src/hooks/usIsBig"
import { getStaticPaths, makeStaticProps } from "../../src/lib/getStatic"
import translate from "../../src/translation"

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

const BioPage = observer(() => {
  const theme = useTheme();
  const big = useIsBig();

  // const router = useRouter();
  // if (router.query.real === "") {
  //   return <RealBio />
  // }

  const text = translate("bioText")

  return <Box
    sx={{
      position: "absolute",
      top: "10px", bottom: "10px",
      display: "grid",
      justifyItems: "right",
      alignItems: "start"
    }}
  >
    <Box sx={{
      maxHeight: "100%",
      margin: big ? "0 10px" : undefined,
      padding: big ? "0 10px" : "0 10px",
      maxWidth: `min(${theme.breakpoints.values.sm}px, 100%)`,
      backdropFilter: `blur(5px)`,
      backgroundColor: "#000a",

      overflow: "auto"
    }}>
      <Typography
      variant="h5"
      sx={{
        fontWeight: 700,
        letterSpacing: '.3rem',
        textAlign: "center",
        marginBottom: "20px"
      }}
      >
        {translate("bio")}
      </Typography>

      {
        text.split("|").filter(part => part !== "").map(part => {
          return (
            <Typography paragraph key={part}>
              {part.trim()}
            </Typography>
          )
        })
      }
    </Box>
  </Box>
})

export default BioPage
