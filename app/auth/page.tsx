
import { redirect } from "next/navigation";

export default async function AuthRoute() {
  const session = '';

  if (session) {
    return redirect("/");
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
     
    </div>
  );
}