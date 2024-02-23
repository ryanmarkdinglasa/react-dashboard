import { LuFileSignature } from "react-icons/lu"

import { ActionButton, ActionButtonProps } from '@/components'

export const NewNoteButton = ({..._props}: ActionButtonProps) => {
    return (
        <>
            <ActionButton {..._props}>
                <LuFileSignature className='w-4 h-4 text-zinc-300' />
            </ActionButton>
        </>
    )
}