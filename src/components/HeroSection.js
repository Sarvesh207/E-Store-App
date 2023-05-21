import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";


const HeroSection = ({mydata}) => {
    const {name} = mydata;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">wellcome to</p>
            <h1>{name}</h1>
            <p>
            Welcome to our e-commerce website, your go-to destination for all things online shopping. With a user-friendly interface and secure transactions, we make your shopping experience a breeze. Explore our curated collection, find the perfect products, and have them delivered to you in no time. Start shopping now and embrace the convenience of e-commerce!
            </p>
            <NavLink to="">
            <Button>Shop now</Button>
          </NavLink>
          </div>
          
          <div className="hero-section-img">
          <figure>
            <img
              src="images/hero.jpg"
              alt="hero-section"
              className="img-style"
            />
          </figure>
        </div>
        </div>
        
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;


export default HeroSection;
