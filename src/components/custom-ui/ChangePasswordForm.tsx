"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Shield } from "lucide-react";

const formSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[a-z]/, "Must contain a lowercase letter")
      .regex(/[A-Z]/, "Must contain an uppercase letter")
      .regex(/[0-9]/, "Must contain a number")
      .regex(/[^a-zA-Z0-9]/, "Must contain a special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export function ChangePasswordForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <Card>
        <CardHeader className="!flex flex-row gap-2">
          <Shield className="text-primary size-[24px]" />
          <p className="text-[17px] font-medium bg-card">
            Security (Change Password)
          </p>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full relative"
          >
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-5 sm:gap-6">
              {["currentPassword", "newPassword", "confirmPassword"].map(
                (fieldName) => (
                  <FormField
                    key={fieldName}
                    control={form.control}
                    name={fieldName as keyof z.infer<typeof formSchema>}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {fieldName === "currentPassword"
                            ? "Current Password"
                            : fieldName === "newPassword"
                            ? "New Password"
                            : "Confirm Password"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder={
                              fieldName === "currentPassword"
                                ? "Enter Current Password"
                                : "Enter New Password"
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )
              )}
            </div>
            <div className="w-fit ml-auto">
              <Button
                type="submit"
                className="mt-5 !ml-auto !rounded !w-fit bg-success"
              >
                Update Password
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Form>
  );
}
