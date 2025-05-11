import {create} from 'zustand'

interface uploadModal{
    isOpen:boolean,
    onClose:()=>void,
    onOpen:()=>void
}

const useUploadModal = create<uploadModal>((set)=>({
isOpen:false,
onOpen:()=>set({isOpen:true}),
onClose:()=>set({isOpen:false})
}))

export default useUploadModal;