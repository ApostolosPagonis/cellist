import { observer } from 'mobx-react-lite'
import globals from '../../src/globals';
import { getStaticPaths, makeStaticProps } from '../../src/lib/getStatic'

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

const HomePage = observer(() => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: `center / contain no-repeat url("${globals.functions.prependPublicPrefix('/tolis-headshot-1.jpg')}")`
      }}
    >
    </div>
  )
});

export default HomePage