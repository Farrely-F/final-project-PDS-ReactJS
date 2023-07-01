import React from "react";
import Table from "./Table";
import { Link } from "react-router-dom";
import Input from "./Input";

function DashboardInput() {
  return (
    <div className="flex max-sm:flex-col">
      <aside className="min-w-[200px] bg-base p-8">
        <Link to={"/dashboard/table"}>
          <p className="mb-5 transition-all hover:border-b-white hover:border-b-2 origin-bottom-left">Data Form</p>
        </Link>
        <p className="mb-5 transition-all hover:border-b-white hover:border-b-2 origin-bottom-left">Add Data</p>
      </aside>
      <main className="overflow-x-scroll min-h-screen">
        <Input />
      </main>
    </div>
  );
}

export default DashboardInput;
