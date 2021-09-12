import React, {ReactElement} from "react";

import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import {RiMailFill, RiWhatsappFill} from "react-icons/ri";
import {chooseTranslate} from "../utils/translate";
const ModalContact = ({isOpen, onClose, locale}): ReactElement => {
  const t = chooseTranslate(locale);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t.getInTouch} 😃</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>
            {t.contact.itWillBe} <br />
          </p>
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {t.contact.newProject.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {t.contact.newProject.description}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {t.contact.consultancy.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {t.contact.consultancy.description}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {t.contact.mentoring.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {t.contact.mentoring.description}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <p>{t.contact.feelFreeToSpeak}</p>
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
