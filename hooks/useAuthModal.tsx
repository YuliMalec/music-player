import {create} from 'zustand'

interface authModal{
    isOpen:boolean,
    onClose:()=>void,
    onOpen:()=>void
}

const useAuthModal = create<authModal>((set)=>({
isOpen:false,
onOpen:()=>set({isOpen:true}),
onClose:()=>set({isOpen:false})
}))

export default useAuthModal;