// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Swiper as SwiperClass } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Img from '../../src/components/public-embeds/Img'
import useIsBig from '../../src/hooks/usIsBig'

import { useRef, useState } from 'react'
import Zoom from '@mui/material/Zoom'
import Fab from '@mui/material/Fab'
import CloseIcon from '@mui/icons-material/Close'
import { Fade } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { getStaticPaths, makeStaticProps } from '../../src/lib/getStatic'
import { transform } from 'typescript'

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }

const images: {
  alt?: string;
  src: string;
  thumb?: string;
}[] = [
  {
    src: "/images/headshot-light.jpg"
  },
  {
    src: "/images/headshot-dark.jpg"
  },
  {
    src: "/images/cello-duo1.jpg"
  },
  {
    src: "/images/cello-solo1.jpg"
  },
  {
    src: "/images/Mare Nostrum, Cello quartet.jpeg"
  },
  {
    src: "/images/Persephone, Abducted.jpeg",
    thumb: "/images/Persephone, Abducted - thumb.jpeg"
  },
  {
    src: "/images/recital.jpg"
  },
  {
    src: "/images/standing1.jpg"
  },
  {
    src: "/images/standing2.jpg"
  },
  {
    src: "/images/standing3.jpg"
  }
];

const PhotosPage = observer(() => {

  const big = useIsBig();
  const size = big ? 250 : 125;

  const [open, setOpen] = useState(false);

  const swiper = useRef<SwiperClass>();
  const slide = useRef(0);

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
          justifyContent: "center",
        }}
      >
        {images.map((item, i) => (
          <Box
            key={item.src}
            sx={{
              overflow: "hidden",
              lineHeight: 0,
              "--img-scale": 1,
    
              "&:hover": {
                "--img-scale": 1.1,
                // outline: theme => `1px ${theme.palette.primary.main} solid`
              }
            }}
          >
            <Img
              src={item.thumb ?? item.src}
              loading="lazy"

              onClick={() => {
                setOpen(true);
                slide.current = i;
                if (swiper.current) swiper.current.slideTo(i + 1, 0, false);
              }}

              style={{
                width: size,
                height: size,
                objectFit: "cover",
                flexGrow: 1,
                cursor: "pointer",
                transform: "scale(var(--img-scale))",
                transition: "transform 1s"
              }}
            />
          </Box>
        ))}
      </Box>
      <Fade
        in={open}
        timeout={111}
      >
        <Box
          sx={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backdropFilter: "blur(10px)",
            backgroundColor: "#0009"
          }}
        >
          <Swiper
            modules={[Pagination, A11y]}
            a11y={{
              prevSlideMessage: 'Previous slide',
              nextSlideMessage: 'Next slide',
            }}
            slidesPerView={1}
            onSwiper={s => swiper.current = s}
            initialSlide={slide.current}
            pagination={{ dynamicBullets: true, clickable: true }}
            loop
          >
            {images.map(item => {
              return <SwiperSlide
                key={item.src}
              >
                <Img
                  src={item.src}
                  loading="lazy"

                  style={{
                    width: "100vw",
                    height: "100vh",
                    objectFit: "contain"
                  }}
                />
              </SwiperSlide>
            })}
          </Swiper>
        </Box>
      </Fade>
      <Box
        sx={{
          position: "fixed",
          right: "10px",
          top: "10px"
        }}
      >
        <Zoom
          in={open}
          timeout={111}
          unmountOnExit
        >
          <Fab
            onClick={() => setOpen(false)}
            sx={{
              backgroundColor: "#0005",
              color: "white",

              "&:hover": {
                backgroundColor: "#0007",
                color: "white",
              }
            }}
          >
            <CloseIcon />
          </Fab>
        </Zoom>
      </Box>
    </Container>
  );
});

export default PhotosPage