import React, { useState, useEffect } from "react";
import questions from "../faq.json"
import Banner from "../components/banner";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function Landing () {
  const [expanded, setExpanded] = useState('panel')
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  
  const handleChange =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  return ( 
  <>
  <h1>Welcome to FashionFlipped</h1><div>
    <p>  The Sustainable Trend.</p>
  </div>
  <Banner>
        <Banner.Header>Frequently Asked Questions</Banner.Header>
        {questions.map((cards) => (
          // <Banner.Entity key={question.id}>
          //   <Banner.Question>{question.question}</Banner.Question>
          //   <Banner.Text>{question.answers}</Banner.Text>
          // </Banner.Entity>import * as React from 'react';
          <div>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>{cards.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{alignItems: 'flex-start'}}>
                {cards.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
        <h4>
          Question not on the list? Contact us at FashionFlipped@gmail.com with your inquiry :)
        </h4>
      </Banner></>
  );

};
