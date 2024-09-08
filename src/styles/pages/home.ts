import { styled } from "..";



export const HomeContainer = styled("main", {
  width: "100%", 
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))", 
  marginLeft: "auto",
})

export const SliderContainer = styled("div", {
  display: "flex", 
  gap: "3rem", 
  margin: "0 auto", 
  ".embla__slide": {
    minWidth: "43.5rem", 
  }
})


export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer", 
  position: "relative", 
  overflow: "hidden", 
  width: "100%",
  minHeight: 656,

  display: "flex", 
  alignItems: "center", 
  justifyContent: "center", 

  img: {
    objectFit: "cover"
  }, 


  footer: {
    position: "absolute", 
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",

    backgroundColor:"rgba(0,0,0,0.6)", 
    padding: "2rem",

    borderRadius: 6,
    transform: "translateY(110%)", 
    opacity: 0, 
    transition: "all 0.2s ease-in-out",

    display: "flex", 
    alignItems: "center", 
    justifyContent: "space-between",


    div: {
      display: "flex", 
      flexDirection: "column", 
      gap: 4,
    },

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold", 
      color: "$green300"
    }
  },


  "&:hover": {
    footer: {
      transform: "translateY(0%)", 
      opacity: 1,
    }
  }
})