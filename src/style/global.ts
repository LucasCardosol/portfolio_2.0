import { globalCss } from "../../stitches.config"
import { styled } from "../../stitches.config"


export const globalStyles = globalCss({
    '*':{
        margin: 0, 
        padding: 0,
    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
        fontSmooth: 'atialiased',
        fontFamily:  "$inter",
        background: '$background',
        paddingBottom: '6rem'
    },
    button: {
        border: 'none',
        background: 'transparent'
    },
    ul: {
        listStyle: 'none',
        padding: '0 !important'
    },
    h2:{
        fontSize: '$md_1',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '3.5rem',
        color: '$white',
    },
    h3:{
        color: '$strong',
        fontSize: '$md_2',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '3.5rem',
    },
    p:{
        color: '$text',
        fontSize: '$sm_1',
        fontStyle: 'normal',
        lineHeight: '1.75rem',
    },
    '&.alice-carousel':{
        background:'Red'
    }
    
})

export const Container = styled('div',{
    width:'90%',
    maxWidth: '90rem',
    margin: '0 auto',
})