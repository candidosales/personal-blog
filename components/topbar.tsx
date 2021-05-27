import {
  Button,
  IconButton,
  Image,
  Link,
  Tooltip,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMediumFill,
  RiMailFill,
  RiWhatsappFill
} from 'react-icons/ri';
import { Box } from '@chakra-ui/react';

export default function Topbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className="header">
      <Image
        className="avatar"
        src="/me.png"
        width={100}
        height={100}
        alt="Profile image"
        title="Profile image"
      />
      <div className="header-actions">
        <Button colorScheme="whatsapp" size="md" onClick={onOpen}>
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
          <Link href="https://github.com/candidosales" isExternal>
            <IconButton
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
              variant="ghost"
              size="md"
              aria-label="Medium"
              icon={<RiMediumFill />}
            />
          </Link>
        </Tooltip>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Get in touch 😃</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              It will be a pleasure to talk to you about any new project,
              consultancy or mentoring. <br />
              <br />
              👋 Feel free to speak with me by one of the means below:
            </p>
            <Box className="modal-contact">
              <Link href="mailto:candidosg@gmail.com" isExternal>
                <IconButton
                  variant="ghost"
                  size="md"
                  aria-label="E-mail"
                  icon={<RiMailFill />}
                />
              </Link>

              <Link href="https://wa.me/13068800349" isExternal>
                <IconButton
                  variant="ghost"
                  size="md"
                  aria-label="WhatsApp"
                  icon={<RiWhatsappFill />}
                />
              </Link>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </header>
  );
}
