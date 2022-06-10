import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './TrackCardStyling';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Engineering Track</PricingHeading>
          <PricingContainer>
            <PricingCard to='/engtrack/firstyear'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>First Year</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Engineering Track which is divided into 8 sections which represents 8
semesters of college. In each section there will be instructions, videos ,links and
resources about what that they have to do in that semester.</PricingCardFeature>
                  
                </PricingCardFeatures>
                <Button primary>Choose Track</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/engtrack/secondyear'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Second Year</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>A discussion forum will be there to help students to
know other approaches to solve that problem and time to time competitions will be
held to practice the concepts</PricingCardFeature>
                  
                </PricingCardFeatures>
                <Button primary>Click Here</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/engtrack/thirdyear'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Third Year</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Algorithms and data structures go hand in hand; the solution to virtually any coding interview problem will require the implementation of some kind of abstract data type in order to access and manipulate information.</PricingCardFeature>
          
                </PricingCardFeatures>
                <Button primary>Click Here</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/engtrack/fourthyear' style={{margin:"20px"}}>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Fourth Year</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Engineering Track which is divided into 8 sections which represents 8
semesters of college. In each section there will be instructions, videos ,links and
resources about what that they have to do in that semester.</PricingCardFeature>
                  
                </PricingCardFeatures>
                <Button primary>Choose Track</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
