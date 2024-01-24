import { redirect } from "next/navigation";
import { Input } from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import { Metadata } from "next";
import { NextUILogo } from "@/components/icons";
import RegisterForm from "@/components/register-form";

export const metadata: Metadata = {
  title: 'Master Register',
}
export default function Register() {
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
        <RegisterForm />
      </div>
    </section>
  );
}
