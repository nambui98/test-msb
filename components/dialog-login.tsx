"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { userAuthSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Icons } from "./icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { MenubarTrigger } from "./ui/menubar";
import { toast } from "./ui/use-toast";

type FormData = z.infer<typeof userAuthSchema>;
export function DialogLogin() {
  const router = useRouter();
  const refClose = useRef<HTMLButtonElement | null>(null);
  const form = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const { handleSubmit } = form;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    signIn("username_password", {
      username: data.username,
      password: data.password,
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/dashboard",
    })
      .then(({ ok, error }: any) => {
        console.log(error);
        if (ok) {
          refClose.current?.click();
          form.reset();
          router.push("/dashboard");
          router.refresh();
        } else {
          toast({
            title: error,
            description: "Đăng nhập lỗi, vui lòng thử lại.",
            variant: "destructive",
          });
        }
      })
      .catch((err) => {
        toast({
          title: err,
          description: "Đăng nhập lỗi, vui lòng thử lại.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <Dialog>
      <Form {...form}>
        <DialogOverlay />
        <DialogTrigger asChild>
          <MenubarTrigger>Đăng nhập</MenubarTrigger>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[343px] gap-5 rounded-2xl sm:rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle>Đăng nhập</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-secondary-800">
                    Tên tài khoản
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập tên tài khoản"
                      autoCapitalize="none"
                      autoComplete="username"
                      autoCorrect="off"
                      {...field}
                      error={!!fieldState.error}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-secondary-800">
                    Mật khẩu
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập mật khẩu"
                      autoCapitalize="none"
                      type="password"
                      autoComplete="password"
                      autoCorrect="off"
                      {...field}
                      error={!!fieldState.error}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="sm:justify-start space-x-4 flex !mt-6">
              <DialogClose asChild>
                <Button
                  ref={refClose}
                  type="button"
                  className="flex-1"
                  variant="outline"
                >
                  Đóng
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1"
                variant="default"
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Đăng nhập
              </Button>
            </DialogFooter>
          </form>
          {/* <Button type="submit" size="sm" className="px-3">
          <span className="sr-only">Copy</span>
          <CopyIcon className="h-4 w-4" />
        </Button> */}
          {/* </div> */}
        </DialogContent>
        {/* </form> */}
      </Form>
    </Dialog>
  );
}
