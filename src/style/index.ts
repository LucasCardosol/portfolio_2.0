import { styled, css } from "../../stitches.config";
import background1 from "../assets/structure/background-project-1.jpg"

export const CarouselStyle = css({
   
    '> div':{
        
        padding:'0 calc((100vw - 90rem)/2)',
        cursor:'grab',
        '> div':{
            marginRight:'40px'
        },
        '> div:last-child' :{
            marginRight:'0'
        },
       '&:active': {
        cursor: 'grabbing'
       }
    }
})

export const Intro = styled('section',{
    padding: '2.5rem 3.5rem',
    maxWidth: '43rem',
    marginBottom: '10rem',
    p:{
        marginTop: '2.5rem'
    }
})

export const Projects = styled('section',{
    h3: {
        marginLeft: '56px',
        marginBottom: '40px',
    },
})

export const CarouselContainer = styled('div',{

})

export const Project = styled('div',{
    display: 'flex',
    width: '760px',
    height: '480px',
    padding: '8px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '40px',
    background: 'radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.02) 100%)',
    boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.60), 0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(12px)',
    cursor:'pointer',
    div:{
        width: '755px',
        height: '376px',
        backgroundImage: `url(${background1.src})`,
        backgroundSize: 'cover',
        borderRadius: '32px',
    },
    
})