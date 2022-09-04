import React, { useState, useEffect } from "react";
import questions from "../faq.json"
import Banner from "../components/banner";

const Landing = () => {
  return ( <><h1>Welcome to FashionFlipped</h1><div>
    <p>  The Sustainable Trend.</p>
  </div>
  <Banner>
        <Banner.Header>Frequently Asked Questions</Banner.Header>
        {questions.map((question) => (
          <Banner.Entity key={question.id}>
            <Banner.Question>{question.question}</Banner.Question>
            <Banner.Text>{question.answers}</Banner.Text>
          </Banner.Entity>
        ))}
        <h4>
          Question not on the list? Contact us at FashionFlipped@gmail.com with your inquiry :)
        </h4>
      </Banner></>
  
  
  );

};

export default Landing;
