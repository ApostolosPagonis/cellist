import { Box, useTheme } from "@mui/material"
import Typography from "@mui/material/Typography"
import { observer } from "mobx-react-lite"
import Img from "../../src/components/public-embeds/Img"
import useIsBig from "../../src/hooks/usIsBig"
import { getStaticPaths, makeStaticProps } from "../../src/lib/getStatic"

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

const RealBio = observer(() => {
  const theme = useTheme();
  const big = useIsBig();

  return <Box sx={{
    position: "absolute",
    top: 0, bottom: 0,
    right: 0,
    margin: big ? "10px" : undefined,
    padding: big ? "10px" : "10px",
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
      Biography
    </Typography>

    <Typography paragraph>
      Apostolos Pagonis (also known as "Pagonini", "Αποστόλλων" and "Ο ξανθός απόλυτος γκόμενος με τα μπράτσα") was a renowned personality of the 21st century. Well known as a cellist but better known as a pornstar that wouldn't stop, there is little doubt that he excelled at everything he tried his hand at (except maths, drawing and not-constantly-wanking-off.)
    </Typography>

    <Typography paragraph>
      Apostolos attended <em>2o λύκειο αγίου Μπραχαμίου</em> but his incompetence at every subject made it clear early that it was a musician's career for him. Indeed, after failing music theory 69 (nice!) times he got his degree which allowed him to move on from the trashheap country he lived in to a long forgotten place that has since been swallowed by the ocean.
    </Typography>

    <Box sx={{border: "1px solid white", p: "5px", mb: "15px", fontSize: "120%", backgroundColor: "#0005", borderRadius: "3px", textAlign: "center"}}>
      <Box>
        “<em>Με σάλιο και υπομονή ο κώλος γίνεται μουνί.</em>”
      </Box>
      <Box sx={{color: "#fffa", fontSize: "70%", textAlign: "right", marginRight: "5px"}}>
        ―Apostolos Pagonis about his work
      </Box>
    </Box>

    <Typography paragraph>
      Unfortunatelly his time was ravaged by the tech wars. He valiantly fought against the tech warlords, singlehandedly defeating Elon Musk and his muskrats and Mark Zuckerberg and his boomer droids. Alas he was defeated by Jeff bezos and his union-crushers.
    </Typography>

    <Typography paragraph>
      After his defeat Apostolos was forced to work the rest of his life as a courier for amazon products. During his later years Bezos insisted that making him pee in a plastic bottle for the rest of his life wasn't "<span style={{fontStyle: "italic"}}>done as some twisted kind of retribution for his resistance</span>" but he "<span style={{fontStyle: "italic"}}>[does] the same to everyone.</span>"
    </Typography>

    <Box sx={{border: "1px solid white", p: "5px", mb: "15px", fontSize: "120%", backgroundColor: "#0005", borderRadius: "3px", textAlign: "center"}}>
      <Box>
        “<em>Μας ψείρισε κι από πάνω!</em>”
      </Box>
      <Box sx={{color: "#fffa", fontSize: "70%", textAlign: "right", marginRight: "5px"}}>
        ―Apostolos Pagonis about a business deal gone wrong
      </Box>
    </Box>

    <Img
      style={{float: "right", marginLeft: "5px"}}
      src={"/pagonini.png"}
    />

    <Typography paragraph>
      All good things come to an end but so did Apostolos' life. He died horribly in an accident that we need not get into. "<span style={{fontStyle: "italic"}}>I shouldn't have got him that DIY autoerotic asphyxiation kit for his birthday.</span>" his close friend and associate laments. RIP.
    </Typography>

    <Typography paragraph>
      In the end at least we can say: He died the way he lived; with a ragin' boner.
    </Typography>

    <Box sx={{border: "1px solid white", p: "5px", mb: "15px", fontSize: "120%", backgroundColor: "#0005", borderRadius: "3px", textAlign: "center"}}>
      <Box>
        “<em>Δεν γίναν έτσι τα πράγματα.</em>”
      </Box>
      <Box sx={{color: "#fffa", fontSize: "70%", textAlign: "right", marginRight: "5px"}}>
        ―Apostolos Pagonis about this biography. Wait no
      </Box>
    </Box>
  </Box>
})

export default RealBio
