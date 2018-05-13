import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Tabs,
  Tab,Grid,
} from "material-ui";
import { BugReport, Code, Cloud, EventAvailable, NewReleases } from "@material-ui/icons";
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
  OpenCards,
  OpenCards2,
  ClosedCards,
  NewCards,
} from "components";


import { bugs, website, server } from "variables/general";

import tasksCardStyle from "assets/jss/material-dashboard-react/tasksCardStyle";

class TasksCard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardTitle,
            content: classes.cardHeaderContent
          }}
          title="Positions:"
          action={
            <Tabs
              classes={{
                flexContainer: classes.tabsContainer,
                indicator: classes.displayNone
              }}
              value={this.state.value}
              onChange={this.handleChange}
              textColor="inherit"
            >
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  labelIcon: classes.labelIcon,
                  label: classes.label,
                  textColorInheritSelected: classes.textColorInheritSelected
                }}
                icon={<EventAvailable className={classes.tabIcon} />}
                label={"Open"}
              />
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  labelIcon: classes.labelIcon,
                  label: classes.label,
                  textColorInheritSelected: classes.textColorInheritSelected
                }}
                icon={<Code className={classes.tabIcon} />}
                label={"Closed"}
              />
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  labelIcon: classes.labelIcon,
                  label: classes.label,
                  textColorInheritSelected: classes.textColorInheritSelected
                }}
                icon={<NewReleases className={classes.tabIcon} />}
                label={"New"}
              />
            </Tabs>
          }
        />
        <CardContent>
          {this.state.value === 0 && (
            <div>
          <OpenCards/>
           <OpenCards2/>
           </div>
          )}
          {this.state.value === 1 && (
            <ClosedCards/>
          )}
          {this.state.value === 2 && (
            <NewCards/>
          )}
        </CardContent>
      </Card>
    );
  }
}

TasksCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(tasksCardStyle)(TasksCard);
