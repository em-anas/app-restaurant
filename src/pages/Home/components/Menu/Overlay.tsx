import React from "react";
import {
  Box,
  Card,
  Container,
  Heading3,
  IconButton,
  Section,
  SectionHeader,
  SmallText,
} from "../../../../components";
import { ForkKnifeIcon, HeartIcon } from "../../../../assets";
import {
  OverlayContainer,
  OverlayContent,
  OverlayHeader,
  OverlayGrid,
} from "./styles";
import { useFavoritesOverlay } from "../../../../hooks";

const FavoritesOverlay: React.FC = () => {
  const {
    favorites,
    showFavorites,
    toggleFavoritesOverlay,
    removeFromFavorites,
  } = useFavoritesOverlay();

  // Don't render anything if there are no favorites or the overlay is hidden
  if (!showFavorites) {
    return null;
  }

  return (
    <OverlayContainer>
      <OverlayContent>
        <Section id="favorites" padding="md">
          <Container>
            <OverlayHeader>
              <SectionHeader
                title="Your Favorites"
                subTitle={`${favorites.length} item${
                  favorites.length !== 1 ? "s" : ""
                }`}
              />
              <IconButton
                icon={<ForkKnifeIcon width={20} height={20} />}
                onClick={toggleFavoritesOverlay}
                label="Close"
              />
            </OverlayHeader>

            {favorites.length === 0 ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <HeartIcon
                  width={48}
                  height={48}
                  color="var(--color-gray-300)"
                />
                <SmallText>No favorites yet</SmallText>
                <SmallText>
                  Click on menu items to add them to your favorites
                </SmallText>
              </div>
            ) : (
              <OverlayGrid>
                {favorites.map((item) => (
                  <Box key={item.id}>
                    <Card radius="md">
                      <Heading3>{item.name}</Heading3>
                      <SmallText>
                        {item.description.substring(0, 100)}...
                      </SmallText>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "var(--spacing-md)",
                        }}
                      >
                        <span>{item.price}</span>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromFavorites(item);
                          }}
                          icon={
                            <ForkKnifeIcon
                              fill={"var(--color-secondary)"}
                              width={16}
                              height={16}
                            />
                          }
                          label="Remove"
                        />
                      </div>
                    </Card>
                  </Box>
                ))}
              </OverlayGrid>
            )}
          </Container>
        </Section>
      </OverlayContent>
    </OverlayContainer>
  );
};

export default FavoritesOverlay;
