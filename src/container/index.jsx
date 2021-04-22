import React from 'react'
import styled from 'styled-components'
import {theme} from '../theme'
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20%;
    font-size: 30px;
    color: ${theme.primary}
`
export function SectionOne(){
    return <Container>
            <div>Welcome to Jaaja Website Development</div>
        </Container>

    
}