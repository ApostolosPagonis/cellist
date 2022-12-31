import Box from "@mui/material/Box"
import Fab from "@mui/material/Fab"
import Fade from "@mui/material/Fade"
import Zoom from "@mui/material/Zoom"
import { observer } from "mobx-react-lite"
import store from "../store/store"
import CloseIcon from '@mui/icons-material/Close'
import MinimizeIcon from '@mui/icons-material/Minimize';
import ExpandIcon from '@mui/icons-material/Expand';
import { useEffect, useState } from "react"
import { runInAction } from "mobx"
import Tooltip, { TooltipProps } from "@mui/material/Tooltip"
import { styled } from "@mui/material/styles"

const VideoPlayer = observer(() => {
  const [mini, setMini] = useState(false);

  useEffect(() => {
    setMini(false);
  }, [store.video?.src, store.videoMaximizeTrigger]);

  return <>
    <Fade
      in={!!store.video && !mini}
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
        {store.video && (
          store.video.youtube ? <iframe id="video"
            src={store.youtubeEmbed + "?autoplay=1"}
            style={{
              border: "0px",
              width: "90vw",
              height: "90vh",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen /> : undefined
        )}
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
        in={!!store.video && !mini}
        timeout={111}
        unmountOnExit
      >
        <Fab
          onClick={() => runInAction(() => store.video = undefined)}
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
    <Box
      sx={{
        position: "fixed",
        right: "76px",
        top: "10px"
      }}
    >
      <Zoom
        in={!!store.video && !mini}
        timeout={111}
        unmountOnExit
      >
        <Fab
          onClick={() => setMini(true)}
          sx={{
            backgroundColor: "#0005",
            color: "white",

            "&:hover": {
              backgroundColor: "#0007",
              color: "white",
            }
          }}
        >
          <MinimizeIcon />
        </Fab>
      </Zoom>
    </Box>
    <Box
      sx={{
        position: "fixed",
        left: "10px",
        bottom: "10px"
      }}
    >
      <Zoom
        in={mini}
        timeout={111}
        unmountOnExit
      >
        <Fab
          onClick={() => setMini(false)}
          sx={{
            backgroundColor: "#0005",
            color: "white",

            "&:hover": {
              backgroundColor: "#0007",
              color: "white",
            }
          }}
        >
          <ExpandIcon />
        </Fab>
      </Zoom>
    </Box>
  </>
})

export default VideoPlayer