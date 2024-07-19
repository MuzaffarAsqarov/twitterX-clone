import {create} from "zustand"

interface AuthetModalState{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const  useLoginModal = create<AuthetModalState> ((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false  }),
}))

export default AuthetModalState;