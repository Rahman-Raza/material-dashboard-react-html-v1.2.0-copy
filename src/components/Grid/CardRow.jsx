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

class CardRow extends React.Component{

  render(){
    return(

      <Grid container>
            <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={ContentCopy}
              iconColor="orange"
              title="Google - San Francisco"
              description="Machine Learning Engineer"
              small="Tech"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={ContentCopy}
              iconColor="orange"
              title="Google - San Francisco"
              description="Machine Learning Engineer"
              small="Tech"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={ContentCopy}
              iconColor="orange"
              title="Google - San Francisco"
              description="Machine Learning Engineer"
              small="Tech"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={ContentCopy}
              iconColor="orange"
              title="Google - San Francisco"
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
export default withStyles(tasksCardStyle)(CardRow);
 