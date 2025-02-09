'use client';


import Image from "next/image"
import X_logo from "../../public/images/x.svg"
import Button from "../ui/button"
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai"
import useRegisterModal from "@/hooks/useRegisterModal"
import { useCallback } from "react"
import RegisterModal from "../modals/regiter-modal"
import useLoginModal from "@/hooks/useLoginModal";
import LoginModal from "../modals/login-modal";

const Auth = () => {
    const registerModal =  useRegisterModal();
    const loginModal = useLoginModal()

    const onOpenRegisterModal = useCallback(() => {
        registerModal.onOpen();
    }, [registerModal])

    const onOpenLoginModal = useCallback(() => {
        loginModal.onOpen();
    }, [loginModal])

    return (
        <>
            <RegisterModal/>
            <LoginModal/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen">
                <Image
                    src={X_logo}
                    alt="X"
                    width={450}
                    height={450}
                    className="justify-self-center hidden md:block"
                />

                <div className="flex flex-col justify-center md:justify-between gap-6 h-full md:h-[70vh]">
                    <div className="block md:hidden">
                        <Image
                            src={X_logo}
                            alt="X"
                            width={50}
                            height={50}
                        />
                    </div>
                    <h1 className="text-6xl font-bold">Heppening now</h1>
                    <div className="w-full md:w-[60%]">
                        <h2 className="font-bold text-3xl mb-4">Join today</h2>
                        <div className="flex flex-col space-y-2">
                            <Button label={
                                <div className="flex gap-2 items-center justify-center">
                                    <FcGoogle />
                                    Signup with Google
                                </div>
                            } fullWidth secondary />
                            <Button label={
                                <div className="flex gap-2 items-center justify-center">
                                    <AiFillGithub />
                                    Signup with Gidhub
                                </div>
                            } fullWidth secondary />
                            <div className="flex items-center justify-center">
                                <div className="h-px bg-gray-700 w-1/2" />
                                <p className="mx-4">or</p>
                                <div className="h-px bg-gray-700 w-1/2" />
                            </div>
                            <Button label="Create account" fullWidth  onClick={onOpenRegisterModal}/>
                        </div>
                    </div>
                    <div className="w-full md:w-[60%]">
                        <h3 className="font-medium text-xl mb-4">Already have an account?</h3>
                        <Button label="Sign in" fullWidth outline={true} onClick={onOpenLoginModal}/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth