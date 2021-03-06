import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;
  .orange {
    border-bottom: 3px solid;
    border-color: #ff872c;
  }
  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        padding-bottom: 5px;
        & + a {
          margin-left: 32px;
        }
        &:hover {
          opacity: 0.6;
          border-bottom: 3px solid;
          border-color: #ff872c;
          /* position: absolute;
          width: 73px;
          height: 2px;
          left: 1102px;
          top: 69px; */
        }
      }
    }
  }
`;
