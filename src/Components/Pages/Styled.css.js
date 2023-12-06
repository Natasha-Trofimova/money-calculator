import styled from "styled-components"

const css = {
  PagCss: styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`,
FormCss: styled.div`
  opacity: 0.7;
  display: flex;
  position: relative;
  height: auto;
  min-height: 146px;
  min-width: 20%;
  background-color: #F9F871;
  color: black;
  border-radius: 6px;
  box-show: 0px 0px 3px grey;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7px;
`,
FormContainer: styled.div`
    margin-top: 8px;
    display: flex;
    position: relative;
    height: auto;
    min-height: 36px;
    min-width: 90%;
    background-color: #B9B9B9;
    color: black;
    border-radius: 6px;
    box-show: 0px 0px 3px grey;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7px;
`,
Button: styled.button`
display: block;
position: relative;
width: 180px;
height: 30px;
cursor: pointer;
border-radius: 6px;
margin: 5px;
margin-bottom: 10px;
padding: 3px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.backgroundColor};
`,
FormShowCss: styled.div`
opacity: 0.7;
display: flex;
flex-direction: column;
align-items: center;
min-height: 146px;
min-width: 17%%;
background-color: #F9F871;
color: black;
border-radius: 6px;
padding: 7px;
`,
}
export default css
