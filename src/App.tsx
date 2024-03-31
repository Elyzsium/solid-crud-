// import { createSignal, type Component, createEffect } from 'solid-js';

import { Component } from "solid-js";
import SubmitUser from "./components/crud";



const App: Component = () => {
// const [id, setId] = createSignal("");
// const [name, setName] = createSignal("");
// const [email, setEmail] = createSignal("");
// const [users, setUsers] = createSignal("");
// const [button, setButton] = createSignal("");


  return (
    <div >
     < SubmitUser />
    </div>
  );
};

export default App;
