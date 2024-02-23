import { Box, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { observer } from 'mobx-react-lite'
import { getStaticPaths, makeStaticProps } from '../../src/lib/getStatic'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

const events = `
30.03.2024$8.00 p.m. - Engelberterweg 39, 9723 EJ Groningen, with Mare Nostrum Cello ensemble
|
26.02.2024$AEON, Master Final Recital, PDG Zaal, Prins Claus Conservatorium at 15:00
|
18.02.2024$Klassiek in 't Veen: Michel Strauss, cello en Jean-Claude Vanden Eynden, piano /
voor programma Mare Nostrum Cello ensemble
|
15.01.2023$Het is Tijd, Concert om te Verbinden en de ogen van politiek te openen /
Immanuelkerk/ 12.00, Groningen / With Mare Nostrum Cello quartet 
|

7.02.2023$Chamber music Concert with Mare Nostrum Cello quartet / Martini Plaza, Groningen
|

17.02.2023$Symphonic Concert with HSO ( Hanze Symphonic Orchestra) Atlas Theater, Emmen
|

19.02.2023$Symphonic concert with  HSO ( Hanze Symphonic Orchestra) / SPOT Groningen
|
20.02.2023$Symphonic concert with HSO( Hanze Symphonic Orchestra)/  Die Glocke, Bremer Konzerthaus, Bremen, Germany`
.split("|").map(e => e.trim()).map(event => event.split("$"));

const EventsPage = observer(() => {
  return (
    <Container
      maxWidth="xl"
      style={{
        position: "absolute",
        top: 0, bottom: 0,
        left: 0, right: 0
      }}
    >
      <List>
        {events.map( event =>
          <ListItem key={event.join(" ")}>
            <ListItemIcon>
              <RadioButtonUncheckedIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText
              primary={event[1]}
              secondary={event[0]}
            />
          </ListItem>,
        )}
      </List>
    </Container>
  )
});

export default EventsPage