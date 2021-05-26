import { Button, IconButton, Image, Link, Tooltip } from '@chakra-ui/react';
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
        <Link href="https://www.linkedin.com/in/candidosales/" isExternal>

          <IconButton
            variant="ghost"
            color="gray.600"
            size="md"
            aria-label="Linkedin"
            icon={<RiLinkedinBoxFill />}
          />
          </Link>
        </Tooltip>
        <Tooltip hasArrow label="" placement="auto">
        <Link href="https://github.com/candidosales" isExternal>

          <IconButton
            color="gray.600"
            variant="ghost"
            size="md"
            aria-label="Github"
            icon={<RiGithubFill />}
          />
          </Link>
        </Tooltip>
        <Tooltip hasArrow label="" placement="auto">
          <Link href="https://medium.com/@candidosales" isExternal>
            <IconButton
              color="gray.600"
              variant="ghost"
              size="md"
              aria-label="Medium"
              icon={<RiMediumFill />}
            />
          </Link>

        </Tooltip>


      </div>
    </header>
  );
}
