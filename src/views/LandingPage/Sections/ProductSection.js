import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { LocalHospital, QuestionAnswer, HourglassEmpty } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>How it works?</h2>
          <h5 className={classes.description}>
            Sometime we think that we are healthy but actually we are not healthy and vice versa.
            With Korrectify you can compare your physical, mental or social health with
            that of normal, better and best health standards by answering a few multiple choice quiz
            questions and get a better idea about your health. Also, you get tips, videos and useful articles which can
            help you greatly to improve your health.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Select Health Type"
              description="Select your health type to proceed in making a good decision of your health"
              icon={LocalHospital}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Answer Quiz Questions"
              description="Answer quiz questions carefully as its needed to know about your health condition properly"
              icon={QuestionAnswer}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Get Results"
              description="Here you will know how is your health and what tips you have to follow in order to stay healthy and blessed life"
              icon={HourglassEmpty}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
