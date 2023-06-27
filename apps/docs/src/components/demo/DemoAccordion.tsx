import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import Image from "next/image";
import Cat from "../../../public/cat.jpg";

const DemoAccordion = () => {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <Accordion type="single" collapsible className="w-full max-w-2xl">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="multiple" className="w-full max-w-2xl">
        <AccordionItem value="item-1">
          <AccordionTrigger>Wanna see a cat?</AccordionTrigger>
          <AccordionContent asChild>
            <div className="flex flex-col items-center">
              Hello :D
              <Image className="aspect-square max-w-full" src={Cat} alt={"A picture of a really cute cat"} />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Wanna know a cat fact?</AccordionTrigger>
          <AccordionContent>
            There is a tower in Scotland which has been built in commemoration of a cat named Towser. The tower is a
            celebration of all the mice she killed in her lifetime, which is a number over 30,000.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default DemoAccordion;
