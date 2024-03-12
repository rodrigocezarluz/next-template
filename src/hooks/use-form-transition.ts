"use client";

import { useState, useTransition } from "react";
import * as z from "zod";
import { ActionResult } from "@/actions";

interface useFormTransitionProps<T extends z.ZodType> {
  action: (values: z.infer<T>) => Promise<ActionResult>;
  initialState?: ActionResult;
  onSuccess?: () => void;
  onError?: () => void;
  handle_error?: (error: any) => void;
}

export function useFormTransition<T extends z.ZodType>({
  action,
  initialState = {},
  onSuccess = () => null,
  onError = () => null,
  handle_error,
}: useFormTransitionProps<T>) {
  const [state, setState] = useState<ActionResult>(initialState);
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<T>) => {
    // startTransition(() => {
    //   action(values)
    //     .then((res) => {
    //       setState(res);
    //       if (res?.error) {
    //         onError();
    //       }
    //       if (res?.success) {
    //         onSuccess();
    //       }
    //     })
    //     .catch((error) => {
    //       if (handle_error) {
    //         handle_error(error);
    //       } else {
    //         setState({ error: ["Something went wrong!"] });
    //       }
    //     });
    // });
    startTransition(async () => {
      try {
        const res = await action(values);
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
  return { state, isPending, onSubmit };
}
