import React from "react";
import { NavLink } from "react-router-dom";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import TextField from 'material-ui/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";
// core components
import Header from "components/LoginHeader/Header.jsx";
import HeaderLinks from "components/LoginHeader/HeaderLinks.jsx";
import Footer from "components/LoginFooter/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";




import signupPageStyle from "assets/jss/material-dashboard-react/loginPage.jsx";

import image from "assets/img/bg7.jpg";
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaApple from 'react-icons/lib/fa/apple';
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      counter:0
    };

    // this.click_counter = this.click_counter.bind(this)
  }
  // shouldComponentUpdate(){
  //   console.log("should",this.state.counter)
  //   return true
  // }

  // click_counter(){
  //   //this.state.counter+=1
  //   console.log(this.state.counter)
  // //  this.setState({counter : this.state.counter+1})
  //   this.setState((prevState, props) => {
  //       console.log("prev",prevState)
  //       console.log("props",props)
  //       return {counter: prevState.counter + 1};
  //     }
  //   )
  // }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>

        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Signup for MyJobTank</h4>
                      <div className={classes.socialLine}>

                          <FaLinkedinSquare style={{margin:"5px", fontSize:"24px"}}/>
                           <FaFacebookSquare style={{margin:"5px", fontSize:"24px"}}/>
                            <FaGooglePlusSquare style={{margin:"5px", fontSize:"24px"}}/>


                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Or Be Classical</p>
                    <CardBody >
                      <CustomInput
                        labelText="First Name..."
                        id="first"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor}/>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor}/>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutline className={classes.inputIconsColor}/>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                       <NavLink
                          to="/login"
                          className={classes.item}
                          activeClassName="active"

                        >
                          <Button simple color="primary" size="lg" >
                              Get started
                          </Button>
                        </NavLink>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>

          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(signupPageStyle)(LoginPage);
