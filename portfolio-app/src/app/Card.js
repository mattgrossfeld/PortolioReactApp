import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const cardStyle = {
    marginLeft: '300px',
    marginTop: '25px',
    marginBottom: '50px',
    width: '30%'
  };

  


const CardComponent = () => {
    
  return (
    <Card sx={cardStyle} raised='true'> 
      <CardContent>
        <Typography variant="h4" component="div" className="cardTitle">
          About Me
        </Typography>
        <Typography variant="body" color="text.secondary">
          {/* Your random text goes here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
