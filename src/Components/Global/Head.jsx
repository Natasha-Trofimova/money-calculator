import { useNavigate } from "react-router-dom"
import css from "./Styled.css"

const { HeaderContainer, ButtonHeader, HeaderMenu } = css

function Head() {

  const navigate = useNavigate()

  return (
    <>
      <HeaderContainer>
        head<br />
        лого
        <HeaderMenu>
          <ButtonHeader onClick={() => navigate('/main')} >Главная</ButtonHeader>
          <ButtonHeader onClick={() => navigate('/plan')} >Планирование</ButtonHeader>
        </HeaderMenu>
      </HeaderContainer>
    </>
  )
}
export default Head
