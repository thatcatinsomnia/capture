import styled from 'styled-components';

const CTAButton = styled.button`
    --color: #23d997;
    padding: .55em 1.8em;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    background: transparent;
    border: 3px solid var(--color);
    transition: background 300ms ease-out;
    font-size: 2rem;

    &:hover {
      background: var(--color)
    }
`;

export default CTAButton;