import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updateTheme } from "../redux/action-creators";

function ColorPalette(props) {
    const { theme } = props;
    const currentTheme = useSelector((state) => state.theme.theme)
    const dispatch = useDispatch();

    const Button = styled.button`
        background-color: ${props => props.selected ? currentTheme.secondary : currentTheme.primary};
        color: ${props => props.selected ? currentTheme.primary : currentTheme.secondary};
        border: 1px solid ${props => props.selected ? currentTheme.primary : currentTheme.secondary};
        width: 6.5rem;
        padding: 0.1rem 0;
        font-size: 1.2rem;
        border-radius: 8px;
        transition: color 0.2s ease-in;

        &:hover {
            color: ${props => !props.selected && currentTheme.primary};
            background-color: ${props => !props.selected && currentTheme.secondary};
            border: 1px solid ${props => !props.selected && currentTheme.primary};
        }
    `

    const ContainerP = styled.p`
        display: flex;
        justify-content: space-between;
    `

    const Container = styled.div`
        &:not(:last-child) {
            margin-bottom: 1.5rem;
        }
    `


    return (
        <Container>
            <ContainerP>{theme.name[0].toUpperCase() + theme.name.slice(1)}
                {theme.name !== currentTheme.name 
                ?
                    <Button onClick={() => dispatch(updateTheme(theme.name))}>Select</Button>
                :
                <Button  onClick={() => dispatch(updateTheme(theme.name))} selected>Selected</Button>}
            </ContainerP>
        </Container>
    )


}

export default ColorPalette;