import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Img from '../../src/components/public-embeds/Img'
import { Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import store from '../../src/store/store'
import { getStaticPaths, makeStaticProps } from '../../src/lib/getStatic'
import { runInAction } from 'mobx'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useEffect } from 'react'

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

function getVideoID(v?: VideoData) {
  if (!v) return undefined;
  if (v.youtube) return v.src + "y"
  return v.src + "l"
}

function areVideosEqual(v1?: VideoData, v2?: VideoData) {
  return getVideoID(v1) === getVideoID(v2);
}

type VideoData = Exclude<typeof store.video, undefined>;
const videos: VideoData[] = [
  {
    src: "-prW5raJJWM",
    youtube: true,
    title: "F. Grutzmacher - Consecration Hymn Op. 65"
  },
  {
    src: "BiSUqgMaWVQ",
    youtube: true
  },
  {
    src: "ePwDG_81QZc",
    youtube: true,
    title: "Jasmin Kalathaki, Tribal Fusion Bellydance, Sail Cello cover"
  },
  {
    // src: "https://www.rtvdrenthe.nl/tv/programma/kerst-met-magnificat/253?fbclid=IwAR0kYDmDozGG2ShYrD0q_h_nmds8IrB3bAT6LxY6l0xAlKFnMeZz_O7UhJM",
    src: "https://d3vbm02trh7zmp.cloudfront.net/media/magn20221224-hhuitz.mp4",
    title: "Kerst met Magnificat",
    thumb: "https://i.regiogroei.cloud/fn_checksum,cd5bd72759d5ee52b27e558e1c76f483/1104x620/43776d0a-bc3a-3c8f-9224-ce010826539b.jpg?ts=1674751457124"
  }
];

const toYoutubeThumbnail = (youtubeID: string) => {
  return `https://img.youtube.com/vi/${youtubeID}/hqdefault.jpg`
}

const VideosPage = observer(() => {

  const width = 320;
  const height = 180;

  const handlePlay = (item: VideoData, isSelected: boolean) => {
    runInAction(() => {
      if (item && isSelected) {
        store.triggerMaximize();
        return;
      }

      store.video = item;
    });
  }

  return (
    <Container
      maxWidth="xl"
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: "24px",
          gap: "7px",
          justifyContent: "space-around"
        }}
      >
        {videos.map((item, i) => {
          let src: string = "";
          if (item.thumb) {
            src = item.thumb
          } else if (item.youtube) {
            src = toYoutubeThumbnail(item.src)
          }
          const isSelected = areVideosEqual(item, store.video);
          return <Box
            key={src + (item.youtube ? "y" : "l")}
            sx={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              lineHeight: 0,
              cursor: "pointer",

              "--img-scale": 1,
    
              "&:hover": {
                "--img-scale": 1.1,
                // outline: theme => `1px ${theme.palette.primary.main} solid`
              },
              "&:focus": {
                "--img-scale": 1.1,
                // outline: theme => `1px ${theme.palette.primary.main} solid`
              }
            }}
            tabIndex={0}
    
            onKeyDown={e => {
              if (e.code === "Enter") {
                handlePlay(item, isSelected);
              }
            }}
          >
            <Img
              src={src}
              loading="lazy"

              onClick={() => handlePlay(item, isSelected)}

              style={{
                width, height,
                objectFit: "cover",
                transform: "scale(var(--img-scale))",
                transition: "transform 1s"
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: 0, right: 0,
                top: 0, bottom: 0,
                display: "grid",
                alignItems: isSelected ? "stretch" : "center",
                pointerEvents: "none",
                overflow: "hidden"
              }}
            >
              <Box
                sx={{
                  backdropFilter: "blur(5px)",
                  backgroundColor: "#000a",
                  display: "grid",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                <Typography>
                  {item.title}
                </Typography>
              </Box>
              {
                isSelected ? <Box
                  sx={{
                    position: "absolute",
                    bottom: "5px",
                    right: "5px"
                  }}
                >
                  <PlayArrowIcon />
                </Box> : undefined
              }
            </Box>
          </Box>
        })}
      </Box>
    </Container>
  );
});

export default VideosPage