import {create} from 'zustand'

interface registerModal{
    isOpen:boolean,
    onClose:()=>void,
    onOpen:()=>void,
    error:string,
    setError:(error:string)=>void
}

const useRegisterModal = create<registerModal>((set)=>({
isOpen:false,
error:'',
onOpen:()=>set({isOpen:true}),
onClose:()=>set({isOpen:false}),
setError:(err)=>set({error:err})
}))

export default useRegisterModal;