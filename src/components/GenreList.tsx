import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((gen) => (
          <ListItem key={gen.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(gen.image_background)}
              />
              <Button
                whiteSpace='normal'
                textAlign='left'
                fontWeight={gen.id === selectedGenre?.id ? 'bold' : 'normal'}
                onClick={() => onSelectGenre(gen)}
                fontSize='lg'
                variant='link'
              >
                {gen.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
