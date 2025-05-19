import React from "react";
import {
  AvatarImg,
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Input,
  Section,
  SectionHeader,
  SmallText,
} from "../../../../components";
import {
  CategoryTabsContainer,
  EmptyState,
  LoadingSpinner,
  SearchContainer,
} from "./styles";
import {
  ChefIcon,
  CupIcon,
  ForkKnifeIcon,
  MailIcon,
  SearchIcon,
  HeartIcon,
} from "../../../../assets";
import { useMenu } from "../../../../hooks";

// Categories data
const categories = [
  {
    id: "breakfast",
    name: "Breakfast",
    icon: <CupIcon width={20} height={20} />,
  },
  {
    id: "dessert",
    name: "Dessert",
    icon: <ForkKnifeIcon width={20} height={20} />,
  },
  {
    id: "seafood",
    name: "Seafood",
    icon: <ChefIcon width={20} height={20} />,
  },
  {
    id: "canadian",
    name: "Canadian",
    icon: <MailIcon width={20} height={20} />,
  },
];

export const Menu: React.FC = () => {
  const {
    selectedCategory,
    menuItems,
    searchQuery,
    isLoading,
    setHoveredItem,
    handleCategoryChange,
    handleSearch,
    toggleFavorite,
    isFavorite,
  } = useMenu();

  return (
    <>
      <Section id="menu">
        <Container>
          <SectionHeader title="Food Menu" subTitle="Most Popular Items" />

          <CategoryTabsContainer>
            {categories.map((cat) => (
              <IconButton
                key={cat.id}
                label={cat.name}
                icon={cat.icon}
                active={selectedCategory === cat.name}
                onClick={() => handleCategoryChange(cat.name)}
              />
            ))}
          </CategoryTabsContainer>

          <SearchContainer>
            <Input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearch(e.target.value)
              }
            />
            <SearchIcon />
          </SearchContainer>

          {isLoading ? (
            <LoadingSpinner />
          ) : menuItems.length === 0 ? (
            <EmptyState>
              <SmallText>No items found</SmallText>
              <SmallText>Try a different search term or category</SmallText>
            </EmptyState>
          ) : (
            <Grid columns={2} spacing="lg">
              {menuItems.map((item) => (
                <Box key={item.id}>
                  <Card
                    align="center"
                    radius="md"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => toggleFavorite(item)}
                    bgColor={`var(--color-${
                      isFavorite(item.id) ? "primary" : "white"
                    })`}
                  >
                    <AvatarImg src={item.image} />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <SmallText>{item.price}</SmallText>

                    {/* Add a heart icon to indicate favorite status */}
                    {isFavorite(item.id) && (
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                        }}
                      >
                        <HeartIcon
                          width={20}
                          height={20}
                          color="var(--color-danger)"
                        />
                      </div>
                    )}
                  </Card>
                </Box>
              ))}
            </Grid>
          )}
        </Container>
      </Section>
    </>
  );
};
