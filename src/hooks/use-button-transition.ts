"use client";

import { useState, useTransition } from "react";
import { ActionResult } from "@/actions";

interface useButtonTransitionProps {
  action: () => Promise<ActionResult>;
  initialState?: ActionResult;
  onSuccess?: () => void;
  onError?: () => void;
  handle_error?: (error: any) => void;
}

export function useButtonTransition({
  action,
  initialState = {},
  onSuccess = () => null,
  onError = () => null,
  handle_error,
}: useButtonTransitionProps) {
  const [state, setState] = useState<ActionResult>(initialState);
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(async () => {
      try {
        const res = await action();
        setState(res);
        if (res?.error) {
          onError();
        }
        if (res?.success) {
          onSuccess();
        }
      } catch (error) {
        if (handle_error) {
          handle_error(error);
        } else {
          setState({ error: ["Something went wrong!"] });
        }
      }
    });
  };

  return { state, isPending, onClick };
}
