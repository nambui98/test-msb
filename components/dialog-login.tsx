"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyIcon } from "lucide-react";
import { MenubarTrigger } from "./ui/menubar";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { userAuthSchema } from "@/lib/validations/auth";
import { toast } from "./ui/use-toast";
import { Icons } from "./icons";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;
export function DialogLogin() {
  const form = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  async function onSubmit(data: FormData) {
    debugger;
    setIsLoading(true);

    const signInResult = await signIn("username_password", {
      username: data.username,
      password: data.password,
      // redirect: false,
      callbackUrl: searchParams?.get("from") || "/dashboard",
    });

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast({
        title: "Đã có lỗi xảy ra",
        description: "Đăng nhập lỗi, vui lòng thử lại.",
        variant: "destructive",
      });
    }

    return toast({
      title: "Kiểm tra lại thông tin đăng nhập",
      description: "We sent you a login link. Be sure to check your spam too.",
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
            {/* <div>
              <Label
                htmlFor="username"
                className="mb-1 text-sm font-medium text-secondary-800"
              >
                Tên tài khoản
              </Label>
              <Input
                placeholder="Nhập tên tài khoản"
                id="username"
                autoCapitalize="none"
                autoComplete="username"
                autoCorrect="off"
                disabled={isLoading}
                {...register("username")}
              />
              {errors?.username && (
                <p className="px-1 text-xs text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <Label
                htmlFor="password"
                className="mb-1 text-sm font-medium text-secondary-800"
              >
                Mật khẩu
              </Label>
              <Input
                placeholder="Nhập tên tài khoản"
                id="password"
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
                disabled={isLoading}
                {...register("password")}
              />
              {errors?.password && (
                <p className="px-1 text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div> */}
            <DialogFooter className="sm:justify-start space-x-4 flex !mt-6">
              <DialogClose asChild>
                <Button type="button" className="flex-1" variant="outline">
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