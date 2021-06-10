import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const {isOpen, onClose, onOpen} = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [imgUrl, setImgUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function viewImage(url: string) {
    setImgUrl(url)
    onOpen()
  }
  
  return (
    <SimpleGrid columns={3} spacing="40px">
      {cards.map(card => {
        return (
          <Card key={card.id} data={card} viewImage={viewImage} />
        )
      })}

      {!!imgUrl && (
        <ModalViewImage onClose={onClose} isOpen={isOpen} imgUrl={imgUrl}/>
      )}
    </SimpleGrid>
  );
}
