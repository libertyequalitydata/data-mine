import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
   
    styles:{
      global:{
        body:{
          backgroundColor:"bgLight"
        }
      }
    },
    breakpoints : {
      sm: '320px',
      md: '600px',
      lg: '700px',
      xl: '1024px',
      '2xl': '1440px',
    },
  
    colors:{
        primary: "#6AD9C1",
        hover : "#04B48E",
        active : "#05634e",
        bgDark : "#09003D",
        bgLight : "#130C45",
        bgItem : "#1E1267",
        bgItemD : "#1E126750",
        whiteText : "#F6F6F6",
        grayText : "#838383",
        searchText : "#85819E",
        searchBorder : "#332A68",
        newTag : "#D05757",
        updatedTag: "#8C00A3",
        subTag : "#9593FFB2",
        moreTag : "#FF93FB",
    },
    fonts: {
      body: `Open Sans, ${base.fonts}`
    },
    sizes: {
        ...base.space,
        container: {
          xs:'350px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1440px'
        },
      },
      
    components:{
        Button:{
          variants:{
            square:(props)=>({
              ...base.components.Button.variants.ghost(props),
              color:"whiteText",
              rounded:"none",
              minW:"129px",
              maxH:"29px",
              fontWeight:300,
              _hover:{ backgroundColor: 'bgLight',border:"1px"}
              

            }),
            select:(props)=>({
              ...base.components.Button.variants.ghost(props),
              color:"whiteText",
              rounded:"none",
              minW:"233px",
              maxH:"54px",
              fontWeight:600,
              justifyContent:"start",
              _hover:{ backgroundColor: 'bgLight',border:"1px"}
  

            })
          }
        }
    }
})

export default theme;