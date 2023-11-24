import styled from "styled-components"

const css = {
  HeaderContainer: styled.header`
  display: flex;
  background-color: #817497;
  width: 100%;
  height: 12%;
  flex-direction: row;
  justify-content: space-between;
  `,
  ButtonHeader: styled.button`
  margin-right: 10px;
  display: block;
  padding: 8px;
  border-radius: 6px;
  background-color: #F9F871;
  cursor: pointer;
  opacity: 0.7;
  color: black;
  `,
  HeaderMenu: styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  `,
  FooterContainer: styled.header`
  background-color: #817497;
  width: 100%;
  height: 12%;
  `,
  BodyrContainer: styled.div`
  background-color: #B87FA5;
  width: 100%;
  height: 76%;
  display: flex;
  background-color: #B87FA5;
  width: 100%;
  height: 76%;
  flex-direction: row;
  justify-content: space-around;
  `
}
export default css
