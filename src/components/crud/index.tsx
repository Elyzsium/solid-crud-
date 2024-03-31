import { createSignal, Component } from "solid-js";
import { nanoid } from "nanoid";


type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

const Crud: Component = () => {
  const [id, setId] = createSignal("");
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [users, setUsers] = createSignal<User[]>([]);
  const [buttonName, setButtonName] = createSignal("Add User");

  const deleteUser = (id: string) => {
    setUsers(users().filter((user) => user.id !== id));
  };


  const submitUser = () => {
    if (name() === "" || email() === "" || password() === "") {
      alert("Please fill in all fields.");
      return;}
    if (id() === "") {
      setUsers(users().filter((user) => user.id !== id()));
      setUsers([ ...users(), { id: id(), name: name(), email: email(), password: password() },
      ]);
    } else {
      setUsers([
        ...users(),
        { id: nanoid(8), name: name(), email: email(), password: password() },
      ]);
      setId("");
      setName("");
      setEmail("");
      setPassword("");
      setButtonName("Edit");
    }
  
  };

  return (
    <>
      <div class="w-full max-w-xs">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              value={name()}
              onInput={(e) => setName(e.target.value)}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              value={email()}
              onInput={(e) => setEmail(e.target.value)}
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="yourname@gmail.com"
            />
            <p class="text-red-500 text-xs italic">Please choose an email.</p>
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              value={password()}
              onInput={(e) => setPassword(e.target.value)}
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="enter your password"
            />
            <p class="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>

          <div class="flex items-center justify-between">
            <button
              onClick={() => (buttonName() === "Add User" ? submitUser() : null)}
              // onClick={() => buttonName() == 'Add User' ? submitUser() : submitUser(id())} 
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              {buttonName()}
            </button>
          </div>
        </div>
      </div>
      <div class="relative rounded-xl overflow-auto">
        <div class="shadow-sm overflow-hidden my-8">
          <table class="border-collapse table-auto w-full text-sm">
            <thead>
              <tr>
                <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-100 dark:text-slate-600 text-left">
                  Id
                </th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-600 text-left">
                  Name
                </th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-600 text-left">
                  Email
                </th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-600 text-left">
                  Password
                </th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-600 text-left">
                  Edit
                </th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-600 text-left">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody class="bg-slate-800">
              {users().map((user) => (
                <tr>
                  <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    {user.id}
                  </td>
                  <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    {user.name}
                  </td>
                  <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {user.email}
                  </td>
                  <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {user.password}
                  </td>
                  <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    <button
                     
                      onClick={() => (buttonName() === "Add User" ? submitUser() : null)}
                      // onClick={() => buttonName() == 'Add User' ? submitUser() : submitUser(id())} 
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      {buttonName()}
                    </button>
                    
                     
                  </td>
                  <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    <button
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onclick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Crud;
