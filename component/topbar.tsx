import { Button, IconButton, Image, Tooltip } from '@chakra-ui/react';
import { RiLinkedinBoxFill, RiGithubFill, RiMediumFill } from 'react-icons/ri';

export default function Topbar() {
  return (
    <header>
      <div className="avatar">
        <Image
          src="/me.png"
          width={100}
          height={100}
        />
      </div>
      <div className="header__actions">
      <Button colorScheme="blue" size="md">
        get in touch
      </Button>
        <Tooltip hasArrow label="" placement="auto">
          <IconButton
            variant="ghost"
            colorScheme="blue"
            size="md"
            aria-label="Linkedin"
            icon={<RiLinkedinBoxFill />}
          />
        </Tooltip>
        <Tooltip hasArrow label="" placement="auto">
          <IconButton
            variant="ghost"
            colorScheme="blue"
            size="md"
            aria-label="Github"
            icon={<RiGithubFill />}
          />
        </Tooltip>
        <Tooltip hasArrow label="" placement="auto">
          <IconButton
            variant="ghost"
            colorScheme="blue"
            size="md"
            aria-label="Medium"
            icon={<RiMediumFill />}
          />
        </Tooltip>


      </div>
    </header>
  );
}
