import { Avatar, AvatarGroup, Badge, Container, Stack } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Container>
      <Stack spacing={2} marginTop={2}>
        <Stack spacing={1} direction="row">
          <Avatar sx={{ bgcolor: "primary.light" }}>BA</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        </Stack>

        <Stack spacing={1} direction="row">
          <AvatarGroup>
            <Avatar sx={{ bgcolor: "primary.light" }}>BA</Avatar>
            <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
            <Avatar
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="userPic"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/men/51.jpg"
              alt="userPic"
            />
          </AvatarGroup>
        </Stack>

        <Stack spacing={1} direction="row">
          <AvatarGroup max={10}>
            <Avatar sx={{ bgcolor: "primary.light" }}>BA</Avatar>
            <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
            <Badge variant="dot" color="primary">
              <Avatar
                src="https://randomuser.me/api/portraits/women/72.jpg"
                alt="userPic"
              />
            </Badge>
            <Avatar
              src="https://randomuser.me/api/portraits/men/50.jpg"
              alt="userPic"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/women/70.jpg"
              alt="userPic"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/men/56.jpg"
              alt="userPic"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/women/74.jpg"
              alt="userPic"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/men/53.jpg"
              alt="userPic"
            />
          </AvatarGroup>
        </Stack>
      </Stack>
    </Container>
  );
};
