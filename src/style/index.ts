import { styled, css } from "../../stitches.config";
import { keyframes } from "@stitches/react";
import background1 from "../assets/structure/background-project-1.jpg"
import background2 from "../assets/structure/background-project-2.jpg"
import background3 from "../assets/structure/background-project-3.jpg"

export const CarouselStyle = css({
    
    '> div':{
        padding:'0 calc((100vw - 90rem)/2)',
        paddingBottom:'20px',
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

const scaleUp = keyframes({
    '0%': { 
        opacity: '0',
        marginRight: '50px'
    },
    '25%': { 
        opacity: '1'
    },
    '50%': { 
        opacity: '0.5'
    },
    '100%': { 
        opacity: '0'
    },
  });

export const Projects = styled('section',{
   
    h3: {
        paddingLeft: '3.5rem',
    },
    header:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: '2.5rem',
        span:{
            color: '$white',
            alignItems:'center',
            display:'flex',
            animation: `${ scaleUp } 3s infinite`,
            transition: '10s'
        }
    }

})

export const CarouselContainer = styled('div',{

})

export const Project = styled('div',{
    display: 'flex',
    width: '47.5rem',
    height: '30rem',
    padding: '8px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '40px',
    background: 'radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.02) 100%)',
    boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.60), 0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(12px)',
    
    footer:{
        display:'flex',
        width:'calc(100% - 5rem)',
        padding:'0.75rem 2.5rem',
        gap:'1.5rem',
        alignItems:'center',
        height:'100%',
        cursor:'pointer',
        p:{
            color: '$white',
            fontSize: '$sm_2',
            lineHeight: '1.5rem',
            fontWeight:'600',
            marginBottom:'0.5rem'
        },
        span:{
            color:'$text',
            fontSize:'1rem'
        }
    }
})

export const BgImage = styled('div',{
    width: '47.2rem',
    minHeight: '23.5rem',
    backgroundSize: 'cover',
    borderRadius: '32px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    variants: {
        background:{
            bg1:{backgroundImage: `url(${background1.src})`},
            bg2:{backgroundImage: `url(${background2.src})`},
            bg3:{backgroundImage: `url(${background3.src})`},
        }
    }
})