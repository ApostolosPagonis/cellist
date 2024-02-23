import { observer } from "mobx-react-lite"
// import globals from "../../src/globals"
import { getStaticPaths, makeStaticProps } from "../../src/lib/getStatic"
// import translate from "../../src/translation"

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

const ContactPage = observer(() => {
  return <div>
    Geia sas
  </div>
})

export default ContactPage