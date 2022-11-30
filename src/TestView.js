export default function TestView(props){
  return <div>
    <h1>CinemApp</h1>
    <button onClick={props.findQuote}>
      Click me
    </button>
    <div>{props.result}</div>
  </div>
}
