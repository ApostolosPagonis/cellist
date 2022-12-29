import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite'
import globals from '../../src/globals';
import { getStaticPaths, makeStaticProps } from '../../src/lib/getStatic'

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

const HomePage = observer(() => {
  return (
    <Box
      style={{
        position: "absolute",
        top: 0, bottom: 0,
        left: 0, right: 0,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Box
        maxWidth="sm"
        style={{
          width: "100%",
          height: "100%",
          background: `center / contain no-repeat url("${globals.functions.prependPublicPrefix('/tolis-headshot-1.jpg')}")`
        }}
      />
    </Box>
  )
});

export default HomePage