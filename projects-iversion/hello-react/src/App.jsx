import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <div className="App">
    <TwitterFollowCard userName="mateocristino" name="Mateo Cristino"/>
    <TwitterFollowCard userName="kubbebeats" name="Kubbebeats"/>
    <TwitterFollowCard userName="antonie" name="Antonella Galli"/>
    </div>
  )
}
