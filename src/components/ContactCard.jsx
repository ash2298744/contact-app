import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclose from '../useDisclose'
import { toast } from 'react-toastify'

const ContactCard = ({contact}) => {

    const {isOpen, onClose, onOpen} = useDisclose();

    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id));
            toast.success("Contact Deleted Sucessfully");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div key={contact.id} className="bg-yellow flex items-center p-2 rounded-lg justify-between">
                <div className="flex gap-2">
                    <FaRegUserCircle className="text-orange text-4xl"/>
                    <div className="">
                    <h2 className="font-medium">{contact.name}</h2>
                    <p className="text-sm">{contact.email}</p>
                    </div>
                </div>
                <div className="flex text-3xl">
                    <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
                    <IoMdTrash onClick={() => deleteContact(contact.id)} className="text-orange cursor-pointer"/>
                </div>
                </div>
        <AddAndUpdateContact contact={contact} isUpdate={true} isOpen={isOpen} onClose={onClose}/>
        </>
    )
        
}

export default ContactCard