## Format for components

Every single component file in here should have:

\--- <br />
title: Component's title <br />
description: Component's description <br />
\---

\<ComponentDemo name="componentName" />

\## \<HeaderLink href="#installation">Installation\</HeaderLink>

\<Steps id="installation">

\<Step className="inline-flex items-center gap-2">
Follow the
\<Link className="inline-block underline decoration-primary" href={"/docs/getting-started"}>
Getting Started

  </Link>
  instructions to setup your project
</Step>

\<Step>Copy paste the following</Step>
\<ComponentSource name="componentName" />

\</Steps>

\## \<HeaderLink href="#usage">Usage\</HeaderLink>

### A code block showing how to use the component. For e.g.

\<CodeBlock id="usage">

```tsx
<Accordion type="single" collapsible>
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
```

\</CodeBlock>

\## \<HeaderLink href="#anatomy">Anatomy\</HeaderLink>

### A code block showing the structure of the component. For e.g.

\<CodeBlock id="anatomy">

```tsx
<Accordion>
  <AccordionTrigger></AccordionTrigger>
  <AccordionContent>
    <AccordionItem></AccordionItem>
  </AccordionContent>
</Accordion>
```

\</CodeBlock>
