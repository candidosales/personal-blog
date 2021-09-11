import React, {ReactElement} from "react";
import {
  Button,
  IconButton,
  Link,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import {RiLinkedinBoxFill, RiGithubFill, RiMediumFill} from "react-icons/ri";
import Image from "next/image";
import ModalContact from "./modal-contact";

const Topbar = (): ReactElement => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <header className="header">
      <div className="avatar">
        <Image
          src="/me-2.png"
          width={100}
          height={100}
          alt="Profile image"
          title="Profile image"
          loading="lazy"
        />
      </div>
      <div className="header-actions">
        <Button colorScheme="whatsapp" size="sm" onClick={onOpen}>
          get in touch
        </Button>
        <Tooltip hasArrow label="" placement="auto">
          <Link href="https://www.linkedin.com/in/candidosales/" isExternal>
            <IconButton
              variant="ghost"
              size="md"
              aria-label="Linkedin"
              icon={<RiLinkedinBoxFill />}
            />
          </Link>
        </Tooltip>
        <Tooltip hasArrow label="" placement="auto">
          <Link href="https://medium.com/@candidosales" isExternal>
            <IconButton
              variant="ghost"
              size="md"
              aria-label="Medium"
              icon={<RiMediumFill />}
            />
          </Link>
        </Tooltip>
        <Tooltip hasArrow label="" placement="auto">
          <Link href="https://github.com/candidosales" isExternal>
            <IconButton
              variant="ghost"
              size="md"
              aria-label="Github"
              icon={<RiGithubFill />}
            />
          </Link>
        </Tooltip>
      </div>
      <ModalContact isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

export default Topbar;
