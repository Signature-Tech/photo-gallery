'use client';

import { SingleImageDropzone } from '@/components/SingleImageDropZone';
import { Button } from '@/components/ui/button';
import { useEdgeStore } from '@/lib/edgestore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Form() {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const router = useRouter()
  const upload = async () => {
    if (file) {
      const res = await edgestore.publicFiles.upload({file,});
      const save = await fetch('/api/save', {
        method : "POST",
        body : JSON.stringify({
          url : res.url
        })
      })

      if (save.ok) {
        router.push('/')
        router.refresh()
      }
      
    }
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <SingleImageDropzone
          width={400}
          height={400}
          value={file}
          onChange={(file) => {
            setFile(file);
          }}
        />
        <Button onClick={upload} className='m-10'>Upload</Button>
      </div>
    </div>
  );
}