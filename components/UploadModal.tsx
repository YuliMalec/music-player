
'use client'
import React from 'react'

import { Modal } from './Modal'
import useUploadModal from '@/hooks/useUploadModal'

export default function UploadModal() {
    const uploadModal = useUploadModal()
    const onChange = (open:boolean) =>{
      if(!open){
      ////reset form
        uploadModal.onClose()
    }
    }
  return (
    <Modal 
    isOpen={uploadModal.isOpen} 
    onChange={onChange}
    title='Add a song'
    description='Upload an mp3 file'>
      <form>
        <input/>
      </form>
    </Modal>
  )
}
