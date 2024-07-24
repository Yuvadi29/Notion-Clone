'use client';

import React, { useTransition } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { createNewDocument } from '@/actions/actions';

const NewDocumentButton = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleCreateDocument = async () => {
        const { docId } = await createNewDocument();
        router.push(`/doc/${docId}`);
    };

    return (
        <Button onClick={handleCreateDocument} disabled={isPending}>
            {isPending ? "Creating..." : "New Document"}
        </Button>
    )
}

export default NewDocumentButton