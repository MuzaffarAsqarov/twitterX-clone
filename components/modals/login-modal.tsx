import useLoginModal from "@/hooks/useLoginModal"
import Modal from "../ui/modal"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import Button from "../ui/button"
import { useForm } from "react-hook-form"
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useState } from "react"
import { loginSchema } from "@/lib/validation"
import useRegisterModal from "@/hooks/useRegisterModal"

export default function LoginModal() {
    const [data, setData] = useState({ email: "", password: "" })

    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const onToggle = useCallback(() =>{
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal])

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof loginSchema>) {
        setData(values)
    }

    const { isSubmitting } = form.formState;

    const body = <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-12">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Email" {...field} />
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
                        <FormControl>
                            <Input placeholder="Password" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button label={"Register"} type="submit" secondary fullWidth disabled={isSubmitting} />
        </form>
    </Form>

    const footer = (
        <div className="text-neutral-400 text-center mb-4">
            <p>
                Already   test  have an account? {" "}
                <span className="text-white cursor-pointer hover:underline" onClick={onToggle}>
                    Create an acoount
                </span>
            </p>
        </div>
    )
    return (
        <Modal
            isOpen={loginModal.isOpen}
            onClose={loginModal.onClose}
            body={body}
            footer={footer}
        />
    )
}
