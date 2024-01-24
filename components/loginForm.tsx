"use client";
import { useFormState } from "react-dom";
import { loginAction } from "@/app/lib/login-action";
/* import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button"; */
import Link from "next/link";
import { Input, Button } from "@nextui-org/react";

export default function LoginForm() {
  const initialState = {};
  const [state, dispatch] = useFormState(loginAction, initialState);
  return (
    <form className="space-y-3" action={dispatch}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className='light  light:text-black  text-white'>Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <Input
                id="identifier"
                type="text"
                name="identifier"
                placeholder="Enter your email or username"
              />
            
            </div>
            {state?.errors?.identifier ? (
              <div
                id="customer-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500"
              >
                {state.errors.identifier.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                minLength={6}
              />
             
            </div>
            {state?.errors?.password ? (
              <div
                id="customer-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500"
              >
                {state.errors.password.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <LoginButton />
        <div className="flex h-8 items-end space-x-1">
          {state?.message ? (
            <div
              id="customer-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              <p>{state.message}</p>
            </div>
          ) : null}
        </div>
        <Link className="text-muted text-gray-400" href="/">
          back
        </Link>
      </div>
    </form>
  );
}

function LoginButton() {
  return (
    <Button className="mt-4 w-full" color="primary" type="submit">
      Log in {/* <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" /> */}
    </Button>
  );
}
