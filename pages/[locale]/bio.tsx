import { Box, useTheme } from "@mui/material"
import Typography from "@mui/material/Typography"
import { observer } from "mobx-react-lite"
// import { useRouter } from "next/router"
// import RealBio from "../../src/components/real-bio"
import useIsBig from "../../src/hooks/usIsBig"
import { getStaticPaths, makeStaticProps } from "../../src/lib/getStatic"

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

const BioPage = observer(() => {
  const theme = useTheme();
  const big = useIsBig();

  // const router = useRouter();
  // if (router.query.real === "") {
  //   return <RealBio />
  // }

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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus auctor neque sed cursus. Curabitur enim ligula, auctor non eros ac, lobortis fermentum mi. Morbi eu enim pharetra, rutrum augue venenatis, molestie felis. Aliquam erat volutpat. Etiam malesuada, sapien at rutrum pellentesque, orci est cursus est, et sagittis justo purus a arcu. Mauris eget urna felis. Etiam non ultricies ex. Proin hendrerit ante ut neque pulvinar pretium. Donec faucibus tempor lectus, vitae luctus orci cursus non. Pellentesque pretium malesuada turpis id rhoncus. Donec ultricies odio at finibus lacinia.
    </Typography>

    <Typography paragraph>
      Donec magna dolor, elementum commodo rhoncus quis, tristique vitae urna. Mauris pretium odio in augue consequat, eu sagittis massa imperdiet. Donec ut libero non diam tincidunt lobortis nec in elit. Phasellus facilisis luctus odio, in mattis urna laoreet ut. Phasellus vel ligula dignissim, convallis leo eu, faucibus lacus. Nullam ultricies nisl id lectus gravida, vitae dignissim lectus pharetra. Fusce malesuada metus vel nibh finibus, in fermentum ante elementum. Mauris euismod urna ac erat consectetur, id vehicula diam lacinia.
    </Typography>

    <Typography paragraph>
      Maecenas tincidunt purus sit amet erat volutpat tincidunt. Praesent egestas sit amet quam id condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida vestibulum imperdiet. Suspendisse feugiat tincidunt imperdiet. Aliquam facilisis dictum interdum. Morbi cursus dolor ipsum, quis efficitur arcu posuere vel. Vestibulum quis venenatis enim. Nunc nisi metus, pulvinar quis mauris ut, maximus sodales ipsum. Vestibulum blandit, nisl nec porta consectetur, erat mauris bibendum justo, et tempor nunc augue eu magna. Quisque non imperdiet eros, et pellentesque ex. Integer efficitur nibh tempor augue luctus tincidunt. Nam eu metus pellentesque, posuere est non, cursus erat. Morbi eget nisl sit amet elit pulvinar sollicitudin.
    </Typography>

    <Typography paragraph>
      Nulla fringilla eros vitae nibh lacinia, eget ullamcorper mi suscipit. Phasellus at sapien eget metus feugiat tristique ac vitae elit. Praesent rutrum aliquet mauris non pellentesque. Mauris id nisi velit. Mauris nec nibh eu lorem dapibus vulputate. Pellentesque lobortis vulputate urna. Etiam volutpat ex sed lorem bibendum, a consectetur magna blandit. Quisque a mauris aliquam, lobortis ante sit amet, rutrum lorem. Etiam malesuada dui urna, et sodales leo ultricies ut. Praesent ultricies ultrices lacus, at feugiat enim vulputate vel. Ut maximus neque nisl, non scelerisque elit luctus ut. Nulla vestibulum lectus quis ipsum pellentesque lobortis.
    </Typography>

    <Typography paragraph>
      Aenean iaculis metus id fringilla faucibus. Curabitur et finibus mauris. Donec rutrum tortor quis justo dignissim, nec vehicula nunc hendrerit. Suspendisse feugiat at dui et mattis. Cras ut vehicula tellus, eget dapibus dolor. Morbi ultrices, lorem ac gravida sollicitudin, ipsum enim sagittis mauris, in ullamcorper ante est ut dui. Nullam blandit convallis rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum dapibus pretium ex, vitae interdum quam hendrerit eget. Vivamus dapibus lectus vitae turpis molestie tempor. Curabitur ipsum tortor, elementum et ex eget, molestie condimentum mauris. Aenean viverra sagittis tincidunt.
    </Typography>
  </Box>
})

export default BioPage
