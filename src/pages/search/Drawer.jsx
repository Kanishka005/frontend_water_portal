import { Drawer as MuiDrawer, Box, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from 'prop-types'; // Import PropTypes

const RoundedDrawer = styled(MuiDrawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: theme.shape.borderRadius * 2, // Adjust the multiplier for more or less roundness
  },
}));

const Drawer = ({ drawerOpen, setDrawerOpen, navigate, showMap, setShowMap }) => (
  <RoundedDrawer
    anchor="left"
    open={drawerOpen}
    onClose={() => setDrawerOpen(false)}
  >
    <Box sx={{ width: 250, mt: 2 }}>
      <List>
        <ListItem button onClick={() => navigate("/")}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setShowMap(!showMap);
            setDrawerOpen(false);
          }}
        >
          <ListItemText primary={showMap ? "List View" : "Map View"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            navigate("/content");
            setDrawerOpen(false);
          }}
        >
          <ListItemText primary="Content Page" />
        </ListItem>
      </List>
    </Box>
  </RoundedDrawer>
);

// Define prop types for the component
Drawer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  setDrawerOpen: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  showMap: PropTypes.bool.isRequired,
  setShowMap: PropTypes.func.isRequired,
};

export default Drawer;
