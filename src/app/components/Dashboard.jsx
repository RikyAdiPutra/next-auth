"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const { data } = useSession();
  return (
    <div>
      {data ? (
        <div>
          <h1>Welcome back {data.user?.name}</h1>
          <p>{data.user?.email}</p>
          <button
            onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
            className="bg-red-400 text-white p-2 rounded-lg mt-4"
          >
            Kembali
          </button>
        </div>
      ) : (
        <div>
          <h1>Kamu belum login</h1>
          <button
            onClick={() => signIn("google")}
            className="bg-red-400 text-white p-2 rounded-lg"
          >
            Sign with geogle
          </button>
          <button
            onClick={() => signIn("github")}
            className="bg-gray-400 text-white p-2 rounded-lg"
          >
            Sign with github
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
