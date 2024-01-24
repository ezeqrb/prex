import { redirect } from "next/navigation";
import { NextUILogo } from "@/components/icons";
import LoginForm from "@/components/loginForm";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Master Login',
}

export default function Login() {
  const session = "";

  if (session) {
    return redirect("/");
  }
  
  return (
    <section className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <NextUILogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </section>
  
  );
}
