import stanley from "./img/kubrick.jpg"

export default function LoadingScreen(){
    return <div>
        <img className={"rounded-corners"} alt={"stanley kubrick"} src={stanley}/>
        <div>loading game</div>
        </div>
}
