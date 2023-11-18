import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
const drawerStyle = {
  backgroundColor: '#286C27', // Set the desired background color
  color: 'white', // Set the text color
};

const DrawerComponent = () => {
  return (
    <Drawer variant="permanent" anchor="left" PaperProps={{sx: {
      backgroundColor: "#286C27",
      color: "white",
      width: '10%'
    }}}>
      <List>
        {['About Matthew', 'Resume', 'Projects'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText>
              <Typography variant="body" sx={{color: 'white', fontWeight: 'bold', fontSize: '20px'}}>
                {text}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerComponent;