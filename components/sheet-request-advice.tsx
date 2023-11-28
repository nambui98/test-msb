"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { userAuthSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "./ui/use-toast";
import { Separator } from "./ui/separator";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { requestAdviceSchema } from "@/lib/validations/request-advice";
import { productCategories } from "@/config/site";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
type FormData = z.infer<typeof requestAdviceSchema>;

type Props = {};

export default function SheetRequestAdvice({}: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const form = useForm<FormData>({
    defaultValues: {
      products: [],
    },
    resolver: zodResolver(requestAdviceSchema),
  });
  const { handleSubmit } = form;

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    setIsLoading(false);

    // if (!signInResult?.ok) {
    //   return toast({
    //     title: "Đã có lỗi xảy ra",
    //     description: "Đăng nhập lỗi, vui lòng thử lại.",
    //     variant: "destructive",
    //   });
    // }

    return toast({
      title: "Kiểm tra lại thông tin đăng nhập",
      description: "We sent you a login link. Be sure to check your spam too.",
    });
  }
  return (
    <Sheet>
      <Form {...form}>
        <SheetOverlay />
        <SheetTrigger asChild>
          <Button variant={"outline"} className="!ml-6">
            Yêu cầu tư vấn
          </Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-[500px] p-4">
          <SheetHeader className="pb-4 text-lg font-bold text-secondary-800">
            <SheetTitle>Yêu cầu tư vấn</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-[calc(100%_-_44px)]">
            <Separator />
            <h3 className="text-lg text-secondary-800 py-4 font-medium">
              Thông tin khách hàng
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-secondary-800">
                        Họ và tên
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập họ và tên"
                          autoCapitalize="none"
                          autoComplete="fullName"
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
                  name="phoneNumber"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-secondary-800">
                        Số điện thoại
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập số điện thoại"
                          autoCapitalize="none"
                          autoComplete="phoneNumber"
                          autoCorrect="off"
                          {...field}
                          error={!!fieldState.error}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-x-4">
                  <FormField
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Thành phố</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn thành phố" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hanoi">Hà Nội</SelectItem>
                            <SelectItem value="hcm">Hồ Chí Minh</SelectItem>
                            <SelectItem value="hy">Hưng Yên</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel> Quận/Huyện </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn Quận/Huyện" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">m@example.com</SelectItem>
                            <SelectItem value="2">m@google.com</SelectItem>
                            <SelectItem value="m@support.com">
                              m@support.com
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Giới tính</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-[72px] items-center"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="1" />
                            </FormControl>
                            <FormLabel className="font-normal">Nam</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="0" />
                            </FormControl>
                            <FormLabel className="font-normal">Nữ</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="products"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">
                          Sản phẩm cần tư vấn
                        </FormLabel>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {productCategories.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="products"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              item.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {item.title}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="more"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-secondary-800">
                        Chúng tôi có thể hỗ trợ gì cho bạn?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Nhập thông tin"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className="relative !mt-auto bottom-0" type="submit">
                Xác nhận
              </Button>
            </form>
          </div>
        </SheetContent>
      </Form>
    </Sheet>
  );
}
