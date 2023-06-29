import { allComponents } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";

import mdxComponents from "@/components/docs/mdxComponents";

export const generateStaticParams = async () =>
  allComponents.map((component) => ({ slug: component._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const component = allComponents.find((component) => component._raw.flattenedPath === params.slug);
  if (!component) throw new Error(`Component not found for slug: ${params.slug}`);

  return { title: component.title };
};

const ComponentLayout = ({ params }: { params: { slug: string } }) => {
  const component = allComponents.find((component) => component._raw.flattenedPath === params.slug);

  // 404 if the component does not exist.
  if (!component) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(component.body.code);

  return (
    <div className="flex w-full flex-col ">
      <article className="flex w-full max-w-4xl flex-col">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{component.title}</h1>
          <p className="text-light-text">{component.description}</p>
        </div>
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  );
};

export default ComponentLayout;
