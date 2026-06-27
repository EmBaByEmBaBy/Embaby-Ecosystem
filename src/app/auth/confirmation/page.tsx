import { Suspense } from "react";
import { ConfirmationScreen } from "@/modules/auth";

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-embabi-deep-black text-embabi-ivory">جارٍ التحميل...</div>}>
      <ConfirmationScreen />
    </Suspense>
  );
}
