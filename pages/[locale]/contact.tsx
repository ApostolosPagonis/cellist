import { Link, Typography } from "@mui/material"
import { observer } from "mobx-react-lite"
import globals from "../../src/globals"
import { getStaticPaths, makeStaticProps } from "../../src/lib/getStatic"
// import translate from "../../src/translation"

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

const ContactPage = observer(() => {
  return <div
    style={{
      position: "absolute",
      top: 0, left: 0, right: 0, bottom: 0,
      background: `top center no-repeat url("${globals.functions.prependPublicPrefix('/tolis-contacts.jpg')}")`
    }}
  >
    <div
      style={{
        maxWidth: "100%",
        width: "768px",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      <div
        style={{
          width: "100%",
          position: "absolute",
          top: 192 + 10, bottom: 0,
          display: "grid",
          gap: 10
        }}
      >
        {/* <Typography fontSize={"150%"}>
          {translate("email")}: <Link href="mailto:apostolos92@windowslive.com">
            apostolos92@windowslive.com
          </Link>
        </Typography>
        <Typography fontSize={"150%"}>
          {translate("phone")}: <Link href="tel:+0031638496032">
            (+0031) 638496032
          </Link>
        </Typography> */}
        <Typography display={"flex"} gap="15px">
          <AlternateEmailIcon color="secondary" /> <Link underline="none" href="mailto:apostolos92@windowslive.com">apostolos92@windowslive.com</Link>
        </Typography>
        <Typography display={"flex"} gap="15px">
          <PhoneIcon color="secondary" /> <Link underline="none" href="mailto:apostolos92@windowslive.com">(+0031) 638496032</Link>
        </Typography>
      </div>
    </div>
  </div>
})

export default ContactPage