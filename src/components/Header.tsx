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

// TODO: highlight selected page (maybe in small screen show page instead of logo, except home)
const pages: ('home'|'bio'|'photos'|'videos'|'events'|'contact')[] = ['home', 'bio', 'photos', 'videos', 'events', 'contact'];
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

const Header = observer(() => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

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
          <Typography
            variant="h6"
            component="a"
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
            {translate("logo")}
          </Typography>

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
              {/* TODO: figure out why translation didn't work and now works here */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <LocaleLink href={"/" + page}>
                    <Typography textAlign="center">{translate(page)}</Typography>
                  </LocaleLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* TODO: Add cello icon the one downloaded or https://www.svgrepo.com/svg/72863/cello */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            component="a"
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
            {translate("logo")}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <LocaleLink href={"/" + page}>
                  {translate(page)}
                </LocaleLink>
              </Button>
            ))}
          </Box>

          <Box>
            <SocMed />
            <div style={{display: "grid", justifyItems: "right"}}>
              <Tooltip title="Open languages">
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
            </div>
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
              {/* TODO: Just change language without changing page */}
              {languages.filter(setting => setting.locale !== store.lang).map((setting) => (
                <MenuItem key={setting.locale} onClick={() => {
                  handleCloseUserMenu()
                }}>
                  <Typography textAlign="center" sx={{fontSize: "29px"}}>
                    <LocaleLink locale={setting.locale} href="">
                      {setting.label}
                    </LocaleLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
})

export default Header