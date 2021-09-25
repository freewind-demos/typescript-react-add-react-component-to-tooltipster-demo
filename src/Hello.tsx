import React, {FC, useState} from 'react';

type Props = {}

export const Hello: FC<Props> = ({}) => {
  const [content, setContent] = useState('text')
  return <form>
    <textarea value={content} onChange={e => setContent(e.target.value)}/>
    <button type={'button'} onClick={() => alert(content)}>Submit</button>
  </form>;
}
