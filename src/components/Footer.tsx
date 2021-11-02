import styled from 'styled-components';
import { media } from './utils/_media-queries';
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
    margin: 1.75rem auto 1rem;
    font-family: 'Bebas Neue';
    text-align: right;
    color: ${Colors.beige};
    font-size: 1.1rem;
    ${media.tablet`font-size: 1.2rem;`}
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
