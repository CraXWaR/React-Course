import { styled } from "styled-components";

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${(props) => (props.$invalid ? '#f87171' : '#6b7280')};
`;

const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);

    /* Styling based on invalid state */
    color: ${(props) => (props.$invalid ? '#f87171' : '#374151')};
    background-color: ${(props) => (props.$invalid ? '#fed2d2' : '#d1d5db')};
    border: 1px solid;
    border-color: ${(props) => (props.$invalid ? '#f73f3f' : 'transparent')};
`;

export default function CustomInput({ label, invalid, ...props }) {
    return (
        <>
            <Label $invalid={invalid}>{label}</Label>
            <Input $invalid={invalid} {...props} />
        </>
    );
}
