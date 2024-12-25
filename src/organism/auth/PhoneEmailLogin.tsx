"use client";

import InputField from "@/atoms/InputField";
import Typography from "@/atoms/Typography";
import { AuthUserIcon, PasswordIcon } from "@/constants/images";
import IconButton from "@/molecules/IconButton";
import Link from "next/link";
import React, { useState } from "react";

export default function PhoneEmailPage() {
  const [credentials, setCredentials] = useState({
    emailOrPhone: "",
    password: "",
  });
  return (
    <div className="flex flex-col gap-[19px]">
      <div className="pt-[48px] w-[90vw] flex flex-col gap-[11px]">
        <InputField
          Icon={AuthUserIcon}
          onChange={(e) =>
            setCredentials({ ...credentials, emailOrPhone: e.target.value })
          }
          value={credentials.emailOrPhone}
          placeholder="Enter Mobile Number or Email"
        />
        <InputField
          Icon={PasswordIcon}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          value={credentials.password}
          placeholder="Enter Password"
          type="password"
        />
      </div>

      <IconButton label="Sign In" onClick={() => {}} bgColor="var(--primary)" />
      <Typography align="center" color="var(--primary)" weight="700">
        Forgot Password?
      </Typography>

      <Typography align="center" color="var(--gray-text)">
        Don&apos;t have an account?{" "}
        <Link href={"/register"}>
          <Typography color="var(--primary)" weight="700" tag="span">
            Sign Up
          </Typography>
        </Link>
      </Typography>
    </div>
  );
}
