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


class OpenCards extends React.Component{

  render(){
    return(

      <Grid container>
            <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={FaGooglePlusSquare}
              iconColor="orange"
              title="Google - San Francisco"
              description="Machine Learning Engineer"
              small="Tech"
              statIcon={Update}
              statText="Updated 2 Min ago..."
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={FaApple}
              iconColor="orange"
              title="Apple - Cupertino"
              description="IOS Software Engineer"
              small="Tech"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={FaFacebookSquare}
              iconColor="orange"
              title="Facebook - Menlo Park"
              description="Backend Software Engineer"
              small="Tech"
              statIcon={Update}
              statText="Updated 6 Min ago..."
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={FaLinkedinSquare}
              iconColor="orange"
              title="LinkedIn - San Francisco"
              description="Machine Learning Engineer"
              small="Tech"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
        </Grid>
      )
  }


}
export default withStyles(tasksCardStyle)(OpenCards);
 