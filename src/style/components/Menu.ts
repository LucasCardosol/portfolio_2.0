import { styled } from "../../../stitches.config";

export const MenuContainer = styled('div',{
    position:'fixed',
    left: 0,
    top:0,
    background: 'transparent',
    width:'calc((100vw - 90rem)/2)',
    paddingTop: '4rem',
    zIndex:'1',
    nav:{
        margin:'0 auto',
        borderRadius: '80px',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.00) 100%)',
        boxShadow: '0px 6px 9px 0px rgba(0, 0, 0, 0.60), 0px 2px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.04)',
        backdropFilter: 'blur(20px)',
        width:'4rem',
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'0.25rem 0'
    },
    ul:{
        display:'flex',
        flexDirection:'column',
        gap:'0.25rem'
    },
    
})

export const MenuButton = styled('li', {
    height:'3.5rem',
    width:'3.5rem',
    borderRadius:'100%',
    a:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        width: '100%',
        height: '100%',
        borderRadius:'100%',
        span:{
            marginTop:'4px',
            height:'4px',
            width: '4px',
            borderRadius: '4px',
            background: '#AAAEB9'
        }
    },
    variants:{
        focus:{
            inPage:{
                background: 'var(--White-white-10, rgba(255, 255, 255, 0.10))',
            },
            outPage:{
                background: 'transparent'
            }
        }
    }
}) 