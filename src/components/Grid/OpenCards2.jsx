 import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Tabs,
  Tab,
  Grid,
} from "material-ui";
import { BugReport, Code, Cloud } from "@material-ui/icons";
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "@material-ui/icons";


import {
  StatsCard,
  ChartCard,
  RegularCard,
  Table,
  ItemGrid,
  Button,
  ProfileCard,
  Tasks,
} from "components";
import tasksCardStyle from "assets/jss/material-dashboard-react/tasksCardStyle";


import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaApple from 'react-icons/lib/fa/apple';
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaTumblrSquare from 'react-icons/lib/fa/tumblr-square';
import FaTwitch from 'react-icons/lib/fa/twitch';
import FaSnapchatSquare from 'react-icons/lib/fa/snapchat-square';


class OpenCards2 extends React.Component{

  render(){
    return(

      <Grid container>
            <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={FaTwitterSquare}
              iconColor="orange"
              title="Twitter - San Francisco"
              description="Front End Software Engineer"
              small="Tech"
              statIcon={Update}
              statText="Updated 2 Min ago..."
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={FaTumblrSquare}
              iconColor="orange"
              title="Tumblr - Santa Clara"
              description="Android Software Engineer"
              small="Tech"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={FaTwitch}
              iconColor="orange"
              title="Twitch - New York"
              description="Backend Software Engineer"
              small="Tech"
              statIcon={Update}
              statText="Updated 6 Min ago..."
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={FaSnapchatSquare}
              iconColor="orange"
              title="Snapchat - Santa Monica"
              description="Development Operations Engineer"
              small="Tech"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
        </Grid>
      )
  }


}
export default withStyles(tasksCardStyle)(OpenCards2);
 