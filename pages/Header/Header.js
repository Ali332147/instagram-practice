import React from "react";

export default function Header() {
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div class="navbar-center  lg:flex">
      <div> <input type="text" placeholder="Search" class="input input-bordered" /></div>
      </div>
      <div class="navbar-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
          <img src="https://api.lorem.space/image/face?hash=33791" />
          
        </div>
      </label>
      </div>
    </div>
  );
}
