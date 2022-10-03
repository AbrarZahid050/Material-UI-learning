import { Mail } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const MuiList = () => {
  return (
    <Container>
      <Box marginTop={2} sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="List item 1" secondary="Secondary test" />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="List item 2" secondary="Secondary test" />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="List item 3" secondary="Secondary test" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};
