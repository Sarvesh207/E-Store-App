import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted by more 800+ Companies</h3>
        <div className="brand-section-slider">
          <div className="brand-section-slider">
            {/* my 1st img  */}
            <div className="slide">
              <img
                src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/visa-icon.svg"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/stripe-icon.svg"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/paypal-color-icon.svg"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/rupay-logo-icon.svg"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/master-card-icon.svg"
                alt="trusted-brands"
              />
              
            </div>
            <div className="slide">
              <img
                src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/skrill-icon.svg"
                alt="trusted-brands"
              />
              
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 8rem;
    height:8rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    gap:6rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
