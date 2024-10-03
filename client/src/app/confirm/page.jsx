"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Payment, Cash, Goodjob, Loading } from "@/components";

const steps = [Payment, Cash, Goodjob];

export default function page() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const StepComponent = steps[step];
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }
  useEffect(() => {});

  const handlerContinue = () => {
    if (step === 2) {
      router.push("/dashboard");
      return;
    }
    setStep((prev) => prev + 1);
  };

  return (
    <div>
      <StepComponent next={handlerContinue} />
    </div>
  );
}
