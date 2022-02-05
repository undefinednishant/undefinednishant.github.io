import Button from "./common/Button";
import {
  StyledHeader,
  Flex,
  Container,
  ProfileAvatar,
  Avatar,
  Box,
} from "./styled/Core.styled";

const Header = ({ profile }) => {
  const clickHandler = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <StyledHeader>
        <Container padding="10px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            margin="10px"
            padding="20px"
          >
            <ProfileAvatar>
              <Flex
                direction="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Avatar src={profile.avatar_url} />
                <Button
                  margin="10px"
                  onClick={() => clickHandler(profile.html_url)}
                >
                  Github
                </Button>
              </Flex>
            </ProfileAvatar>

            <Box width="600px">
              <h1>Hi, I'm {profile.name},</h1>
              <h3>{profile.bio}</h3>
              <p>{profile.intro}</p>
            </Box>
          </Flex>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
