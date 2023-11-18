import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const cardStyle = {
    marginLeft: '300px',
    marginTop: '50px',
    marginBottom: '50px',
    width: '30%'
  };

  
const cards = [
  {title: "About Me", id: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  {title: "Resume", id: 2, description: "Here is my resume and a downloadable PDF of it for easy access."},
  {title: "Projects", id: 3, description: "Here is a list of all side projects I am working on. "}  
]; 

const cardList =     <div style={{display: 'flex', flexDirection: 'column'}}>
{cards.map(card =>
    <Card key={card.id} sx={cardStyle} raised='true'> 
      <CardContent>
        <Typography variant="h4" component="div" className="cardTitle">
          {card.title}
        </Typography>
        <Typography variant="body" color="text.secondary">
          {card.description}
        </Typography>
      </CardContent>
    </Card>)}</div>
const CardComponent = () => {
    
  return (
        <>{cardList}</>
  );
};

export default CardComponent;
