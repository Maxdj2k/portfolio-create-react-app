import styled from 'styled-componets'
import { Content } from 'carbon-components-react/lib/componets/UIShell'

export const StyledContent = styled(Content)`
    min-height: 100vh;
    
    @media (max-width: 640px) {
        margin-left: 0 !important;
    }
`