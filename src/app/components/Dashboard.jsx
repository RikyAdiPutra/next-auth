"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const { data } = useSession();
  console.log({ data });
  return (
    <div>
      {data ? (
        <div>
          <h1>Welcome back</h1>
          <button
            onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
          >
            Kembali
          </button>
        </div>
      ) : (
        <div>
          <h1>Kamu belum login</h1>
          <button onClick={() => signIn("github")}>Sign with githb</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
