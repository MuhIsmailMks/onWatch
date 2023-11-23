/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontSize : {
        'navFontM':'1rem', // font size medium
        'navFontL':'1.3rem', // font size large
      },

      colors: { 

        'gradientBlue': '#853ee0',
        'gradientLightBlue': '#0032E2',
      }, 

      spacing : {
        'navTop' : '80px',
        'spacingTitle' : '.6rem'
      },

      screens: {
        'ssm': {'max': '300px'},    // super small screen
        'mdc': {'max': '500px'},    // mobile screen
        'mss': {'min': '400px' , 'max': '600px'},    // medium smartphone size
        'tmc': {'min': '501px' , 'max': '850px'},    // tablet m screen
        'txc': {'min': '850px' , 'max': '1100px'},    // tablet xl screen
        'txl': {'max': '1100px'},    // config for tablet & mobile 
        'dtm': {'min': '1100px'},    // dekstop min
        'dxm': {'min': '1500px'},    // dekstop xl min



        'tbm':  {'min': '501px' , 'max': '710px'},// tablet min specs
        'tbs':  {'max': '710px'},// tablet medium specs
        'tbsx':  {'min': '710px'} // tablet max specs
      },

      backgroundImage :{
        'bgHeader': "url(/img/bgHeader.jpg)",
      },

      fontFamily : {
        'interFont' : "'Inria Sans', sans-serif",
        'inriaFont' : "'Inter', sans-serif",
        'montserrat' : "'Montserrat', sans-serif",
        'plusJakartaSans' : "'Plus Jakarta Sans', sans-serif",
      },

      boxShadow : {
        'featureShadow' : "0 0 12px rgba(0,0,0,.2)"
      }
      
    },
  },
  plugins: [],
}

