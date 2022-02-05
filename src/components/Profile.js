import { useEffect, useState } from "react";
import Header from "./Header";
import {
  Avatar,
  Badge,
  Box,
  Container,
  Flex,
  Link,
} from "./styled/Core.styled";
import { me } from "../core/data/profile";
import ChipEntity from "./common/ChipEntity";
import Footer from "./Footer";

const Profile = () => {
  const [profile, setProfile] = useState(me);

  const getProfile = () => {
    fetch("https://api.github.com/users/undefinednishant")
      .then((res) => res.json())
      .then((result) => {
        console.log("res ", result);
        const completeProfile = { ...result, ...me };

        setProfile(completeProfile);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <Header profile={profile} />

      <Container padding="2rem">
        <Flex>
          <Box width="500px" dividerRight={true}>
            <h3>Skills </h3>
            <Flex wrap="wrap">
              {profile.skills &&
                profile.skills.map((skill, index) => (
                  <ChipEntity key={index} link={skill.link}>
                    {skill.title}
                  </ChipEntity>
                ))}
            </Flex>
          </Box>

          <Box width="500px">
            <h3>Linkedin </h3>

            {profile.badges &&
              profile.badges.map((badge, index) => (
                <Link key={index} href={badge.url} target="_blank">
                  <Avatar src={badge.avatar} margin="5px" />
                </Link>
              ))}
          </Box>
        </Flex>
      </Container>

      <Footer />
    </>
  );
};

export default Profile;
