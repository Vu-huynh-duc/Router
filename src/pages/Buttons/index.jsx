
import Button from "../../components/Button"
import styles from "./Buttons.module.scss"

function Buttons() {
  return (
  <>
    <h1>11 types of button</h1>
    <Button ><span>📧</span> Send Email</Button>    
    <Button rounded>Rounded Button</Button>
    <Button href="https://google.com" target="_blank">Go to Google</Button>
    <Button size="large" >Large Button</Button>
    <Button disabled >Disable Button</Button>
    <Button loading>Loading Button</Button>
    <Button primary>Primary Button</Button>
    <Button bordered>Bordered Button</Button>
    <Button size = "small" >Small Button</Button>
    <Button onClick={()=> {alert('this is alert about onClick Btn')}} >Can Click Button</Button>
    <Button className = {styles.overSize}><span>Special Button</span></Button>
  </>
  )
}

export default Buttons
