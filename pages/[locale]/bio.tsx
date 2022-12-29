import { Box, useMediaQuery, useTheme } from "@mui/material"
import Typography from "@mui/material/Typography"
import { observer } from "mobx-react-lite"
import Img from "../../src/components/public-embeds/Img"
import useIsBig from "../../src/hooks/usIsBig"
import { getStaticPaths, makeStaticProps } from "../../src/lib/getStatic"

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

const ContactPage = observer(() => {
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
    {/* <Typography paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis viverra lacinia. Aenean blandit enim ex, ac porttitor ante accumsan nec. Nunc vulputate leo leo. Morbi dignissim ac quam sed condimentum. Sed imperdiet felis leo, vitae efficitur libero finibus vel. Sed fermentum, nisl vel venenatis egestas, libero enim pulvinar ligula, eu pellentesque purus ex sed nisi. Donec metus libero, volutpat vel fringilla eu, sodales quis augue.
    </Typography>

    <Typography paragraph>
      In aliquam nec nisl nec semper. Etiam ut dignissim ante. Ut pulvinar consequat ex, et tempor libero fringilla eu. Praesent sagittis tortor sit amet eros dapibus facilisis. Nam id ligula nisl. Donec suscipit erat vitae porttitor porta. Ut nec arcu ut orci eleifend tristique commodo id turpis. Aenean a dolor sit amet dui tincidunt rhoncus id eu leo. Donec feugiat mi nisl, vitae fermentum ex tristique eu. Nullam aliquet erat id lorem aliquet cursus. Aenean nec lobortis felis. In fringilla ligula ac dui semper, et pretium quam varius. Pellentesque a maximus ipsum. Aenean sed facilisis leo. Sed eleifend erat leo, at feugiat velit elementum at. Nam lobortis pellentesque felis vestibulum vestibulum.
    </Typography>

    <Typography paragraph>
      Donec lacinia eget nunc a feugiat. Phasellus sed enim non leo porttitor feugiat pharetra non turpis. Etiam eget metus at diam tristique eleifend eget sit amet ante. Ut blandit, quam non sollicitudin ultricies, tellus erat rutrum orci, ac porta justo tortor semper erat. Morbi est velit, molestie viverra facilisis non, ultrices sit amet lorem. Aliquam sit amet bibendum lorem. Aenean sollicitudin erat porta, hendrerit risus quis, viverra justo. Donec facilisis porta libero, a commodo leo aliquet vel. Suspendisse dictum erat libero, sit amet tempor lacus faucibus vel. In eget neque vulputate, placerat neque quis, tincidunt felis. Nunc quis purus sit amet quam consectetur convallis. Morbi suscipit lobortis odio, at tempus libero. Quisque gravida vulputate cursus. Ut sit amet urna vel massa pellentesque facilisis. Pellentesque ac nunc convallis, lobortis augue sed, laoreet nibh. Integer pretium suscipit nibh in aliquet.
    </Typography>

    <Typography paragraph>
      In in dolor a neque volutpat accumsan ac vitae mi. Vivamus elit sem, scelerisque vel diam in, blandit pretium ex. Aenean purus ipsum, sollicitudin ac lobortis sollicitudin, posuere a velit. Sed maximus nulla vitae elit placerat, in sodales orci molestie. Maecenas tincidunt libero quam, sit amet pellentesque leo vestibulum at. Etiam quis pulvinar metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>

    <Typography paragraph>
      Integer cursus dolor non felis ultrices, tincidunt fringilla leo pellentesque. Donec in turpis sodales, feugiat nunc eu, tristique mauris. Nulla ultricies lorem in libero dapibus, vel ultricies turpis blandit. Donec ut urna vehicula, eleifend libero vel, tristique libero. Aliquam vel aliquam tortor. Nunc eget tincidunt arcu. Proin vulputate odio metus, non dapibus mi euismod eu. Suspendisse vestibulum quam eu condimentum pulvinar. Proin magna tortor, tincidunt ut neque non, eleifend semper lorem. Vivamus sagittis viverra commodo.
    </Typography> */}

    <Typography paragraph>
      Apostolos Pagonis (also known as "Pagonini", "Αποστολλων" and "Ο ξανθός απόλυτος γκόμενος με τα μπράτσα") was a renowned personality of the 21st century. Well known as a cellist but better known as a pornstar that wouldn't stop, there is little doubt that he excelled at everything he tried his hand at (except maths, drawing and not-constantly-wanking-off.)
    </Typography>

    <Typography paragraph>
      Apostolos attended <em>2o λύκειο αγίου Μπραχαμίου</em> but his incompetence at every subject made it clear early that it was a musician's career for him. Indeed, after failing music theory 69 (nice!) times he got his degree which permitted him to move on from the trashheap country he lived in to a long forgotten place that has since been swallowed by the ocean.
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

export default ContactPage
