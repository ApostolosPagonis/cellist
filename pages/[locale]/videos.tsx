import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Img from '../../src/components/public-embeds/Img'
import { Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import store from '../../src/store/store'
import { getStaticPaths, makeStaticProps } from '../../src/lib/getStatic'
import { runInAction } from 'mobx'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
    src: "aeWyp2vXxqA",
    youtube: true
  },
  {
    src: "OF8WuVXyvNQ",
    youtube: true,
    title: "Bach - Concerto for Two Violins in D Minor BWV1043 - Mov 3/3"
  },
  {
    src: "Zl9FTlKK1e0",
    youtube: true,
    title: "Giuseppe Tartini - Devil's Trill Sonata"
  },
  {
    src: "/videos/sample-5s.mp4",
    thumb: "/videos/sample-5s_thumb.jpg",
    title: "sample local video"
  },
  {
    src: "/videos/broken.mp4",
    title: "broken video local"
  },
  {
    src: "invalid",
    youtube: true,
    title: "broken video youtube"
  }
];

const toYoutubeThumbnail = (youtubeID: string) => {
  return `https://img.youtube.com/vi/${youtubeID}/hqdefault.jpg`
}

const PhotosPage = observer(() => {

  const width = 320;
  const height = 180;

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
            style={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              lineHeight: 0
            }}
          >
            <Img
              src={src}
              loading="lazy"

              onClick={() => {
                runInAction(() => {
                  if (item && isSelected) {
                    // store.video = undefined;
                    store.triggerMaximize();
                    return;
                  }
  
                  store.video = item;
                });
              }}

              style={{
                width, height,
                objectFit: "cover"
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

export default PhotosPage