import React from 'react'



const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw; 
height: 100vh; 
`

const Main = () => {
    return (
        <MainContainer>
            Main Component/Page
        </MainContainer>
    )
}

export default Main