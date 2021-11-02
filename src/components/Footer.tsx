import styled from 'styled-components';
import { Colors } from './utils/_var';

const FooterWrapper = styled.div`
  .footer {
    background-color: ${Colors.backgroundColor};
    width: 100vw;
  }
  .container {
    display: flex;
  }
  .copyright {
    color: black;
    color: ${Colors.beige};
    font-size: 1.2rem;
    font-family: 'Bebas Neue';
    text-align: right;
    margin: 2.5rem auto 1rem;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="footer">
        <div className="container">
          <span className="copyright">
            copyright &copy; {new Date().getFullYear()} Kyungjoo Ha All rights reserved.
          </span>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
