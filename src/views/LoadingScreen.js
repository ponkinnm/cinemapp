import stanley from "../img/kubrick.jpg"
import './LoadingScreen.css'
export default function LoadingScreen(){
    return <div>
        <img className={"rounded-corners"} alt={"stanley kubrick"} src={stanley}/>
        <div className={"centeredtext"}>LOADING GAME</div>
        </div>
}
