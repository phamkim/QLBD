import "./App.css";
import { useStores } from "./stores";
import { observer } from "mobx-react";
import { LogIn } from "./component/logIn";
const App = observer(() => {
  const { thanhVienStore } = useStores();
  return (
    <div className="App">
      {thanhVienStore.token != null ? <h1>ok</h1> : <LogIn />}
    </div>
  );
});

export default App;
