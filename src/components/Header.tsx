import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import translate from '../translation';
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import LocaleLink from "./LocaleLink"
import store from '../store/store';
import { observer } from 'mobx-react-lite';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import usePage, { Page } from '../hooks/usePage';
import usePath from '../hooks/usePath';
import { Tab, Tabs } from '@mui/material';
import useInternalNavigate from '../hooks/useInternalNavigate';
// import TranslateIcon from '@mui/icons-material/Translate';
// import LanguageIcon from '@mui/icons-material/Language';
import CelloSvg1 from './svg/CelloSvg1';

const pages: Page[] = ['home', 'bio', 'photos', 'videos', 'events', 'contact'];
const languages = [{
  label: getUnicodeFlagIcon("GR"),
  locale: "el"
}, {
  label: getUnicodeFlagIcon("GB"),
  locale: "en"
}];

const SocMed = () => {
  return <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center"}}>
    <Link
      target="_blank"
      rel="noopener noreferrer"
      style={{color: "inherit", textDecoration: "inherit"}}
      href="https://www.linkedin.com/in/apostolos-pagonis-66a1b2b9/"
    >
      <IconButton color='primary' sx={{color: "white"}}>
        <LinkedInIcon />
      </IconButton>
    </Link>
    <Link
      target="_blank"
      rel="noopener noreferrer"
      style={{color: "inherit", textDecoration: "inherit"}}
      href="https://www.facebook.com/apostolos.pagonis/"
    >
      <IconButton color='primary' sx={{color: "white"}}>
        <FacebookIcon />
      </IconButton>
    </Link>
    <Link
      target="_blank"
      rel="noopener noreferrer"
      style={{color: "inherit", textDecoration: "inherit"}}
      href="https://www.instagram.com/apostolospagonis/"
    >
      <IconButton color='primary' sx={{color: "white"}}>
        <InstagramIcon />
      </IconButton>
    </Link>
  </Box>
}

const pageToHref = (p: Page) => {
  if (p === "home") {
    return "/"
  } else {
    return "/" + p
  }
}

const PageLink = (props: {
  children: React.ReactNode,
  page: Page,
  style?: React.CSSProperties
}) => {
  return <LocaleLink href={pageToHref(props.page)} style={props.style}>
    {props.children}
  </LocaleLink>
}

const Header = observer(() => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const currentPage = usePage();
  const currentPath = usePath();

  const navigate = useInternalNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Small screen menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <PageLink key={page} page={page}>
                  <MenuItem selected={page === currentPage} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{translate(page)}</Typography>
                  </MenuItem>
                </PageLink>
              ))}
            </Menu>
          </Box>

          {/* TODO: Better favicon (also make it cello icon(?)) */}
          {/* TODO: Cello overlaps stuff and screen edge. May place it elsewhere? Can be put in |'s position, or try to push text to the right. */}
          {/* TODO: check https://www.svgrepo.com/svg/72863/cello */}
          {/* Small screen logo */}
          <Typography
            variant="h5"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              textAlign: "center",

              position: "relative"
            }}
          >
            <CelloSvg1 wrapperStyle={{
              position: "absolute",
              left: 0,
              width: 32,
              height: 32,
              transform: "translateX(-100%)"
            }}/>
            <PageLink page="home">
              {translate("logo")}
            </PageLink>
          </Typography>

          {/* Big screen logo */}
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',

              position: "relative"
            }}
          >
            <PageLink page="home">
              <CelloSvg1 wrapperStyle={{
                position: "absolute",
                left: 0,
                width: 32,
                height: 32,
                transform: "translateX(-100%)"
              }}/>
              {translate("logo")}
            </PageLink>
          </Typography>

          {/* Big screen menu */}
          {/* With buttons */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              // <PageLink page={page} key={page}>
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate({href: pageToHref(page)})
                  }}
                  sx={{ my: 2, color: 'white', display: 'block'}}
                  variant={currentPage === page ? "outlined" : undefined}
                >
                  {translate(page)}
                </Button>
              // </PageLink>
            ))}
          </Box> */}
          {/* With tabs */}
          {/* DISCUSS: Do we like tabs? They work better in small screens. Also check out tab customization options. */}
          <Box sx={{ alignSelf: "stretch", flexGrow: 1, display: {
            xs: 'none',
            md: 'flex',
            minWidth: 0
          }}}
          >
            <Tabs
              value={currentPage ?? false}
              sx={{
                minHeight: "100%",
                width: "100%"
              }}
              variant="scrollable"
              scrollButtons="auto"
            >
              {pages.map((page) => (
                <Tab
                  value={page}
                  key={page}
                  onClick={() => currentPage !== page && navigate({href: pageToHref(page)})}
                  label={translate(page)}

                  sx={{
                    ":hover": {
                      // backgroundColor: theme => theme.palette.primary.dark
                    }
                  }}
                />
              ))}
            </Tabs>
          </Box>

          <SocMed />
          <Box>
            {/* <SocMed /> */}
            <Box style={{display: "grid", justifyItems: "right"}}>
              <Tooltip title={translate("changeLanguage")}>
                {/* <IconButton onClick={handleOpenUserMenu} color='primary' sx={{color: "white"}}>
                  <LanguageIcon />
                  <TranslateIcon />
                </IconButton> */}
                <IconButton onClick={handleOpenUserMenu} color='primary' sx={{color: "white", lineHeight: 1}}>
                  {
                    store.lang === "el" ?
                    getUnicodeFlagIcon("GR") :
                    getUnicodeFlagIcon("GB")
                  }
                </IconButton>
                {/* <Button onClick={handleOpenUserMenu} sx={{
                  p: 0,
                  fontSize: "30px"
                }}>
                  {
                    store.lang === "el" ?
                    getUnicodeFlagIcon("GR") :
                    getUnicodeFlagIcon("GB")
                  }
                </Button> */}
              </Tooltip>
            </Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {languages.filter(setting => setting.locale !== store.lang).map((setting) => (
                <LocaleLink key={setting.locale} locale={setting.locale} href={currentPath ?? ""}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" sx={{
                      fontSize: "29px"
                      }}>
                      {setting.label}
                    </Typography>
                  </MenuItem>
                </LocaleLink>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
})

export default Header