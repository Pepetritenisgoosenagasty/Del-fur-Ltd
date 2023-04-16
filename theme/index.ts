export const theme: any = {
    globalStyles: (theme: any) => ({
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },

      '.header': {
        "boxShadow": "0 2px 28px 0 rgba(0, 0, 0, 0.06)"
    
      },

      ".carousel-section":{
        position: "absolute",
        width: "1000px",
        top: "50%",
        transform: "translateY(-50%)"
      },
      ".parallax-section": {
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
      ".custom-card": {
        boxShadow: "0 2px 48px 0 rgba(0, 0, 0, 0.13)",
        zIndex: 200
      },
      ".my-prefix-1ig5vnr": {
        zIndex: "39 !important"
      },

      '.image-container': {
        overflow: "hidden",
        borderRadius: 5,

        "img": {
           transition: "all 0.3s ease-in-out",
        },

        '&:hover img': {
          transform: "scale(1.1)",
        }
      },

      ".gallery": {
        "img": {
          objectFit: "contain !important"
        }
      },
        '.bm-burger-button': {
        display: 'none'
      },
      [theme.fn.smallerThan('lg')]: {
        '.bm-burger-button': {
        display: 'block'
      },
      },

     

     
      
    })}  