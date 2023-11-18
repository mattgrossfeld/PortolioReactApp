import Image from 'next/image'
import styles from './page.module.css'
import ResponsiveAppBar from './ResponsiveAppBar'
import { Card, CardContent, CardHeader, Drawer } from '@mui/material'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DrawerComponent from './Drawer';
import CardComponent from './Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function Home() {
  return (
    <main>
      <div style={{display: 'flex'}}>
        {/* <ResponsiveAppBar/> */}
        <DrawerComponent />
        <CardComponent />
      </div>
    </main>
    
  )
}
