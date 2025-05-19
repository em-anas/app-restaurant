import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  Logo,
  LogoLink,
  Navigation,
  NavigationList,
  NavigationItem,
  MobileMenuToggle,
  Overlay,
  FavoritesButtonContainer,
} from "./styles";
import type { HeaderProps, NavigationItem as NavItem } from "./types";
import {
  useScreenSize,
  useScroll,
  useToggle,
  useFavoritesOverlay,
} from "../../hooks";
import { HamburgerButton, LinkButton, NavButton, IconButton } from "../common";
import { ROUTES } from "../../constants";
import { HeartIcon } from "../../assets";

export const Header: React.FC<HeaderProps> = ({
  logo,
  navigationItems = [
    { label: "Home", path: "/" },
    { label: "Contact", path: "/contact" },
  ],
}) => {
  const [menuOpen, { toggle: toggleMenu, setFalse: closeMenu }] =
    useToggle(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToElement } = useScroll();
  const { toggleFavoritesOverlay, hasFavorites } = useFavoritesOverlay();

  const { isMobile, isSmallTablet } = useScreenSize();
  const showMobileMenu = isMobile || isSmallTablet;
  const isHomePage = location.pathname === ROUTES.HOME;

  const isActiveRoute = (path: string): boolean => {
    if (path === ROUTES.HOME) {
      return location.pathname === ROUTES.HOME;
    }
    return location.pathname.startsWith(path);
  };

  // Handle navigation item click
  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(item.path);
    if (menuOpen) closeMenu();
  };

  // Handle CTA button click
  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isHomePage) {
      navigate(ROUTES.HOME);
    }
    setTimeout(
      () => {
        scrollToElement("reservation");
      },
      isHomePage ? 0 : 300
    );

    if (menuOpen) closeMenu();
  };

  return (
    <>
      <HeaderContainer>
        <Logo>
          <LogoLink as={Link} to="/">
            {logo}
          </LogoLink>
        </Logo>

        {showMobileMenu ? (
          <>
            <MobileMenuToggle>
              {hasFavorites && isHomePage && (
                <FavoritesButtonContainer>
                  <IconButton
                    icon={<HeartIcon width={20} height={20} />}
                    onClick={toggleFavoritesOverlay}
                  />
                </FavoritesButtonContainer>
              )}
              <HamburgerButton isOpen={menuOpen} onClick={toggleMenu} />
            </MobileMenuToggle>

            {menuOpen && (
              <Navigation isMobile>
                <NavigationList isMobile>
                  {navigationItems.map((item, index) => (
                    <NavigationItem key={index} isMobile>
                      <LinkButton
                        active={isActiveRoute(item.path)}
                        onClick={(e) => handleNavClick(item, e)}
                      >
                        {item.label}
                      </LinkButton>
                    </NavigationItem>
                  ))}

                  <NavigationItem>
                    <NavButton onClick={handleCTAClick}>Book a Table</NavButton>
                  </NavigationItem>
                </NavigationList>
              </Navigation>
            )}
          </>
        ) : (
          <Navigation>
            <NavigationList>
              {navigationItems.map((item, index) => (
                <NavigationItem key={index}>
                  <LinkButton
                    size="large"
                    active={isActiveRoute(item.path)}
                    onClick={(e) => handleNavClick(item, e)}
                  >
                    {item.label}
                  </LinkButton>
                </NavigationItem>
              ))}

              {hasFavorites && isHomePage && (
                <NavigationItem>
                  <IconButton
                    icon={<HeartIcon width={20} height={20} />}
                    onClick={toggleFavoritesOverlay}
                  />
                </NavigationItem>
              )}

              <NavigationItem>
                <NavButton onClick={handleCTAClick}>Book a Table</NavButton>
              </NavigationItem>
            </NavigationList>
          </Navigation>
        )}
      </HeaderContainer>

      {showMobileMenu && menuOpen && (
        <Overlay visible={menuOpen} onClick={closeMenu} />
      )}
    </>
  );
};
