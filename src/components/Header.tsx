import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
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

// TODO: highlight selected page (maybe in small screen show page instead of logo, except home)
const pages: Page[] = ['home', 'bio', 'photos', 'videos', 'events', 'contact'];
const languages = [{
  label: getUnicodeFlagIcon("GR"),
  locale: "el"
}, {
  label: getUnicodeFlagIcon("GB"),
  locale: "en"
}];

const SocMed = () => {
  // TODO: Flex stretches icon buttons
  return <Box sx={{display: "flex"}}>
    <IconButton>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        style={{color: "inherit", textDecoration: "inherit"}}
        href="https://www.linkedin.com/in/apostolos-pagonis-66a1b2b9/"
      >
        <LinkedInIcon />
      </Link>
    </IconButton>
    <IconButton>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        style={{color: "inherit", textDecoration: "inherit"}}
        href="https://www.facebook.com/apostolos.pagonis/"
      >
        <FacebookIcon />
      </Link>
    </IconButton>
    <IconButton>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        style={{color: "inherit", textDecoration: "inherit"}}
        href="https://www.instagram.com/apostolospagonis/"
      >
        <InstagramIcon />
      </Link>
    </IconButton>
  </Box>
}

const PageLink = (props: {
  children: React.ReactNode,
  page: Page
}) => {
  let href: string;
  if (props.page === "home") {
    href = "/"
  } else {
    href = "/" + props.page
  }
  return <LocaleLink href={href}>
    {props.children}
  </LocaleLink>
}

const Header = observer(() => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const currentPage = usePage();
  const currentPath = usePath();

  console.log(currentPath);

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
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

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
            }}
          >
            <PageLink page="home">
              {translate("logo")}
            </PageLink>
          </Typography>

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

          {/* TODO: Add cello icon the one downloaded or https://www.svgrepo.com/svg/72863/cello */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
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
              textAlign: "center"
            }}
          >
            <PageLink page="home">
              {translate("logo")}
            </PageLink>
          </Typography>

          {/* Big screen menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <PageLink page={page} key={page}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block'}}
                  variant={currentPage === page ? "outlined" : undefined}
                >
                  {translate(page)}
                </Button>
              </PageLink>
            ))}
          </Box>

          {/* Lang and socials */}
          <Box>
            <SocMed />
            <Box style={{display: "grid", justifyItems: "right"}}>
              <Tooltip title={translate("changeLanguage")}>
                <Button onClick={handleOpenUserMenu} sx={{
                  p: 0,
                  fontSize: "30px"
                }}>
                  {
                    store.lang === "el" ?
                    getUnicodeFlagIcon("GR") :
                    getUnicodeFlagIcon("GB")
                  }
                </Button>
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