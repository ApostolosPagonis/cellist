import Container from "@mui/material/Container"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import { observer } from "mobx-react-lite"
import globals from "../../src/globals"
import { getStaticPaths, makeStaticProps } from "../../src/lib/getStatic"
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import ListItemText from "@mui/material/ListItemText"
import Link from "next/link"
// import translate from "../../src/translation"

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

const ContactPage = observer(() => {
  return (
    <Container
      maxWidth="xl"
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <RadioButtonUncheckedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link
                target="_blank"
                rel="noopener noreferrer"
                style={{color: "inherit", textDecoration: "inherit"}}
                href={'/pdf/Beethovens_Cello_The_case_of_Op.102_No.1_Cello_Sonata_Practice_based_research_final_version.pdf'}
              >
                Beethovens Cello The case of Op.102 No.1 Cello Sonata Practice based research
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RadioButtonUncheckedIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link
                target="_blank"
                rel="noopener noreferrer"
                style={{color: "inherit", textDecoration: "inherit"}}
                href={'/pdf/Persephone_a_Secret_Rite1.pdf'}
              >
                Persephone a Secret Rite
              </Link>
            }
          />
        </ListItem>
      </List>
    </Container>
  );
});

export default ContactPage