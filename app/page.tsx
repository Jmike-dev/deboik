"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Eye, Mail, User } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { createUser } from "./services/apiService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";


const formSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "last name must be at least 2 characters"),
    email: z.string().email("invalid email address"),
    password: z.string().min(5, "must have minimum of 5 charaters"),
});
export default function SignUp() {
        const router = useRouter();


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log(data);
        try {
            await createUser(data);
            toast.success("User created");
            form.reset();
            router.push('/dashboard')
        } catch {
            toast.error("Could not create user");
        }
    };
    

    return (
        <div className="bg-brand-grey flex h-screen flex-col md:flex-row">
            {/* Left Section (Web View) */}
            <div className="relative hidden w-3/5 md:flex">
                <Image
                    src="/deboik.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="bg-opacity-30 absolute inset-0 mt-[32rem] flex h-1/2 flex-col items-center justify-center p-6 text-white">
                    <h2 className="text-2xl font-bold">No Hazzles</h2>
                    <p className="mt-2 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                    </p>
                </div>
            </div>

            {/* Right Section (Sign-Up Form) */}
            <div className="flex w-full flex-col items-center justify-center p-6">
                <div className="flex w-1/2 flex-col gap-6 p-8">
                    <h2 className="text-brand-text text-left text-3xl font-bold">
                        Create your free account Here
                    </h2>
                    <p className="text-left text-sm text-gray-500">
                        Already registered?{" "}
                        <a href="#" className="text-green-500">
                            Sign in
                        </a>
                    </p>
                </div>
                <Card className="w-full max-w-md rounded-xl p-6 shadow-lg">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="mt-6 space-y-4"
                        >
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem className="w-1/2">
                                            <Label className="text-gray-500">
                                                First Name
                                            </Label>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        {...field}
                                                        placeholder="First Name"
                                                        className="focus:border-brand-text border-b border-gray-300 pl-8 text-lg font-medium text-[#0F3B57] focus:ring-0"
                                                    />
                                                    <User
                                                        className="absolute top-3 right-3 text-gray-400"
                                                        size={16}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem className="w-1/2">
                                            <Label className="text-gray-500">
                                                Last Name
                                            </Label>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        placeholder="Last Name"
                                                        {...field}
                                                        className="focus:border-brand-text border-b border-gray-300 pl-8 text-lg font-medium text-[#0F3B57] focus:ring-0"
                                                    />
                                                    <User
                                                        className="absolute top-3 right-3 text-gray-400"
                                                        size={16}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label className="text-gray-500">
                                            Email
                                        </Label>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    {...field}
                                                    className="focus:border-brand-text border-b border-gray-300 pl-8 text-lg font-medium text-[#0F3B57] focus:ring-0"
                                                />
                                                <Mail
                                                    className="absolute top-3 right-3 text-gray-400"
                                                    size={16}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label className="text-gray-500">
                                            Password
                                        </Label>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type="password"
                                                    placeholder="Password"
                                                    {...field}
                                                    className="border-b-2 pr-10 pl-10"
                                                />
                                                <Eye
                                                    className="absolute top-3 right-3 cursor-pointer text-gray-400"
                                                    size={16}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <section className="flex justify-end">
                                <Button
                                    type="submit"
                                    className="w-1/2 rounded-none bg-green-500 hover:bg-green-600"
                                >
                                    Continue
                                </Button>
                            </section>
                        </form>
                    </Form>
                    <p className="mt-4 text-center text-xs text-gray-500">
                        By signing up, you agree to our{" "}
                        <a href="#" className="text-green-500">
                            Terms
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-green-500">
                            Privacy Policy
                        </a>
                    </p>
                </Card>
            </div>
        </div>
    );
}
