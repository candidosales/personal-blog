import React, {ReactElement} from "react";

import {
  Button,
  IconButton,
  Link,
  Tooltip,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMediumFill,
  RiMailFill,
  RiWhatsappFill,
} from "react-icons/ri";
const ModalContact = ({isOpen, onClose}): ReactElement => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Get in touch 😃</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>
            It will be a pleasure to talk to you about: <br />
          </p>
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    💡 New project
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                I'm always interested in knowing your ideas, analyzing
                feasibility and we can even build together 😊.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    📚 Consultancy
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                I have experience in various markets such as e-commerce,
                finance, marketing, telecommunication, security and with that I
                can share some of my knowledge and help your project or idea.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    👨🏻‍🏫 Mentoring
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                I would like to hear your story and present the possibilities
                that computing and the technology market can offer your career
                😃.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <p>👋 Feel free to speak with me by</p>
          <Stack direction="row" spacing={4} className="modal-contact">
            <Link
              href="mailto:candidosg@gmail.com"
              isExternal
              title="by E-mail ..."
            >
              <Button
                leftIcon={<RiMailFill />}
                colorScheme="whatsapp"
                variant="solid"
              >
                E-mail
              </Button>
            </Link>
            <Link
              href="https://wa.me/13068800349"
              isExternal
              title="or WhatsApp"
            >
              <Button
                leftIcon={<RiWhatsappFill />}
                colorScheme="whatsapp"
                variant="solid"
              >
                WhatsApp
              </Button>
            </Link>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalContact;
