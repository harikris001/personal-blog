import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/signin");
  }

  const { name, email } = session.user;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Welcome, {name || "User"}!
        </h1>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-lg font-medium text-gray-900">{name || "Not provided"}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-medium text-gray-900">{email || "Not provided"}</p>
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm mt-6">
          You are logged in and authenticated.
        </p>
      </div>
    </main>
  );
}
